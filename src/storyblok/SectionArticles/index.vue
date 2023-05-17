<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
	}
}>()

const articleNumber = 2
const { data: articles, pending } = await useAsyncGql("LatestArticles", { articleNumber })
</script>

<template>
	<section class="section-articles">
		<div v-if="articles && !pending" class="container mx-auto px-6 xl:px-0">
			<div class="flex items-center justify-center mb-10">
				<h2 class="title mb-10 md:flex-row flex flex-col tablet:px-0">Realty <span class="tablet:ml-2 gold-title"> Updates</span></h2>
			</div>
			<div class="lg:flex lg:items-stretch lg:justify-center">
				<ArticleCard v-for="item in articles.ArticleItems?.items" :data="item!" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>r
.section-articles {
	width: 100%;
	display: flex;
	flex-direction: column;

	.grid {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
}
</style>