<script setup>

const { formatRelativeTime } = useRelativeTime()
const props = defineProps({
  note: Object
});
</script>

<template>
  <div class="ml-8  p-2 px-4 rounded-2xl w-[80%]   cursor-pointer">
    <h1 class="text-[1.2rem]">{{ note.text.substring(0, 22) }}...</h1>
    <div class="flex gap-[10px]">
      <span class="!text-text">{{ new Date(note.createdAt).toLocaleDateString() }}</span>
      <p class="!text-[#C2C2C5]">{{ note.text.substring(22, 38) }}...</p>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>
