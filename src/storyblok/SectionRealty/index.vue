<script lang="ts" setup>

const projectNumber = 6
const { data: projects, pending } = await useAsyncGql("LatestProjects", { projectNumber })
</script>

<template>
	<section class="section-realty">
		<div class="filters flex py-12 container mx-auto">
			<div class="area">
				<label>
					<span>Min</span>
					<input type="number" name="min" id="" placeholder="Any">
				</label>
				<label>
					<span>Max</span>
					<input type="number" name="max" id="" placeholder="999,999,999">
				</label>
			</div>
			<div class="square">
				<button>
					<span>sq. ft.</span>
					<span>sq. m.</span>
				</button>
			</div>
			<div class="search">
				<label>
					<span>Search</span>
					<input type="text">
				</label>
			</div>
			<div class="price-range">

			</div>
		</div>


		<template v-if="projects && !pending">
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

	.filters {
		label {
			display: flex;
			flex-direction: column;
		}
		input {
			border: 1px solid theme('colors.palette.dark_blue1');
			margin: 10px 0;
			border-radius: 4px;
			height: 56px;
			padding: 1rem;
			background-color: theme('colors.palette.body');
		}
	}

	.grid {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
}
</style>