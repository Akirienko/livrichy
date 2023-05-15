<script setup lang="ts">
defineProps<{
	data: {
		name?: string | null,
		full_slug?: string | null,
		published_at?: string | null,
		content?:{
			poster?: {
				alt?: string | null,
				filename?: string | null,
			} | null,
		} | null
	}
}>()
</script>

<template>
	<div class="article-card">
		<h4>{{ data.name }}</h4>
		<NuxtLink :to="data.full_slug!">{{ data.full_slug }}</NuxtLink>
		<span>{{ data.published_at }}</span>
		<img :src="data.content?.poster?.filename!" >
	</div>
</template>

<style lang="scss" scoped>
.article-card{
	display: flex;
	flex-direction: column;
	img{
		width: 200px;
		height: 200px;
	}
}
</style>