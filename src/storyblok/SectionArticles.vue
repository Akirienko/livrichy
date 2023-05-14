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
	<div class="articles-wrapper">
		<template v-if="articles && !pending">
			<h2>{{ blok.title }}</h2>
			<div class="grid">
				<ProjectCard v-for="item in articles.ArticleItems?.items" :data="item!"/>
			</div>
    	</template>
	</div>
</template>

<style lang="scss" scoped>
.articles-wrapper{
	width: 100%;
	display: flex;
	flex-direction: column;

	.grid{
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
}

</style>