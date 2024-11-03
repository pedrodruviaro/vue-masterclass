import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // lazy loaded by default
})

router.beforeEach(async (to, from) => {
  const authRoutes = ['/login', '/register']

  const authStore = useAuthStore()
  await authStore.getSession()

  if (!authStore.user && !authRoutes.includes(to.path)) {
    return {
      name: '/login',
    }
  }

  if (authStore.user && authRoutes.includes(to.path)) {
    return {
      name: '/',
    }
  }
})

export default router
