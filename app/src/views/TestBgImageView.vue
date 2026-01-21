<template>
  <!-- Background container -->
  <div class="background-container">
    <!-- Each button is inside its own wrapper div -->
    <div class="button-wrapper button-one">
      <button @click="handleClick1" class="rounded-full p-2 transition-transform hover:scale-110">
        <img src="../assets/basketball.png" alt="Basketball" class="h-8 w-8" />
      </button>
    </div>
    <div class="button-wrapper button-two">
      <!-- <button @click="handleClick2">Button 2</button> -->
      <button @click="handleClick2" class="rounded-full p-2 transition-transform hover:scale-110">
        <img src="../assets/basketball.png" alt="Basketball" class="h-8 w-8" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PositionedButtons',
  methods: {
    handleClick1() {
      // Button 1 click handler
    },
    handleClick2() {
      // Button 2 click handler
    },
  },
};
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
  height: 40vh;
  background-image: url('../assets/HalfCourtBasketball.png');
  background-size: cover;
  background-position: center;
}

/* Shared wrapper for buttons */
.button-wrapper {
  position: absolute;
}

/* Positioning for Button 1 */
.button-one {
  top: 20%;
  left: 40%;
}

/* Positioning for Button 2 */
.button-two {
  top: 35%;
  left: 70%;
}

/* Button styling */
button {
  padding: 1em 1.5em;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
}
</style>
