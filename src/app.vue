<script lang="ts" setup>
import type { AppData } from "~~/src/types"

const story: Ref<AppData> = await useAsyncStoryblok("app", {
	version: "published",
})

useHead({
  script: [
    {
      src: 'https://crm.livrichy.com/upload/crm/tag/call.tracker.js',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    }
  ]
})

useProject()
</script>

<template>
	<div class="app mt-20 lg:mt-24">
		<AppHeader :data="story" />
			<NuxtPage />
		<AppFooter :data="story" />
	</div>
</template>
