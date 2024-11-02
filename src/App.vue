<script setup lang="ts">
const errorStore = useErrorStore()

onErrorCaptured(error => {
  errorStore.setError({ error })
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />

    <RouterView v-slot="{ Component, route }">
      <!-- timeout 0 -> trigger loading on page leave/enter -->
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />

        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
