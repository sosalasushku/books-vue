<template lang="">
<AppContainer>
  <AppForm>
    <AppInput type="text" placeholder="Имя" v-model="store.regUser.name" />
    <AppInput type="text" placeholder="Фамилия" v-model="store.regUser.surname"/>
    <AppInput type="tel" placeholder="Телефон" v-model="store.regUser.phone" v-maska data-maska="+7 (###) ###-##-##"/>
    <AppInput type="email" placeholder="E-mail" v-model.trim="store.regUser.email" />
    <AppInput type="password" placeholder="Пароль" v-model="store.regUser.password" />
    <AppButton @click="store.register">Зарегистрироваться</AppButton>
    <div class="uppercase text-red font-bold" v-if="store.isRegError" v-for="item in store.regErrorMessages">{{item}}</div>
  </AppForm>
  </AppContainer>
</template>
<script setup lang='ts'>
import { useUserStore } from "@/stores/user";
import { vMaska } from "maska";

const store = useUserStore();
</script>
<style lang="">
</style>