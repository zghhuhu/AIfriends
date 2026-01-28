<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
</script>

<template>
  <!-- 把 RouterView 放进 Navbar 的 slot -->
  <Navbar>
    <main class="pt-16 min-h-screen">
      <RouterView />
    </main>
  </Navbar>
</template>