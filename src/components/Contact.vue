<script setup lang="ts">
// @ts-ignore
  import Waitlist from "./Waitlist.vue";
</script>

<template>
  <section
    id="contact"
    class="container py-24 sm:py-32"
  >
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <!-- <h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2> -->

          <h2 class="text-3xl md:text-4xl font-bold">Join our Waitlist</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Sign up for our waitlist today and be among the first to unlock early access, exclusive features, and special updates—don’t miss out!
        </p>

        <div class="flex flex-col gap-4">
        </div>
      </div>
        <Waitlist />
    </section>
  </section>
</template>
