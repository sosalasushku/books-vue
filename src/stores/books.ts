import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { optionType, bookType } from "@/types/types";
import router from "@/router/index.ts";

export const useBooksStore = defineStore('books', () => {
  const query = ref('')
  const category = ref('all')
  const sorting = ref('relevance')
  const books = ref<bookType[]>([])
  const quantity = ref(0)
  const startIndex = ref(0)
  const errorMessage = ref('')

  const categoryOptions: optionType[] = [
    {
      name: "Все",
      value: "all",
    },
    {
      name: "Искусство",
      value: "art",
    },
    {
      name: "Биография",
      value: "biography",
    },
    {
      name: "IT",
      value: "computers",
    },
    {
      name: "История",
      value: "history",
    },
    {
      name: "Медицина",
      value: "medical",
    },
    {
      name: "Поэзия",
      value: "poetry",
    },
  ];

  const sortingOptions: optionType[] = [
    {
      name: "По соответствию",
      value: "relevance",
    },
    {
      name: "Сначала новые",
      value: "newest",
    },
  ];

  async function fetchBooks() {
    errorMessage.value = ''
    let result = null
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query.value}${category.value === 'all' ? '' : `+subject:${category.value}`}&orderBy=${sorting.value}&maxResults=18&startIndex=${startIndex.value}&key=AIzaSyAXnWwzXfdnm4FgQTRfGPLpU1nWl6b1qxo`)
      result = await response.json()
    } catch (e) {
      errorMessage.value = 'Ошибка загрузки'
      return null
    }
    return result
  }

  async function search() {
    startIndex.value = 0
    const result = await fetchBooks()
    quantity.value = result?.totalItems
    books.value = result?.items
  }

  async function loadMore() {
    startIndex.value += 18
    const result = await fetchBooks()
    books.value = [...books.value, ...result?.items]
  }

  return { query, category, sorting, books, quantity, errorMessage, search, loadMore, categoryOptions, sortingOptions }
})
