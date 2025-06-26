<script setup lang="ts">
import { ref } from 'vue'
const { formatRelativeTime } = useRelativeTime()

definePageMeta({
  middleware: ['auth'],
})



const notes = ref([])
const selectedNote = ref({})
const updatedText = ref('')


async function updateText() {
  const res = await $fetch(`/api/notes/${selectedNote.value.id}`, {
    method: "PATCH",
    body: {
      userId: selectedNote.value.userId,
      text: updatedText.value
    }
  });


}

const debouncedFn = useDebounceFn(() => {
  // do something
  updateText()
}, 1000)


onMounted(async () => {
  notes.value = await $fetch('/api/notes')
  if (notes.value.length > 0) {
    selectedNote.value = notes.value[0]
    updatedText.value = selectedNote.value.text
  }
})

</script>

<template>
  <section class="flex overflow-hidden">
    <!-- Sidebar -->
    <nav
      class="lg:w-[30rem] hidden lg:flex w-full h-screen bg-sidebar flex justify-start flex-col gap-4 lg:p-8 items-center lg:items-start overflow-y-auto">
      <Logo width="1.5" />
      <div class="container flex flex-col gap-2 mt-8 w-full" v-for="note in notes" :key="note.time">
        <span>{{ formatRelativeTime(note.updatedAt) }}</span>
        <div class="ml-8 mt-4 p-2 px-4 rounded-2xl w-[80%] mb-4  cursor-pointer" :class="{
          'bg-[#A1842C]': note.id === selectedNote.id,
          'hover:bg-[#1c1c1f]': note.id !== selectedNote.id
        }" @click="selectedNote = note">
          <h1 class="text-[1.2rem]">{{ note.text.substring(0, 22) }}...</h1>
          <div class="flex gap-[10px]">
            <span class="!text-text">{{ formatRelativeTime(note.createdAt) }}</span>
            <p class="!text-[#C2C2C5]">{{ note.text.substring(22, 38) }}...</p>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content area -->
    <main class="w-full flex flex-col items-center bg-bg h-screen overflow-y-auto">
      <div class="w-full flex justify-between p-8">
        <button class="flex gap-3 items-center hover:cursor-pointer" @click="click">
          <img src="../assets/Group 13.png" alt="add new note" class="w-4 h-4" />
          <p class="text-text">New note</p>
        </button>
        <button @click="click">
          <i class="fa-solid fa-trash text-[#6D6D73] hover:cursor-pointer !hover:bg-[#6D6D73]"></i>
        </button>
      </div>
      <textarea name="note" id="note" v-model="updatedText" @input="debouncedFn"
        class="text-text w-[50%] mt-16 h-[50%]">{{ selectedNote.text }}</textarea>
    </main>
  </section>
</template>

<style scoped>
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
  scrollbar-color: #18181B transparent;
  scrollbar-width: thin;
}

nav::-webkit-scrollbar {
  width: 6px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background-color: #ffac00;
  border-radius: 10px;
}
</style>
