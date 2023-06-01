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

				<SliderLightbox :data="data.ProjectItem.content?.gallery!" />
				<h1 class="title">
					{{ data.ProjectItem.name }}
					<span>{{ data.ProjectItem.content?.price }} usd</span>
				</h1>
				<p class="area">
					<Icon name="Location" size="16" />
					{{ data.ProjectItem.content?.area![0] }}
				</p>
				<div class="info">
					<div class="icon-label">
						<Icon name="Bedroom" size="22" />
						<span>{{ data.ProjectItem.content?.bedroom }} bedroom</span>
					</div>
					<div class="icon-label">
						<Icon name="Bathroom" size="22" />
						<span>{{ data.ProjectItem.content?.bathroom }} bathroom</span>
					</div>
					<div class="icon-label">
						<Icon name="Size" size="18" />
						<span>{{ data.ProjectItem.content?.size }} sq. ft.</span>
					</div>
				</div>
				<p class="description">
					{{ data.ProjectItem.content?.description }}
				</p>
			</div>
			<div class="right">
				<div class="map">
					<div class="img"></div>
					<p class="adress">
						{{ data.ProjectItem.content?.adress }}
					</p>
				</div>
				<div class="amenities">
					<h4 class="title">amenities</h4>
					<span class="icon-label" v-for="item in data.ProjectItem.content?.amenities">
						<Icon :name="item.icon" size="22" />
						{{ item.label }}
					</span>
				</div>
				<div class="facts">
					<h4 class="title">facts</h4>
					<span class="icon-label" v-for="item in data.ProjectItem.content?.facts">
						<Icon :name="item.icon" size="22" />
						{{ item.label }}
					</span>
				</div>
			</div>
		</template>
	</section>
</template>

<style lang="scss" scoped>
.realty-project {
	margin: 200px 0; //header height
	padding: 0 calc((100vw - 1200px) / 2);
	width: 100%;
	height: 100%;
	min-height: 100vh;

	display: flex;
	gap: 2rem;

	.icon-label {
		width: fit-content;
		display: flex;
		align-items: center;

		font-size: 1rem;
		line-height: 1rem;

		.icon {
			margin-right: 0.5rem;
			fill: #081621;
		}
	}

	.title {
		display: flex;
		justify-content: space-between;

		color: #081621; // ask how to get colors
		text-transform: uppercase;
		font-family: "Montserrat";
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 2rem;

		span {
			font-weight: normal;
		}
	}

	.left {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 812px;

		.title {
			margin-bottom: 2rem;
		}

		.info {
			display: flex;
			gap: 2rem;
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

		.map {
			height: 440px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.img {
				width: 370px;
				height: 370px;
				background: #4d4b4b;
			}

		}

		.title {
			margin-top: 2rem;
			// margin-bottom: 1rem;
		}

		.amenities,
		.facts {
			display: flex;
			flex-direction: column;
			gap: .75rem;

			.icon-label {

				.icon {
					margin-right: 1rem;
				}
			}
		}


	}

}

@media (max-width: 1250px) {
	.realty-project {
		flex-direction: column;
		align-items: center;
		padding: 0 1.5rem;

		.left {
			width: 100%;
		}

		.right {
			width: 100%;
			max-width: 812px;
		}
	}
}

@media (max-width: 760px) {
	.realty-project {
		margin: 150px 0;

		.left {
			.title {
				flex-direction: column;
				margin-bottom: 1.5rem;

				span {
					margin-top: 1.5rem;
				}
			}

			.info {
				display: flex;
				flex-wrap: wrap;
			}

			.description {
				width: 100%;
			}
		}
	}
}
</style>