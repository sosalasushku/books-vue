<template>
  <AppContainer>
    <AppForm>
      <AppInput
        v-model="store.logUser.email"
        type="'text'"
        placeholder="Email"
      />
      <AppInput
        v-model="store.logUser.password"
        type="password"
        placeholder="Пароль"
      />
      <AppButton @click="store.logIn">Войти</AppButton>
      <div class="uppercase text-red font-bold text-center" v-if="store.isLogError" v-for="item in store.logErrorMessages">{{item}}</div>
    </AppForm>
    
  </AppContainer>
</template>
<script setup lang='ts'>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
</script>
<style lang="">
</style>