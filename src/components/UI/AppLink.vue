<template>
  <RouterLink class="text-white text-4xl uppercase no-underline">
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppLink",
});
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>