<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
	}
}>()
</script>

<template>
	<section class="section-intro">
		<h2 class="title">{{ blok.title }}</h2>
		<h5>{{ blok.subtitle }}</h5>
	</section>
</template>