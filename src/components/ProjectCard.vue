<script setup lang="ts">
defineProps<{
	data: {
		name?: string | null,
		full_slug?: string | null,
		content?:{
			area?: string | null,
			prize?: string | null,
			size?: string | null,
			bedroom?: string | null,
			bathroom?: string | null,
			poster?: {
				alt?: string | null,
				filename?: string | null,
			} | null,
		} | null
	}
}>()
</script>

<template>
	<div class="project-card">
		<h4>{{ data.name }}</h4>
		<NuxtLink :to="data.full_slug!">{{ data.full_slug }}</NuxtLink>
		<span>{{ data.content?.area }}</span>
		<span>{{ data.content?.size }}</span>
		<span>{{ data.content?.prize }}</span>
		<span>{{ data.content?.bathroom }}</span>
		<span>{{ data.content?.bedroom }}</span>
	</div>
</template>

<style lang="scss" scoped>
.project-card{
	display: flex;
	flex-direction: column;
}
</style>