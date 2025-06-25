<script setup>
const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="mb-2 text-[#F4F4F5]">{{ label }}</label>
  <input :type="type" :placeholder="placeholder" :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)" class="p-1 rounded pl-2" />
</template>

<style lang="scss" scoped></style>
