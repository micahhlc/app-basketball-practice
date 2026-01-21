<template>
  <!-- main div -->
  <div class="p-4 pb-20">
    <h1 class="mb-4 text-2xl font-bold">Practice Session</h1>

    <!-- Practice Goal -->
    <div class="mb-4 flex items-center justify-between rounded-lg border border-blue-300 bg-blue-100 p-3 shadow-md">
      <div class="flex items-center justify-between gap-4">
        <label for="goal" class="text-w text-lg font-bold"> Goal: </label>
        <span class="text-gray-400">{{ goal }}</span>
      </div>

      <!-- Right: Reach Goal Indicator -->
      <div class="mx-2 text-lg font-semibold text-blue-900">
        <span :class="goalReached ? 'text-green-600' : 'text-red-600'">
          {{ goalReached ? 'Yes 🎯' : 'No ❌' }}
        </span>
      </div>
    </div>

    <!-- Progress Display -->
    <div class="mb-4 flex items-center justify-between rounded-md bg-gray-100 p-3 text-lg">
      <p>
        Makes: <strong class="text-green-600">{{ totalMakes }}</strong>
      </p>
      <p>
        Total Shots: <strong class="text-red-600">{{ totalShots }}</strong>
      </p>
      <p>
        Make %: <strong class="text-yellow-600">{{ makePercentage }}%</strong>
      </p>
    </div>

    <!-- Shared Input Area -->
    <div class="mt-4 rounded-lg border border-gray-300 bg-gray-100 p-4">
      <!-- Toggle input mode -->
      <div class="flex items-center justify-between">
        <label class="mb-4 block text-lg font-medium">
          {{ isBulkMode ? 'Bulk Input Mode' : 'Live Mode' }}
        </label>
        <!-- Switch Component -->
        <div
          @click="toggleInputMode"
          class="relative mb-4 inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
          :class="[isBulkMode ? 'bg-blue-500' : 'bg-blue-300']"
        >
          <span
            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300"
            :class="{
              'translate-x-6': isBulkMode,
              'translate-x-1': !isBulkMode,
            }"
          ></span>
        </div>
      </div>

      <!-- Live Mode -->
      <div v-if="!isBulkMode" class="mt-2 flex justify-center gap-4">
        <button @click="logMake" class="rounded-lg bg-green-500 px-2 py-2 text-white shadow-md">Make</button>
        <p class="px-1 py-2 font-bold text-green-600">{{ makes }}</p>
        <button @click="logMiss" class="rounded-lg bg-red-500 px-2 py-2 text-white shadow-md">Miss</button>
        <p class="px-1 py-2 font-bold text-red-600">{{ misses }}</p>
        <span class="text-black-600 px-1 py-2 font-bold">Attempts </span>
        <span class="text-black-200 px-1 py-2 font-bold">{{ attempts }}</span>
      </div>

      <!-- Bulk Mode  -->
      <div v-if="isBulkMode" class="mt-2 flex gap-4">
        <span class="px-2 py-2 font-bold text-green-600">Makes</span>
        <input v-model.number="makes" type="number" class="w-1/2 rounded border p-1 text-center" />
        <span class="px-2 py-2 font-bold">Attempts</span>
        <input v-model.number="attempts" type="number" class="w-1/2 rounded border p-1 text-center" />
      </div>

      <button @click="logRound()" class="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md">
        Log Round
      </button>
    </div>

    <!-- Save Message -->
    <div v-if="alertMessage" class="p-2 text-center font-bold text-green-600">
      {{ alertMessage }}
    </div>

    <!-- Save Practice Session Button -->
    <div class="mt-4 flex justify-center">
      <button @click="savePracticeSession" class="w-full rounded-lg bg-green-500 px-4 py-2 text-white shadow-md">
        Save Practice Session
      </button>
    </div>

    <!-- Round Summary -->
    <div class="mt-6">
      <h2 class="mb-2 text-xl font-semibold">Rounds:</h2>
      <ul>
        <li
          v-for="(round, index) in rounds"
          :key="index"
          class="mb-2 rounded-lg border border-gray-300 bg-gray-100 p-4 shadow-sm"
        >
          <!-- First Row: Round Info & Buttons -->
          <div class="flex items-center justify-between">
            <!-- Left Side: Round Info -->
            <div>
              <strong>Round {{ index + 1 }}: </strong>
              <span class="font-semibold text-green-600">
                {{ round.makes }}
              </span>
              /
              <span class="font-bold">
                {{ round.attempts }}
              </span>
              <span class="px-2 font-bold"> {{ ((round.makes / round.attempts) * 100).toFixed(1) }}% </span>
            </div>

            <!-- Right Side: Edit & Delete Buttons -->
            <div class="flex gap-2">
              <button
                @click="editRound(index)"
                class="rounded-md border border-blue-600 px-3 py-1 text-blue-600 hover:bg-blue-100"
              >
                Edit
              </button>
              <button
                @click="deleteRound(index)"
                class="rounded-md border border-red-600 px-3 py-1 text-red-600 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>

          <!-- Second Row (Only Shown When Editing) -->
          <div v-if="editingIndex === index" class="mt-2 flex items-center gap-2">
            <input v-model.number="tempMakes" type="number" min="0" class="w-16 rounded border px-3 py-1 text-center" />
            <input
              v-model.number="tempAttempts"
              type="number"
              min="0"
              class="w-16 rounded border px-3 py-1 text-center"
            />
            <div class="flex gap-2">
              <button @click="saveEdit(index)" class="rounded bg-green-500 px-3 py-1 text-white">Save</button>
              <button @click="cancelEdit" class="rounded bg-gray-500 px-3 py-1 text-white">Cancel</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const ALERT_DISMISS_MS = 3000;

// Data
const router = useRouter();
const route = useRoute();
const sessionId = route.query.sessionId; //from practice-g
const goal = Number(route.query.goal); //from practice-g
const goalReached = computed(() => totalShots.value >= goal);

// Progress Display used variables
const totalShots = ref(0);
const totalMakes = computed(() => rounds.value.reduce((sum, round) => sum + round.makes, 0));
const makePercentage = computed(() =>
  (totalShots.value === 0 ? 0 : (totalMakes.value / totalShots.value) * 100).toFixed(1),
);

// Shared Input Area used variables
const makes = ref(0);
const misses = ref(0);
const attempts = ref(0);
const isBulkMode = ref(true);
// Toggle input mode
const toggleInputMode = () => {
  if (isBulkMode.value) {
    misses.value = attempts.value - makes.value;
  }
  isBulkMode.value = !isBulkMode.value;
};
// Live mode log makes and misses
const logMake = () => {
  makes.value++;
  // totalShots.value++;
  attempts.value++;
};
const logMiss = () => {
  misses.value++;
  // totalShots.value++;
  attempts.value++;
};
// Log round
const logRound = () => {
  if (attempts.value === 0) {
    alertMessage.value = "You haven't taken any shots!";
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }
  if (makes.value > attempts.value) {
    alertMessage.value = 'Makes cannot be greater than Total Shots!';
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }
  if (!makes.value) {
    alertMessage.value = 'Wrong input!';
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }
  rounds.value.push({ makes: makes.value, attempts: attempts.value });
  totalShots.value += attempts.value;
  makes.value = 0;
  misses.value = 0;
  attempts.value = 0;
};

// Save rounds used variables
const rounds = ref([]);
const alertMessage = ref('');
let currentSession = null; //onMount and savePracticeSession

// Save Practice Session
const savePracticeSession = () => {
  if (rounds.value.length === 0) {
    alertMessage.value = 'No rounds to save.';
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }

  const sessionData = {
    sessionId: sessionId,
    date: new Date().toLocaleString(),
    goal: goal,
    totalShots: totalShots.value,
    makes: totalMakes.value,
    rounds: [...rounds.value],
  };

  // Load existing sessions (as an object)
  let storedSessions = {};
  try {
    storedSessions = JSON.parse(localStorage.getItem('sessions')) || {};
  } catch {
    storedSessions = {};
  }

  // Add or update the session by ID
  storedSessions[sessionId] = sessionData;

  // Save back to localStorage
  localStorage.setItem('sessions', JSON.stringify(storedSessions)); //sessions
  localStorage.setItem('currentSession', JSON.stringify(sessionData)); //Current session only
  alertMessage.value = 'Practice session saved!';
  setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
};

// Edit and Delete Rounds
const editingIndex = ref(null); //Edit and Delete Rounds
const tempMakes = ref(0);
const tempAttempts = ref(0);
const editRound = (index) => {
  editingIndex.value = index;
  tempMakes.value = rounds.value[editingIndex.value].makes;
  tempAttempts.value = rounds.value[editingIndex.value].attempts;
};
const saveEdit = (index) => {
  if (tempAttempts.value === 0) {
    alertMessage.value = "You haven't taken any shots!";
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }
  if (tempMakes.value > tempAttempts.value) {
    alertMessage.value = 'Makes cannot be greater than Total Shots!';
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }
  if (!tempMakes.value) {
    alertMessage.value = 'Wrong input!';
    setTimeout(() => (alertMessage.value = ''), ALERT_DISMISS_MS);
    return;
  }
  rounds.value[editingIndex.value].makes = tempMakes.value;
  rounds.value[editingIndex.value].attempts = tempAttempts.value;
  totalShots.value = rounds.value.reduce((sum, round) => sum + round.attempts, 0);
  editingIndex.value = null;
};
const cancelEdit = () => {
  editingIndex.value = null;
};

const deleteRound = (index) => {
  totalShots.value -= rounds.value[index].attempts;
  rounds.value.splice(index, 1);
};

onMounted(() => {
  if (!sessionId) {
    router.push('/practice-g'); // Redirect to goal setting page
    return;
  }
  try {
    currentSession = JSON.parse(localStorage.getItem('currentSession'));
  } catch {
    currentSession = null;
  }
  if (currentSession?.rounds?.length > 0 && currentSession.sessionId == sessionId) {
    rounds.value = currentSession.rounds;
    totalShots.value = currentSession.totalShots;
  }
});
</script>
