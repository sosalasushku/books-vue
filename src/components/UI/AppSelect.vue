<template>
  <select
    :value="modelValue"
    @input="updateSelect"
    class="flex w-full p-4 border-solid border-4 border-black rounded-xl text-xl before:focus:content-['@'] before:focus:absolute before:focus:bg-black before:focus:w-2 before:focus:h-2 before:focus:left-2"
  >
    <option :value="option.value" :key="option.value" v-for="option in options">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppSelect",
});
</script>

<script setup lang='ts'>
const prop = defineProps<{
  modelValue: string;
  options: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateSelect(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>