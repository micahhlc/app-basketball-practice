<template>
  <div class="flex h-screen flex-col">
    <div class="flex-grow">
      <router-view />
    </div>
    <BottomMenu />
  </div>
</template>

<script setup>
import BottomMenu from "./components/BottomMenu.vue";
</script>

<style>
/* Optional: Add styles here */
</style>
