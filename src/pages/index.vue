<script lang="ts" setup>

const { data, pending } = await useAsyncGql('HomePage')

</script>

<template>
  <div>
    <template v-if="data?.PageItem && !pending">
      <StoryblokComponent v-for="blok in data.PageItem.content?.body" :key="blok.uid" :blok="blok" />
    </template>
  </div>
</template>