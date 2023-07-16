<template>
  <div
    class="relative overflow-hidden w-full max-w-[1180px] border-solid border-4 rounded-2xl"
  >
    <div
      id="slider"
      class="flex flex-nowrap overflow-hidden snap-mandatory snap-x"
    >
      <div
        class="flex w-full h-150 snap-center"
        v-for="img in imgs"
        :key="img.id"
        :id="`#image${img.id}`"
      >
        <img
          class="w-300 h-full object-cover object-center"
          :src="img.url"
          alt=""
        />
      </div>
    </div>
    <button
      class="absolute bottom-4 left-4 text-3xl bg-white border-solid border-4 border-black rounded-2xl w-16 h-16 hover:cursor-pointer hover:bg-black hover:text-white active:bg-black active:text-white"
      @click="prevSlide"
    >
      🡰
    </button>
    <button
      class="absolute bottom-4 right-4 text-3xl bg-white border-solid border-4 border-black rounded-2xl w-16 h-16 hover:cursor-pointer hover:bg-black hover:text-white  active:bg-black active:text-white"
      @click="nextSlide"
    >
      🡲
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["imgs"]);
const curSlide = ref(1);

function nextSlide() {
  if (curSlide.value === props.imgs.length) {
    curSlide.value = 1;
  } else {
    curSlide.value++;
  }
  document
    .getElementById(`#image${curSlide.value}`)
    .scrollIntoView({ behavior: "smooth" });
}

function prevSlide() {
  if (curSlide.value === 1) {
    curSlide.value = props.imgs.length;
  } else {
    curSlide.value--;
  }
  document.getElementById(`#image${curSlide.value}`).scrollIntoView({
    behavior: "smooth",
  });
}
</script>