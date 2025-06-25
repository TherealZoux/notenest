<script setup lang="ts">
import { ref } from 'vue'
definePageMeta({
  middleware: ["auth"]
})
const click = () => { console.log(" click") }

const fontSize = ref(40)

const notes = [
  {
    time: "Today",
    data: [
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
    ]
  },

  {
    time: "Yesterday",
    data: [
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
      {
        title: "Finally moved into my...",
        prev: "Tiny house today..."
      },
    ]
  }
]
</script>

<template>
  <section class="flex overflow-hidden">
    <nav
      class="lg:w-[30rem] hidden lg:flex w-full h-screen bg-sidebar flex justify-start flex-col gap-4 lg:p-8 items-center lg:items-start ">
      <div>

        <Logo width="2" />
      </div>
      <div class=" container flex flex-col gap-2 mt-8 w-full" v-for="note in notes">
        <span>{{ note.time }}</span>
        <div class="ml-8 mt-4 bg-[#A1842C] p-2 px-4 rounded-2xl w-[80%] mb-4 " v-for="item in note.data">
          <h1 class="text-[1.2rem]">{{ item.title }}</h1>
          <div class="flex gap-[10px]">
            <span class="!text-text">{{ note.time }}</span>
            <p class="!text-[#C2C2C5]">{{ item.prev }}</p>
          </div>
        </div>
      </div>
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
        November 22nd, 2024

        Finally moved into my tiny house today! After months of YouTube tutorials, countless trips to Home Depot, and
        more scrapes and bruises than I care to count, I'm officially a tiny home dweller. The sunset streaming through
        my handmade stained glass window makes the whole 240 square feet glow like a jewel box. Still can't believe I
        built this with my own two hands (and Dad's power tools).

        Living small means getting creative with space. Today I installed my fold-down desk that transforms into a
        dining table - probably my proudest DIY achievement yet. The copper pipes and reclaimed wood give it this
        amazing steampunk vibe I wasn't even planning. Had my first meal on it tonight: takeout ramen and a victory
        beer, because after all that building, cooking was definitely not happening.

        My favorite spot is the reading nook by the window. I've got all my favorite books within arm's reach, arranged
        by color because why not? The cushions I sewed last weekend turned out surprisingly well, considering my last
        sewing project was a very lopsided pencil case in 7th grade. The fairy lights make everything feel magical at
        night, like I'm living in some kind of woodland cottage rather than parked in my parents' backyard. Next
        project: figuring out how to grow herbs in vertical planters without blocking my only source of natural light!

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

nav {
  overflow-y: auto;
  scrollbar-color: #18181B transparent;
  /* Firefox */
  scrollbar-width: 2rem;
}

nav::-webkit-scrollbar {
  width: 6px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background-color: #FFAC00;
  border-radius: 10px;
}
</style>
