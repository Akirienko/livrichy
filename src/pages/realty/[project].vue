<script lang="ts" setup>

const { params } = useRoute()
const { data, pending } = await useAsyncGql(
	"Project",
	{ projectId: `realty/${params.project}` }
)

const newPrice = computed(() => {
  return data.value?.ProjectItem?.content?.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
})

</script>

<template>
	<section class="realty-project">
		<template v-if="data?.ProjectItem && !pending">
			<div class="left">

				<SliderLightbox :data="data.ProjectItem.content?.gallery!" />
				<h1 class="title">
					{{ data.ProjectItem.name }}
					<span>{{ newPrice }} usd</span>
				</h1>
				<p class="area">
					<Icon name="Location" size="16" />
					{{ data.ProjectItem.content?.area! }}
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
					<a :href="data.ProjectItem.content?.mapLink" target="_blank" class="img" >
						<img v-if="data.ProjectItem.content?.imgMap?.filename" :src="data.ProjectItem.content?.imgMap?.filename" >
						<img v-else src="@/assets/img/gmap.png" alt="map">
					</a>
					<p class="adress">
						{{ data.ProjectItem.content?.adress }}
					</p>
				</div>
				<div class="amenities">
					<h4 class="title">amenities</h4>
					<span class="icon-label" v-for="item in data.ProjectItem.content?.amenities">
						<Icon v-if="item.icon[0]" :name="item.icon[0]" size="22" />
						{{ item.label }}
					</span>
				</div>
				<div class="facts">
					<h4 class="title">facts</h4>
					<span class="icon-label" v-for="item in data.ProjectItem.content?.facts">
						<Icon v-if="item.icon" :name="item.icon[0]" size="22" />
						{{ item.label }}
					</span>
				</div>
			</div>
		</template>
	</section>
	<!-- need to to go back btn with filter what was -->
	<div class="btn">
		<NuxtLink to="/realty" class="swipe-btn">
			<div class="swipe-btn__content">
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.1066 12.7073C23.3069 12.507 23.4071 12.2711 23.4071 11.9995C23.4071 11.728 23.3069 11.4925 23.1066 11.2931L16.7426 4.92917C16.5423 4.72882 16.3064 4.62865 16.0348 4.62865C15.7633 4.62865 15.5278 4.72882 15.3284 4.92917C15.1281 5.12952 15.0279 5.36545 15.0279 5.63698C15.0279 5.90851 15.1281 6.14398 15.3284 6.34338L20.9853 12.0002L15.3284 17.6571C15.1281 17.8574 15.0279 18.0934 15.0279 18.3649C15.0279 18.6364 15.1281 18.8719 15.3284 19.0713C15.5288 19.2717 15.7647 19.3718 16.0362 19.3718C16.3078 19.3718 16.5432 19.2717 16.7426 19.0713L23.1066 12.7073ZM16.0355 12.7073C16.2359 12.507 16.3361 12.2711 16.3361 11.9995C16.3361 11.728 16.2359 11.4925 16.0355 11.2931L9.67157 4.92917C9.47123 4.72882 9.23529 4.62865 8.96376 4.62865C8.69223 4.62865 8.45676 4.72882 8.25736 4.92917C8.05701 5.12952 7.95684 5.36545 7.95684 5.63698C7.95684 5.90851 8.05701 6.14398 8.25736 6.34338L13.9142 12.0002L8.25736 17.6571C8.05701 17.8574 7.95684 18.0934 7.95684 18.3649C7.95684 18.6364 8.05701 18.8719 8.25736 19.0713C8.45771 19.2717 8.69364 19.3718 8.96517 19.3718C9.2367 19.3718 9.47217 19.2717 9.67157 19.0713L16.0355 12.7073Z" fill="#FDF6E9"/>
				</svg>
				<span>Go back</span>
			</div>
		</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
.btn {
	padding: 0 calc((100vw - 1200px) / 2);
}
.realty-project {
	margin-top: 150px; //header height
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
			stroke: #081621;
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
.swipe-btn {
	height: 50px;
	background: #FDF6E9;
	border-radius: 16px;
	padding: 0 20px;
	display: flex;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: white;
	text-decoration: none;
	box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
	width: 150px;
	margin: 50px 0;
	overflow: hidden;
	&__content {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			transform: rotate(180deg);
			z-index: 1;
		}
		span {
			margin-left: 10px;
			z-index: 1;
		}
	}
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		background: var(--light-gold, linear-gradient(180deg, #FCD07D 0%, #926D3F 100%));
		transition: .5s;
	}
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		background: var(--light-gold, linear-gradient(180deg, #926D3F 100%, #FCD07D 0%));
		transition: .5s;
		opacity: 0;
		z-index: 0;
	}
	&:hover {
		&::after {
			opacity: 1;
		}
		&::before {
			opacity: 0;
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