<script lang="ts" setup>
defineProps<{
	blok: {
		subtitle: string,
		imageTop: string,
		imageBottom: string,
		text1: string,
		text2: string,
		text3: string,
		text4: string,
	}
}>()
</script>

<template>
	<section class="section-info">
		<h4>{{ blok }}</h4>
	</section>
</template>

<style lang="scss" scoped>
.section-info {
	display: flex;
	flex-direction: column;

	.grid {
		display: flex;
	}
}
</style>