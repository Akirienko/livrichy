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
			<h2 class="title text-center w-full mb-10 md:text-[3rem] md:flex-row text-[2.3rem] uppercase flex flex-col leading-[2.6rem] tablet:px-0">Realty <span class="tablet:ml-2 colored">Updates</span></h2>
			<div class="lg:flex lg:items-center lg:justify-center">
				<ArticleCard v-for="item in articles.ArticleItems?.items" :data="item!" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
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