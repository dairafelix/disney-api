<script setup>
  import { onMounted } from 'vue'
  import BaseCard from '@/components/BaseCard.vue'
  import useFilms from '@/composables/useFilms'

  const { films, fetchFilms, firstLoad } = useFilms()

  onMounted(async () => {
    if (firstLoad.value) {
      await fetchFilms()
      firstLoad.value = false
    }
  })
</script>

<template>
  <button
    title="Load Films"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-pink-300 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-white hover:drop-shadow-2xl"
    @click="fetchFilms"
  >
    🎥
  </button>
  <main class="min-h-screen bg-gradient-to-r from-blue-200 to-blue-600">
    <div class="container mx-auto grid p-2">
      <img src="https://thewarwhoop.com/wp-content/uploads/2018/05/ghibli_logo_gold.png" alt="studioGhibliLogo" />
    </div>
    <div class="container mx-auto grid grid-cols-4 gap-4 py-8">
      <BaseCard v-for="film in films" :key="film.id" :film="film" />
    </div>
  </main>
</template>
