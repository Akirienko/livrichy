<script lang="ts" setup>
import type { Realty } from "~~/src/types"
defineProps<{
	blok: {
		title: string,
	}
}>()

const storyblokApi = useStoryblokApi()
const { data: realty, pending } = await useAsyncData<Realty>(
	async () => await storyblokApi.get(`cdn/stories`, {
		version: "published",
		content_type: "project",
		per_page: 3,
	})
)
</script>

<template>
	<section class="section-projects">
		<template v-if="realty && !pending">
			<div class="container mx-auto px-6 xl:px-0">
				<h2 class="title w-full mb-10 md:flex-row flex flex-col tablet:px-0">Our<span class="tablet:ml-2 gold-title">projects</span></h2>
				<div class="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					<ProjectCard v-for="item in realty.data.stories" :data="item" />
				</div>
			</div>
		</template>
	</section>
</template>

<style lang="scss" scoped>
.card {
	box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
	overflow: hidden;
	border-radius: 16px;
	transition: .3s;

	&:hover {
		transform: scale(1.05);
	}

}
</style>