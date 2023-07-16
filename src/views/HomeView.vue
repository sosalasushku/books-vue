<template>
  <AppContainer>
    <Slider :imgs="imgs" />
  </AppContainer>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import Slider from "@/components/Slider.vue";

const imgs = [
  {
    id: 1,
    url: "src/media/book-1.jpg",
  },
  {
    id: 2,
    url: "src/media/book-2.jpg",
  },
  {
    id: 3,
    url: "src/media/book-3.jpg",
  },
];

const store = useUserStore();
</script>


