<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const plugin = Autoplay({
  delay: 2000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const images = [
  { src: "/app/main-dash.png" },
  { src: "/app/deps.png" },
  { src: "/app/invs.png" },
  { src: "/app/mods.png" },
  { src: "/app/comps.png" },
]

</script>

<template>
    <div class="flex justify-center w-full"> <!-- Center the carousel container -->
      <Carousel
        class="relative w-full max-w-6xl"
        :plugins="[plugin]"
        @mouseenter="plugin.stop"
        @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
      >
        <CarouselContent>
          <CarouselItem v-for="(image, index) in images" :key="index">
            <div class="p-1">
              <!-- <Card> -->
                <CardContent class="flex aspect-square items-center justify-center">
                  <img :src="image.src" alt="Image" class="w-full object-cover rounded-lg" />
                </CardContent>
              <!-- </Card> -->
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </template>
  
