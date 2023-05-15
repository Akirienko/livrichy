<script lang="ts" setup>
defineProps<{
	blok: {
		subtitle: string,
		list: {
			text: any,
			image: {
				alt: string,
				filename: string,
			}
		}[]
	}
}>()
</script>

<template>
	<section class="section-info">
		<h4>{{ blok.subtitle }}</h4>
		<div class="grid">
			<InfoCard v-for="item in blok.list" :data="item" />
		</div>
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