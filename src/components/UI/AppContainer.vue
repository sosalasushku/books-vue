<template>
  <div class="p-t-20 md:p-t-40 p-b-20 h-full flex flex-col justify-center items-center">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppContainer",
});
</script>