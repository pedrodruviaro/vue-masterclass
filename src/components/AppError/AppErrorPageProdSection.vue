<script setup lang="ts">
const props = defineProps<{
  message: string
  customCode: number
  statusCode: number
  isCustomError: boolean
}>()

const error = ref({
  code: 500,
  message: 'Ops, something went wrong!',
})

if (props.isCustomError) {
  error.value.code = props.customCode
  error.value.message = props.message
}

if (props.statusCode === 406) {
  error.value.code = 404
  error.value.message = 'Page not found'
}
</script>

<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="text-7xl text-destructive" />
    <h1 class="text-7xl font-extrabold text-secondary">{{ error.code }}</h1>
    <p class="my-2 text-3xl font-extrabold text-primary">{{ error.message }}</p>
    <div class="mt-6 flex flex-col items-center justify-center gap-5 font-light">
      <p class="my-2 text-lg text-muted-foreground">You'll find lots to explore on the home page.</p>
      <RouterLink to="/">
        <Button class="max-w-36"> Back to homepage </Button>
      </RouterLink>
    </div>
  </div>
</template>
