<template lang="">
    <header class="flex justify-between fixed inset-x-5 top-5 px-6 py-3 rounded-2xl bg-black text-white z-10">
        <app-link class="font-bold" to="/" @click="closeDropdown">Книги</app-link>
        <app-link to="" class="md:hidden" @click="toggleOpenDropdown">Меню</app-link>
        <nav class="hidden md:flex md:gap-10">
            <app-link v-for="link in links" :key="link.id" :to="link.url" @click="link.onClick">{{link.name}}</app-link>
        </nav>
    </header>
    <nav v-if="isDropdownOpen" class="md:hidden fixed top-24 inset-x-5 bg-black flex flex-col px-6 py-6 rounded-2xl z-10">
      <div class="p-y-1" @click="closeDropdown" v-for="link in links">
        <app-link class="text-xl" :key="link.id" :to="link.url" @click="link.onClick">{{link.name}}</app-link>
      </div>
      <button class="bg-transparent text-white border-none text-2xl text-start" @click="closeDropdown">✖</button>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppHeader",
});
</script>

<script setup lang="ts">
import {ref} from "vue"
import type { linkType } from "@/types/types";
import AppLink from "@/components/UI/AppLink.vue"

const props = defineProps<{
  links: linkType[];
}>();

const isDropdownOpen = ref(false)

function toggleOpenDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function closeDropdown() {
  isDropdownOpen.value = false
}


</script>

<style lang="css">
  @media(min-width: 768px) {
    .router-link-exact-active {
      text-decoration: line-through;
    }
  }
</style>