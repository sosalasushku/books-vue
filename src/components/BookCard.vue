<template>
  <div
    class="flex gap-4 h-50 overflow-hidden border-solid border-4 border-black rounded-xl"
  >
    <div class="min-w-30 max-w-30 border-r-solid border-r-4">
      <img
        class="w-full h-full object-cover"
        v-if="book?.volumeInfo?.imageLinks?.thumbnail"
        :src="book?.volumeInfo?.imageLinks?.thumbnail"
        alt=""
        loading="lazy"
      />
      <p
        v-else
        class="h-full min-w-30 max-w-30 border-r-solid bg-gray text-black flex items-center justify-center lowercase text-center"
      >
        Нет изображения
      </p>
    </div>
    <div class="flex flex-col justify-end p-4 p-l-0">
      <p v-for="author in book?.volumeInfo.authors" :key="author">
        {{ author }}
      </p>
      <h4 class="uppercase m-t-2">{{ book?.volumeInfo.title }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type bookType from "@/types/types";
  const props = defineProps<{
    book: bookType;
  }>();
</script>