<script setup>
const props = defineProps({
  width: String
});
</script>


<template>
  <div class="flex gap-4 justify-center items-center">
    <i class="fa-solid fa-pencil text-yellow-400 text-xl" :style="{ fontSize: width + 'rem' }"></i>

    <h3 class="" :style="{ fontSize: width + 'rem' }">Note<span class="!text-[#FFAC00]">Nest</span></h3>
  </div>

</template>


<style lang="scss" scoped></style>
