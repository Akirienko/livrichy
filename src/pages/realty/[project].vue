<script lang="ts" setup>
const { params } = useRoute()
const { data, pending } = await useAsyncGql(
	"Project",
	{ projectId: `realty/${params.project}` }
)	
</script>

<template>
	<section class="realty-project">
		<template v-if="data?.ProjectItem && !pending">
			<div class="left">
				<img :src="data.ProjectItem.content?.poster?.filename">
				<h1 class="title">
					<span>{{ data.ProjectItem.name }}</span>
					<span>{{ data.ProjectItem.content?.prize }} usd</span>
				</h1>
				<p class="area">
					<span>area: {{ data.ProjectItem.content?.area }}</span>
				</p>
				<p class="info">
					<span>bathroom: {{ data.ProjectItem.content?.bathroom }}</span>
					<span>bedroom: {{ data.ProjectItem.content?.bedroom }}</span>
					<span>size: {{ data.ProjectItem.content?.size }}</span>
				</p>
				<p class="description">
					{{ data.ProjectItem.content?.description }}
				</p>
			</div>
			<div class="right">
				<div class="img"></div>
				<p class="adress">
					{{ data.ProjectItem.content?.adress }}
				</p>
				<div class="amenities">
					<h4>
						amenities
						<AppIcon />
					</h4>
					<span v-for="item in data.ProjectItem.content?.Amenities">
						{{ item }}
					</span>
				</div>
				<div class="facts">
					<h4>facts</h4>
					<span v-for="item in data.ProjectItem.content?.facts">
						{{ item.value }}
					</span>
				</div>
			</div>
		</template>
	</section>
</template>

<style lang="scss" scoped>
.realty-project {
	margin: 200px 0; //header height
	padding-left: calc((100vw - 1200px) / 2);
	padding-right: calc((100vw - 1200px) / 2);
	width: 100%;
	height: 100%;
	min-height: 100vh;

	display: flex;
	gap: 2rem;

	.left {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 812px;

		img {
			width: 812px;
			height: 440px;
			margin-bottom: 2rem;
		}

		.title {
			margin-bottom: 2rem;
			display: flex;
			justify-content: space-between;

			color: #081621; // ask how to get colors
			text-transform: uppercase;
			font-family: "Montserrat";
			font-size: 1.5rem;
			line-height: 2rem;
		}

		.area {
			margin-bottom: 1.5rem;
		}

		.info {
			margin-bottom: 2.5rem;
		}

		.description {
			width: 80%;
		}


	}

	.right {
		display: flex;
		flex-direction: column;

		.img {
			width: 370px;
			height: 370px;
			background: #4d4b4b;
		}

		.amenities {
			display: flex;
			flex-direction: column;
		}

		.facts {
			display: flex;
			flex-direction: column;
		}
	}

}
</style>