<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
  "Project",
  { projectId: `projects/${params.project}` }
)

</script>

<template>
  <div>
    <template v-if="data?.ProjectItem && !pending">
      <h1 class="text-3xl font-bold">{{ data.ProjectItem.name }}</h1>
      <p>adress: {{ data.ProjectItem.content?.adress }}</p>
      <p>area: {{ data.ProjectItem.content?.area }}</p>
      <p>price: {{ data.ProjectItem.content?.prize }}</p>
    </template>
  </div>
</template>