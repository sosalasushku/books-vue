<template lang="">
<AppContainer>
  <div class="p-5 grid gap-4 lg:p-10 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 max-w-4xl w-full border-4 border-solid rounded-2xl text-2xl uppercase break-words break-all" v-if="userStore.activeUser">
      <div class='text-gray'>Имя</div>
      <div>{{userStore.activeUser.name}}</div>
      <div class='text-gray'>Фамилия</div>
      <div>{{userStore.activeUser.surname}}</div>
      <div class='text-gray'>Email</div>
      <div>{{userStore.activeUser.email}}</div>
      <div class='text-gray'>Телефон</div>
      <div>{{userStore.activeUser.phone}}</div>
  </div>
  </AppContainer>
</template>
<script setup lang='ts'>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>
<style lang="css">
</style>