<script setup lang="ts">
  import Navbar from "./components/Navbar.vue"; // Common Navbar
  import Footer from "./components/Footer.vue"; // Common Footer
</script>

<template>
  <!-- Common Navbar -->
  <Navbar />

  <!-- Dynamic content rendered based on route -->
  <router-view />

  <!-- Common Footer -->
  <Footer />
</template>
