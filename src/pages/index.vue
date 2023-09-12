<script lang="ts" setup>

const { data, pending } = await useAsyncGql('HomePage')
if(data) {
	const meta = data.value?.PageItem?.content?.SEO
	useMetaTags(meta)
}
</script>

<template>
	<div class="page">
		<template v-if="data?.PageItem && !pending">
			<StoryblokComponent v-for="blok in data.PageItem.content?.body" :key="blok.uid" :blok="blok" />
		</template>
	</div>
</template>