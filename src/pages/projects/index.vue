<script setup lang="ts">
import { projectsQuery } from '@/utils/supabaseQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'
import type { Projects } from '@/utils/supabaseQueries'

const { pageData } = usePageStore()
pageData.title = 'Projects'

const projects = ref<Projects | null>()

const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) {
    useErrorStore().setError({ error, customCode: status })
  }

  if (!data) return

  projects.value = data
}

await getProjects()
</script>

<template>
  <div>
    <DataTable v-if="projects" :columns :data="projects" />
  </div>
</template>
