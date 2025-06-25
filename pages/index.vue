<script setup lang="ts">
import { ref } from 'vue'
const click = () => { console.log(" click") }

const fontSize = ref(40)

</script>

<template>
  <section class="flex">
    <nav
      class="lg:w-[35rem] hidden lg:flex w-full h-screen bg-sidebar flex justify-start flex-col gap-4 lg:p-8 items-center lg:items-start ">
      <Logo width="2" />

    </nav>
    <main class="w-full flex flex-col  items-center bg-bg h-screen">
      <div class="w-full flex justify-between p-8 ">
        <button class="flex gap-3 items-center hover:cursor-pointer" @click="click">
          <img src="../assets/Group 13.png" alt="add new note" class="w-4 h-4">
          <p class="text-text">New note</p>

        </button>
        <button @click="click"><i
            class="fa-solid fa-trash text-[#6D6D73] hover:cursor-pointer !hover:bg-[#6D6D73]"></i></button>
      </div>
      <textarea name="note" id="note" class="flex flex-col text-text  gap-4  p-22  m-auto w-full  h-screen   ">
        October 15th, 2024

        Finally took that leap and signed up for pottery classes! The studio has this amazing
        earthy smell - clay
        dust
        and coffee from the café next door. My first attempt at making a bowl looked more like a wonky ashtray, but my
        instructor Sarah said that's totally normal. There's something so therapeutic about feeling the clay move
        between your fingers, even when it's not quite doing what you want it to.

        On my way home, I stopped by that new bookstore on Oak Street. Found this incredible book on urban foraging of
        all things! Who knew there were edible plants growing all over the city? Already planning to try identifying
        some this weekend at the park. Think I'll bring Maya along - she's always up for my random adventures, even if
        they end with us eating weeds. At least we'll have a good story to tell at Sunday brunch.

      </textarea>
    </main>
  </section>
</template>

<style lang="css" scoped>
textarea {
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.6;
  resize: none;
}

textarea:focus {
  outline: none;
  box-shadow: none;
  border-color: transparent;
}
</style>
