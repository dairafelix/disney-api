<script setup>
  const props = defineProps({
    film: {
      type: Object,
      default: () => ({
        _id: -1,
        title: 'Unknown',
        imageUrl: 'https://via.placeholder.com/150',
      }),
    },
  })
</script>

<template>
  <RouterLink :to="`/film/${props.film.id}`" class="rounded-lg bg-white shadow-lg">
    <img class="w-full rounded-t-lg object-cover" :src="props.film.image" />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.film.title }}
      </h2>
    </div>
  </RouterLink>
</template>
