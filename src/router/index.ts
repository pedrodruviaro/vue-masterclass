import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // lazy loaded by default
})

router.beforeEach(async () => {
  const { getSession } = useAuthStore()
  await getSession()
  // note about perfomance => supabsae gets the token from localStorage. Only calls DB If the token doest exists
})

export default router
