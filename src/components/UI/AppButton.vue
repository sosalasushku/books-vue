<template>
  <button
    class="p-4 w-full bg-black border-solid border-black rounded-xl text-white text-xl uppercase hover:cursor-pointer hover:outline-2 hover:outline-solid hover:outline-black hover:outline-offset-2 active:outline-2 active:outline-solid active:outline-black active:outline-offset-2"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppButton",
});
</script>
