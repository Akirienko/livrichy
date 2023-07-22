<script lang="ts" setup>
import type { Link } from "~~/src/types"

const { params, fullPath } = useRoute()
const { data, pending } = await useAsyncGql(
	"Page",
	{ pageID: `${params.page}` }
)
const links: Link[] = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: params.page.toString(),
		url: fullPath,
	},
]
</script>

<template>
	<div class="page">
		<template v-if="data?.PageItem && !pending">
			<AppBreadcrumbs :links="links"/>
			<StoryblokComponent v-for="blok in data.PageItem.content?.body" :key="blok.uid" :blok="blok" />
		</template>
	</div>
</template>

<style lang="scss">
.page {
	// margin-top: 200px; // header height
	display: flex;
	flex-direction: column;
}
</style>