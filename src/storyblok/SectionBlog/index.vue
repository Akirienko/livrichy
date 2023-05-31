<script lang="ts" setup>
const articleNumber = 3
const { data: articles, pending } = await useAsyncGql("LatestArticles", { articleNumber })
</script>

<template>
	<section class="section-blog">
		<div v-if="articles && !pending" class="container m-auto px-5 lg:px-0 max-w-[970px]">
			<div class="main-article">

			</div>
			<div class="md:grid md:grid-cols-2 md:gap-7">
				<ArticleCard v-for="item in articles.ArticleItems?.items" :data="item!" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.section-blog {
	padding: 20px 0;
}
</style>