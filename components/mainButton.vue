<script setup>

import Button from 'primevue/button';

const props = defineProps({
  title: String
});
</script>


<template>
  <button
    class="log-btn bg-[#FFAC00] text-[#09090B] text-bold p-1 rounded-4xl hover:bg-sidebar hover:text-text hover:border-main border-1  hover:cursor-pointer">
    <NuxtLink to="/" class="w-full h-full flex justify-center items-center">
      {{
        title }}<i class="fa-solid fa-arrow-right hover:text-text  text-[#09090B] pl-2 "></i>

    </NuxtLink>
  </button>

</template>


<style lang="scss" scoped></style>
