<script lang="ts" setup>
import type { Realty } from "~~/src/types"

const storyblokApi = useStoryblokApi();
const { data: realty, pending } = await useAsyncData<Realty>(
	async () => await storyblokApi.get(`cdn/stories`, {
		version: "published",
		content_type: "project",
		per_page: 6,
		filter_query: {
			price: {
				"gt-int": 0,
				"lt-int": 1300001,
			},
			area: { in_array: "Dubai Marina,Blue Waters" },
			market: { in_array: "primary" },
		},
		sort_by: "content.price" //content.size:desc
	})
)

</script>

<template>
	<section class="section-realty">
		<div class="filters">
			filters
		</div>
		<div class="grid">
			<template v-if="realty && !pending">
				<ProjectCard v-for="item in realty.data.stories" :data="item!" />
			</template>
		</div>
	</section>
</template>


<style lang="scss" scoped>
.section-realty {
	width: 100%;
	display: flex;
	flex-direction: column;

	.grid {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
}
</style>