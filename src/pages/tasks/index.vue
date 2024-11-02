<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import type { Tables } from 'database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('tasks').select()
  if (!data) return

  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>Projects view</h1>
    <Button>Click me</Button>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/projects/12">Projects 123</RouterLink>

    <ul v-if="tasks">
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}- <strong>{{ task.status }}</strong>
      </li>
    </ul>
  </div>
</template>
