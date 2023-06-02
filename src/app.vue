<script lang="ts" setup>
import type { AppData } from "~~/src/types"

const story: Ref<AppData> = await useAsyncStoryblok("app", {
	version: "published",
})
</script>

<template>
	<div class="app mt-20 lg:mt-24">
		<AppHeader :data="story" />
		<NuxtPage />
		<AppFooter :data="story" />
	</div>
</template>
