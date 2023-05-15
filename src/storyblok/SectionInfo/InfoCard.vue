<script setup lang="ts">
const props = defineProps<{
	data: {
		text: any,
		image: {
			alt: string,
			filename: string,
		}
	}
}>()

const text = computed(() =>
	renderRichText(props.data.text)
);
</script>

<template>
	<div class="info-card">
		<div v-html="text"></div>
		<img :src="data.image.filename">
	</div>
</template>

<style lang="scss" scoped>
.info-card {
	display: flex;
	flex-direction: column;

	img {
		width: 200px;
		height: 200px;
	}
}
</style>