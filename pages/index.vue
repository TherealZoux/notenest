<script setup lang="ts">
import { ref } from 'vue'
import { isToday, isYesterday, parseISO } from 'date-fns'


const { formatRelativeTime } = useRelativeTime()

definePageMeta({
  middleware: ['auth'],
})

const notes = ref([])
const selectedNote = ref({})
const updatedText = ref('')
const textarea = ref(null)


function setNote(note) {
  console.log(note)
  selectedNote.value = note
  updatedText.value = note.text
  console.log(updateText.value)
}

async function updateText() {
  try {
    const res = await $fetch(`/api/notes/${selectedNote.value.id}`, {
      method: "PATCH",
      body: {
        userId: selectedNote.value.userId,
        text: updatedText.value
      }
    });
  } catch (err) {
    console.log(err)
  }
}

async function crateNote() {
  const newNote = await $fetch('/api/notes', {
    method: "POST",
  })
  notes.value.unshift(newNote)
}

const debouncedFn = useDebounceFn(() => {
  updateText()
}, 1000)


const todaysNotes = computed(() => {
  return notes.value.filter((note) => {
    if (isToday(parseISO(note.updatedAt))) {
      return note
    }

  })
})


const yesterdaysNotes = computed(() => {
  return notes.value.filter((note) => {
    if (isYesterday(note.updatedAt)) {
      return note
    }

  })
})

const earlierNotes = computed(() => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  return notes.value.filter((note) => {
    const noteDate = new Date(note.updatedAt)
    return (!isToday(noteDate) && !isYesterday(noteDate))
  })
})


onMounted(async () => {
  notes.value = await $fetch('/api/notes')
  if (notes.value.length > 0) {
    notes.value = notes.value.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
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
      <!--today notes -->
      <span class="mt-8" v-if="todaysNotes.length > 0">Today</span>
      <div class="container flex flex-col gap-1 w-full" v-for="note in todaysNotes" :key="note.createdAt"
        @click="setNote(note)">
        <div class="rounded-2xl" :class="{
          'bg-[#A1842C]': note.id === selectedNote.id,
          'hover:bg-[#1c1c1f]': note.id !== selectedNote.id
        }" @click="selectedNote = note">
          <NoteCard :note="note" />
        </div>
      </div>

      <!--yesterday notes -->
      <span class="mt-8" v-if="yesterdaysNotes.length > 0">Yesterday</span>
      <div class="container flex flex-col gap-1 w-full" v-for="note in yesterdaysNotes" :key="note.createdAt"
        @click="setNote(note)">
        <div class="rounded-2xl" :class="{
          'bg-[#A1842C]': note.id === selectedNote.id,
          'hover:bg-[#1c1c1f]': note.id !== selectedNote.id
        }" @click="selectedNote = note">
          <NoteCard :note="note" />
        </div>
      </div>


      <!--later notes -->
      <span class="mt-8" v-if="earlierNotes.length > 0">Later</span>
      <div class="container flex flex-col gap-1 w-full" v-for="note in earlierNotes" :key="note.createdAt"
        @click="setNote(note)">
        <div class="rounded-2xl" :class="{
          'bg-[#A1842C]': note.id === selectedNote.id,
          'hover:bg-[#1c1c1f]': note.id !== selectedNote.id
        }" @click="selectedNote = note">
          <NoteCard :note="note" />
        </div>
      </div>

    </nav>

    <!-- Main content area -->
    <main class="w-full flex flex-col items-center bg-bg h-screen overflow-y-auto">
      <div class="w-full flex justify-between p-8">
        <button class="flex gap-3 items-center hover:cursor-pointer" @click="crateNote">
          <img src="../assets/Group 13.png" alt="add new note" class="w-4 h-4" />
          <p class="text-text">New note</p>
        </button>
        <button @click="click">
          <i class="fa-solid fa-trash text-[#6D6D73] hover:cursor-pointer !hover:bg-[#6D6D73]"></i>
        </button>
      </div>
      <div class="mt-16 w-[50%] h-[100%] flex m-auto flex-col items-start  justify-center gap-4">
        <span>{{ new Date(selectedNote.updatedAt).toLocaleDateString() }}</span>

        <textarea ref="textarea" v-model="updatedText" name="note" id="note"
          class="text-[#D4D4D4] my-4 font-playfair w-full bg-transparent focus:outline-none resize-none flex-grow"
          @input="
            () => {
              debouncedFn()
              selectedNote.text = updatedText
            }
          ">
        </textarea>

      </div>
    </main>
  </section>
</template>

<style scoped>
textarea {
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.6;
  resize: none;
  scrollbar-color: #2c2c32f7 transparent;
  scrollbar-width: thin;

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
