<template lang="">
<AppContainer>
    <AppForm>
        <AppInput type='text' placeholder='Введите название книги...' v-model="booksStore.query"/>
        <div class='flex flex-col gap-4.5 md:flex-row'>
          <AppSelect :options="booksStore.categoryOptions" name='category' defaultValue='all' v-model="booksStore.category" />
          <AppSelect :options="booksStore.sortingOptions" name="sorting" defaultValue="relevance" v-model="booksStore.sorting" />  
        </div>
        <AppButton @click="booksStore.search">Найти</AppButton>
    </AppForm>
        <div v-if="booksStore.errorMessage" class="m-t-20 uppercase text-red font-bold">{{booksStore.errorMessage}}</div>
        <div v-else class='max-w-screen-xl m-t-20' v-if="booksStore.books?.length">
            <BookList :books="booksStore.books" />
            <AppButton class="m-t-6" @click="booksStore.loadMore">Показать ещё</AppButton>
        </div>
    </AppContainer>
</template>
<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useBooksStore } from "@/stores/books";
import BookList from "@/components/BookList.vue";
import router from "@/router";

const userStore = useUserStore();
const booksStore = useBooksStore();

onMounted(() => {
  if (userStore.activeUser === null) {
    router.push("/login");
  }
});
</script>
<style lang="">
</style>