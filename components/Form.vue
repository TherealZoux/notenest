<script setup>
const props = defineProps({
  buttonText: String,
  modelValue: String,

});

const email = ref("")
const password = ref("")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^.{6,}$/
const inputError = ref('')
const emit = defineEmits(["submitForm"]);

const submit = () => {
  if (!email.value && !password.value || !email.value || !password.value) {
    inputError.value = "Man!, You can't let filed empty!"
  } else if (!email.value.match(emailRegex)) {
    inputError.value = "Please enter a valid email"
  }
  else {
    inputError.value = ""
    emit('submitForm', {
      email: email.value,
      password: password.value
    })
  }
}

</script>



<template>
  <form action="" class="flex flex-col w-[20rem] mt-2 text-text">
    <div class="mb-8 flex flex-col">
      <Input label="E-mail adress" v-model="email" type="email" placeholder="you@example.com" />
    </div>
    <div class="mb-8 flex flex-col">
      <Input label="Password" type="password" v-model="password" placeholder="***************" />
      <span v-if="inputError" class="!text-red-300 mt-2">{{ inputError }}</span>
    </div>
    <mainButton :title="buttonText" @submit="submit" />
  </form>

</template>

<style lang="scss" scoped></style>
