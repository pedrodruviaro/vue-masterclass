<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

const errorStore = useErrorStore()
errorStore.setError({
  error: 'Page Not Found',
  customCode: 404,
})
</script>

<template>
  <div></div>
</template>
