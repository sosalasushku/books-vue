<template>
  <h3 class="uppercase text-center m-y-4">
    Результатов: {{ booksStore.quantity }}
  </h3>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="book in props.books" :key="book.etag">
      <BookCard :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import BookCard from "@/components/BookCard.vue";
import { useBooksStore } from "../stores/books";
import type { bookType } from "../types/types";

const props = defineProps<{
  books: bookType[];
}>();

const booksStore = useBooksStore();
</script>

<style lang="css" scoped>
  .booklist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
</style>