<script lang="ts" setup>
defineProps<{
	blok: {
		subtitle: string,
		list: {
			text: any,
			image: {
				alt: string,
				filename: string,
			}
		}[]
	}
}>()
</script>

<!-- <template>
	<section class="section-info">
		<h2><span>Expertise</span> info</h2>
		<h4>{{ blok.subtitle }}</h4>
		<div class="grid">
			<InfoCard v-for="item in blok.list" :data="item" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.section-info {
	display: flex;
	flex-direction: column;

	.grid {
		display: flex;
	}
}
</style> -->

<template>
	<section class="benefits">
		<div class="container mx-auto flex flex-wrap tablet:py-20 tablet:px-0 py-12">
			<h2 class="title w-full md:text-[3rem] md:flex-row text-[2.3rem] uppercase flex flex-col leading-[2.6rem] tablet:px-0 px-8">Expertise <span class="tablet:ml-2 colored">info</span></h2>
			<p class="tablet:mt-12 mt-9 text-xl w-full mb-4 tablet:px-0 px-8">{{ blok.subtitle }}</p>
			<div class="wrapper_content flex flex-wrap">
				<div class="content md:w-1/2 w-full flex flex-col items-center justify-center tablet:px-16 px-8">
					<ul>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">1</span>
							<p class="text">We present lots both from the middle segment of real estate, and objects that are not put on the market.</p>
						</li>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">2</span>
							<p class="text">We cooperate with top managers of Dubai for the sale of real estate.</p>
						</li>
					</ul>
				</div>
				<div class="image_wrapper md:w-1/2 w-full">
					<div class="image-wrapper overflow-hidden rounded-l-[300px] md:my-0 my-4">
						<img class="w-full h-full object-cover" src="benefits1.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="wrapper_content reverse flex flex-wrap">
				<div class="image_wrapper md:w-1/2 w-full md:my-0 my-4">
					<div class="image-wrapper overflow-hidden rounded-r-[300px]">
						<img class="w-full h-full object-cover" src="benefits2.jpg" alt="">
					</div>
				</div>
				<div class="content md:w-1/2 w-full flex flex-col items-center justify-center tablet:px-16 px-8">
					<ul>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">3</span>
							<p class="text">Top quality service not available from competitors.</p>
						</li>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">4</span>
							<p class="text">Always in touch with our clients 24/7. Our managers are trained to the highest standards of service quality.</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.benefits {
	.number {
		background: -webkit-linear-gradient(-86deg, #FCD07D 0%,  #5B391E 100%);
		background-clip: text;
		-webkit-text-stroke: 4px transparent;
		color: theme('colors.palette.body');
		width: 5rem;
	}
	.text {
		width: calc(100% - 5rem);
	}

	.image-wrapper {
		img {
			transition: transform 0.5s linear;
		}
		&:hover {
			img {
				transform: scale(1.1);
			}
		}
	}
	@media (max-width: 768px) {
		.reverse {
			.content {
				order: 1;
			}
			.image_wrapper {
				order: 2;
			}
		}
	}
}

</style>
