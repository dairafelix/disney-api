<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'

  import useFilms from '@/composables/useFilms'

  const route = useRoute()
  const { fetchFilm, currentFilm } = useFilms()

  onMounted(async () => {
    await fetchFilm(route.params.id)
  })

  onUnmounted(() => {
    currentFilm.value = null
  })
</script>

<template>
  <main class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700 py-8 text-white">
    <div v-if="currentFilm" class="flex flex-col items-center justify-center gap-6 p-8">
      <img :src="currentFilm.image" :alt="currentFilm.title" />
      <h1 class="text-white-800 text-6xl font-bold">Original Title: {{ currentFilm.original_title }}</h1>
      <pre>{{ currentFilm }}</pre>
    </div>
  </main>
</template>
