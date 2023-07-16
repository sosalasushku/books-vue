<template>
  <AppHeader v-if="userStore.activeUser" :links="userStore.linksAuth" />
  <AppHeader v-else :links="userStore.linksNotAuth" />
  <RouterView />
</template>

<script setup lang="ts">
import AppHeader from "@/components/UI/AppHeader.vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  padding: 20px;
  height: calc(100vh - 40px);
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
