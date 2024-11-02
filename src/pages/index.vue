<script setup lang="ts">
const { pageData } = usePageStore()
pageData.title = 'Home Page'
</script>

<template>
  <div>
    <h1>home view</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Project 1</RouterLink>
  </div>
</template>
