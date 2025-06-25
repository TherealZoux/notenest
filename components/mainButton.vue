<script setup>

const props = defineProps({
  title: String
});

const emit = defineEmits(['submit'])

</script>


<template>
  <button
    class="log-btn bg-[#FFAC00] text-[#09090B] text-bold p-1 rounded-4xl hover:bg-sidebar hover:text-text hover:border-main border-1  hover:cursor-pointer"
    @click="emit('submit')" type="button">
    {{ title }}<i class="fa-solid fa-arrow-right hover:text-text  text-[#09090B] pl-2 "></i>

  </button>

</template>


<style lang="scss" scoped></style>
