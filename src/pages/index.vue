<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted } from 'vue'

onMounted(async () => {
  const { data, error } = await supabase.from('projects').select()
  console.log(data)
})
</script>

<template>
  <div>
    <h1>home view</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Project 1</RouterLink>
  </div>
</template>
