<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="p-4 border-solid border-4 border-black rounded-xl text-xl before:focus:content-['@'] before:focus:absolute before:focus:bg-black before:focus:w-2 before:focus:h-2 before:focus:left-2"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
});
</script>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function updateInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>