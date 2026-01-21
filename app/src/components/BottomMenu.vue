<template>
  <nav class="fixed bottom-0 w-full bg-gray-800 py-3 text-white">
    <div class="flex justify-around">
      <RouterLink to="/practice-g" class="menu-item" :class="{ 'text-blue-400': $route.path === '/practice-g' }"> Practice </RouterLink>
      <RouterLink to="/test" class="menu-item" :class="{ 'text-blue-400': $route.path === '/test' }"> Stats </RouterLink>
      <RouterLink to="/settings" class="menu-item" :class="{ 'text-blue-400': $route.path === '/settings' }"> Settings </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
const $route = useRoute();
</script>

<style>
/* ✅ Remove `scoped` to ensure Tailwind works */
.menu-item {
  text-align: center;
  font-size: 1.125rem; /* Equivalent to `text-lg` */
  font-weight: 600; /* Equivalent to `font-semibold` */
  padding: 0.5rem 1rem; /* Equivalent to `px-4 py-2` */
}
</style>
