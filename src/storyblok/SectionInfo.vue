<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
	}
}>()
</script>

<template>
	<section class="section-info">
		<h2>{{ blok.title }}</h2>
		<h4>{{ blok.subtitle }}</h4>
	</section>
</template>