<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
		description: string,
	}
}>()
</script>

<template>
	<section class="about">
		<h2 class="text-3xl font-bold">about</h2>
		<!-- <h2 class="text-3xl font-bold">{{ blok.title }}</h2>
		<h4 class="text-2xl font-bold">{{ blok.subtitle }}</h4> -->
	</section>
</template>
  