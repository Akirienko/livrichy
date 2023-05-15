<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
	}
}>()
</script>

<template>
	<section class="section-contact">
		<h2>{{ blok.title }}</h2>
		<h4>{{ blok.subtitle }}</h4>
	</section>
</template>


<style lang="scss" scoped>
.section-contact {
	display: flex;
}
</style>