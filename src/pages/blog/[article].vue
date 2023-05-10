<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
  "Article",
  { articleID: `blog/${params.article}` }
)

</script>

<template>
  <div>
    <template v-if="data?.ArticleItem && !pending">
      <h1 class="text-3xl font-bold">{{ data.ArticleItem.name }}</h1>
    </template>
  </div>
</template>