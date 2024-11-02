import type { CustomError, ExtendedPostgrestError } from '@/types/Error'
import type { PostgrestError } from '@supabase/supabase-js'

interface SetErrorOptions {
  error: string | PostgrestError | Error
  customCode?: number
}

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<ExtendedPostgrestError | CustomError | null>(null)

  const setError = ({ error, customCode }: SetErrorOptions) => {
    if (typeof error === 'string' || error instanceof Error) {
      activeError.value = typeof error === 'string' ? Error(error) : error
      activeError.value.customCode = customCode || 500
      return
    }

    activeError.value = error
    // @ts-ignore
    activeError.value.statusCode = customCode || 500
  }

  return {
    activeError,
    setError,
  }
})
