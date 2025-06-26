<template>
  <div>

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
  </div>
</template>

<script>
export default {
  name: "[id]",

}
</script>
