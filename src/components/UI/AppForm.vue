<template>
  <form @submit.prevent class="max-w-2xl w-full flex flex-col gap-5">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppForm",
});
</script>
