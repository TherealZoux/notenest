<script setup>
const props = defineProps({
  width: String
});
</script>


<template>
  <div class="flex gap-4 justify-center items-center">
    <i class="fa-solid fa-pencil text-yellow-400 text-xl"></i>

    <h3 :class="`text-[${width}rem]`">Note<span class="!text-[#FFAC00]">Nest</span></h3>
  </div>

</template>


<style lang="scss" scoped></style>
