<template>
  <!-- main div to store everthing -->
  <div class="flex h-screen flex-col items-center justify-center p-6">
    <!-- New practice area -->
    <div class="m-6 flex w-84 flex-col rounded-lg bg-blue-100 p-6 shadow-md">
      <h1 class="mb-6 text-2xl">Start new practice</h1>
      <p class="pb-4">Set the number of shots of the practice session.</p>
      <!-- left for input -->
      <div class="m-auto flex flex-row gap-4">
        <input
          v-model.number="goal"
          id="goal"
          type="number"
          class="mt-4 w-24 rounded-md border border-gray-400 p-2 text-center text-lg"
        />
        <button
          @click="startPractice(false)"
          :disabled="goal <= 0"
          class="mt-4 rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md disabled:opacity-50"
        >
          Start
        </button>
      </div>
    </div>

    <!-- Continue previous session -->
    <div v-if="sameDaySession" class="m-6 flex w-84 flex-col rounded-lg bg-green-100 p-6 shadow-md">
      <h1 class="mb-6 text-2xl">Resume previous session</h1>
      <p class="pb-4">You have a session from today. Do you want to continue?</p>
      <div class="m-4 flex justify-between gap-2 rounded-lg border border-blue-300 bg-blue-100 p-4 shadow-md">
        <label for="goal" class="text-w text-lg font-bold"> Goal: </label>
        <span class="text-gray-400">{{ currentSession.goal }}</span>
      </div>

      <button @click="startPractice(true)" class="mt-2 rounded-lg bg-green-500 px-6 py-2 text-white shadow-md">
        Resume
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const todayDate = getYYYYMMDD(); // Generate today's date string
const goal = ref(200);
const sameDaySession = ref(false);
let sessionId = '';
let currentSession = {};

// Function to get YYYYMMDD format date
function getYYYYMMDD() {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
}

onMounted(() => {
  // Retrieve session ID and check if it's from today
  try {
    currentSession = JSON.parse(localStorage.getItem('currentSession'));
  } catch {
    currentSession = null;
  }
  if (currentSession?.sessionId?.includes(todayDate)) {
    sameDaySession.value = true;
  }
});

// Function to start a new or continue an existing practice session
const startPractice = (reloadPrevious) => {
  if (reloadPrevious && sameDaySession.value) {
    sessionId = currentSession.sessionId;
    router.push({
      path: '/practice-d',
      query: {
        sessionId: sessionId,
        goal: currentSession.goal,
      },
    });
  } else {
    sessionId = `session-${todayDate}-${Date.now()}`;
    router.push({
      path: '/practice-d',
      query: {
        sessionId: sessionId,
        goal: goal.value,
      },
    });
  }
};
</script>
