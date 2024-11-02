<script setup lang="ts">
const router = useRouter()
const errorStore = useErrorStore()

const error = ref(errorStore.activeError)

const message = ref('')
const customCode = ref(0)
const details = ref('')
const code = ref('')
const hint = ref('')
const statusCode = ref(0)

if (error.value && !('code' in error.value)) {
  message.value = error.value.message
  customCode.value = error.value.customCode ?? 0
}

if (error.value && 'code' in error.value) {
  message.value = error.value.message
  details.value = error.value.details
  hint.value = error.value.hint
  code.value = error.value.code
  statusCode.value = error.value.statusCode ?? 0
}

router.afterEach(() => {
  errorStore.activeError = null
})
</script>

<template>
  <section class="mx-auto -mt-20 flex min-h-[90vh] flex-1 items-center justify-center p-10 text-center">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="text-7xl text-destructive" />
      <h1 class="text-7xl font-extrabold text-secondary">{{ customCode || code }}</h1>
      <p class="my-2 text-3xl font-extrabold text-primary" v-if="statusCode">Status Code: {{ statusCode }}</p>
      <p class="my-2 text-3xl font-extrabold text-primary">{{ message }}</p>
      <p v-if="hint">{{ hint }}</p>
      <p v-if="details">{{ details }}</p>
      <div class="mt-6 flex flex-col items-center justify-center gap-5 font-light">
        <p class="my-2 text-lg text-muted-foreground">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
