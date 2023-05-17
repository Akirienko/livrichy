<script lang="ts" setup>

const projectNumber = 6
const { data: projects, pending } = await useAsyncGql("LatestProjects", { projectNumber })
</script>

<template>
	<section class="section-realty">
		<template v-if="projects && !pending">
			<div class="filters">

			</div>
			<div class="grid">
				<ProjectCard v-for="item in projects.ProjectItems?.items" :data="item!" />
			</div>
		</template>
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