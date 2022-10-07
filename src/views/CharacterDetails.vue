<script setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  import useCharacters from '@/composables/useCharacters'

  const route = useRoute()
  const { fetchCharacter, currentCharacter } = useCharacters()

  onMounted(async () => {
    await fetchCharacter(route.params.id)
  })
</script>

<template>
  <main
    v-if="currentCharacter"
    class="flex min-h-screen flex-col items-center gap-6 bg-gradient-to-r from-fuchsia-900 to-red-700 py-8 text-white"
  >
    <img :src="currentCharacter.imageUrl" :alt="currentCharacter.name" />
    <h1 class="text-white-800 text-6xl font-bold">Hi, I'm {{ currentCharacter.name }}</h1>
    <pre>{{ currentCharacter }}</pre>
  </main>
</template>
