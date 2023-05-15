<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
	}
}>()

const projectNumber = 3
const { data:projects, pending } = await useAsyncGql("LatestProjects", { projectNumber })
</script>

<template>
	<section class="section-projects">
		<template v-if="projects && !pending">
			<h2>{{ blok.title }}</h2>
			<div class="grid">
				<ProjectCard v-for="item in projects.ProjectItems?.items" :data="item!"/>
			</div>
    	</template>
	</section>
</template>

<style lang="scss" scoped>
.section-projects{
	width: 100%;
	display: flex;
	flex-direction: column;

	.grid{
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
}

</style>