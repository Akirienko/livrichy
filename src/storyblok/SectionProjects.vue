<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
	}
}>()
</script>

<template>
	<div class="projects">
		<h2>{{ blok.title }}</h2>
	</div>
</template>