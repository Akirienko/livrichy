<script lang="ts" setup>
const articleNumber = 3
const { data: articles, pending } = await useAsyncGql("LatestArticles", { articleNumber })
</script>

<template>
	<section class="section-blog">
		<template v-if="articles && !pending">
			<div class="grid">
				<ArticleCard v-for="item in articles.ArticleItems?.items" :data="item!" />
			</div>
		</template>
	</section>
</template>

<style lang="scss" scoped>
.section-blog {
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