<script lang="ts" setup>
defineProps<{
	blok: {
		primaryTitle: string,
		primarySubtitle: string,
		primaryImage: {
			filename: string,
			alt: string,
		},
		secondaryTitle: string,
		secondarySubtitle: string,
		secondaryImage: {
			filename: string,
			alt: string,
		},
	}
}>()
</script>

<template>
	<section class="section-market">
		<h2>section-market</h2>
		<h2>{{ blok.primaryTitle }}</h2>
		<h2>{{ blok.primarySubtitle }}</h2>
		<h2>{{ blok.primaryImage.filename }}</h2>
		<h2>{{ blok.secondaryTitle }}</h2>
		<h2>{{ blok.secondarySubtitle }}</h2>
		<h2>{{ blok.secondaryImage.filename }}</h2>
	</section>
</template>