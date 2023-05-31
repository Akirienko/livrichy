<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
	"Article",
	{ articleID: `blog/${params.article}` }
)

const renderedRichText = renderRichText(data.value?.ArticleItem?.content?.richtext);

</script>

<template>
  <section class="blog pt-12 lg:pt-16 mt-20 lg:mt-24">
    <div v-if="data?.ArticleItem && !pending" class="container mx-auto px-4 xl:px-0">
      <h1 class="text-lg mb-4 uppercase lg:text-[64px] lg:leading-[120%]">{{ data.ArticleItem.name }}</h1>
      <div class="text-base mb-4 lg:text-2xl lg:flex lg:justify-between lg:items-end lg:mb-8">
				<p class="uppercase mb-4 lg:max-w-[175px] lg:mb-0">{{ data.ArticleItem.content?.subtitle }}</p>
				<p>{{ data.ArticleItem.published_at }}</p>
			</div>
      <div class="">
				<div class="rounded-2xl overflow-hidden h-[400px] mb-4 lg:hidden">
					<img :src="data.ArticleItem.content?.poster?.filename" alt="hotel">
				</div>
				
				<div class="richTextArticle text-sm md:columns-2 lg:columns-3" v-html="renderedRichText">

				</div>
				<div class="hidden rounded-2xl overflow-hidden max-h-[650px] lg:block ">
					<img :src="data.ArticleItem.content?.poster?.filename" alt="hotel">
				</div>
			</div>
    </div>
  </section>
</template>


<style scoped lang="scss">

</style>
