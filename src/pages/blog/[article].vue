<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
  "Article",
  { articleID: `blog/${params.article}` }
)

</script>

<template>
  <section class="blog pt-12 lg:pt-16 mt-20 lg:mt-24">
    <div v-if="data?.ArticleItem && !pending" class="container mx-auto px-4 xl:px-0">
      <h1 class="text-lg mb-4 uppercase lg:text-[64px] lg:leading-[120%]">{{ data.ArticleItem.name }}</h1>
      <div class="text-base mb-4 lg:text-2xl lg:flex lg:justify-between lg:items-end lg:mb-8">
        <!-- NEED SUBTITLE -->
				<p class="uppercase mb-4 lg:max-w-[175px] lg:mb-0">NEED SUBTITLE</p>
				<p>27/04/2023 NEED DATA</p>
			</div>
      <div class="">
				<div class="rounded-2xl overflow-hidden h-[400px] mb-4 lg:hidden">
					<!-- NEED MAIN IMG -->
					<img :src="data.ArticleItem.content?.poster?.filename" alt="hotel">
				</div>
				<div class="richText text-sm md:columns-2 lg:columns-3">
					{{ data.ArticleItem.content?.body }}
				</div>
				<div class="hidden rounded-2xl overflow-hidden max-h-[650px] lg:block ">
					<!-- NEED MAIN IMG -->
					<img :src="data.ArticleItem.content?.poster?.filename" alt="hotel">
				</div>
			</div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.richText {
	margin-bottom: 28px;
	p {
		margin-bottom: 16px;
	}
	img {
		margin-bottom: 16px;
		border-radius: 16px;
		height: 290px;
	}
	ul {
		margin-bottom: 16px;
		padding-left: 16px;
		li {
			list-style-type: disc;
		}
	}
}
</style>