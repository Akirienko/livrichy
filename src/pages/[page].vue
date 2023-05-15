<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
	"Page",
	{ pageID: `${params.page}` }
)

</script>

<template>
	<div class="page">
		<template v-if="data?.PageItem && !pending">
			<StoryblokComponent v-for="blok in data.PageItem.content?.body" :key="blok.uid" :blok="blok" />
		</template>
	</div>
</template>

<style lang="scss">
.page {
	margin-top: 200px; // header height
	display: flex;
	flex-direction: column;
}
</style>