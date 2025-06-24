<script setup>
const props = defineProps({
  label: String,
  placeholder: String

});
</script>


<template>
  <label for="email" class="mb-2 text-[#F4F4F5]">{{ label }}</label>
  <input type="email" name="email" id="login-email" :placeholder="placeholder" class=" p-1 rounded  mb-8 pl-2" />
</template>

<style lang="scss" scoped></style>
