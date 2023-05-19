<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
	"Article",
	{ articleID: `blog/${params.article}` }
)

</script>

<template>
	<section class="article">
		<template v-if="data?.ArticleItem && !pending">
			{{ data.ArticleItem }}
		</template>
	</section>
</template>