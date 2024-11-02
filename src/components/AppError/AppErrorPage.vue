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

const ErrorTemplate = import.meta.env.DEV
  ? defineAsyncComponent(() => import('@/components/AppError/AppErrorPageDevSection.vue'))
  : defineAsyncComponent(() => import('@/components/AppError/AppErrorPageProdSection.vue'))

router.afterEach(() => errorStore.clearError())
</script>

<template>
  <section class="mx-auto -mt-20 flex min-h-[90vh] flex-1 items-center justify-center p-10 text-center">
    <ErrorTemplate :message :customCode :details :code :statusCode :hint :isCustomError="errorStore.isCustomError" />
  </section>
</template>
