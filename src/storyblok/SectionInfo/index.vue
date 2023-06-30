<script lang="ts" setup>
defineProps<{
  blok: {
    subtitle: string,
    imageTop: {
			filename: string,
			alt: string
		},
    imageBottom: {
			filename: string,
			alt: string
		},
    text1: string,
    text2: string,
    text3: string,
    text4: string,
  }
}>()
</script>

<template>
	<section id="info" class="benefits">
		<div class="container mx-auto flex flex-wrap tablet:py-20 tablet:px-0 py-12">
			<h2 class="title w-full md:flex-row flex flex-col tablet:px-0 px-8">Expertise <span class="tablet:ml-2 gold-title">info</span></h2>
			<h5 class="tablet:mt-12 mt-9 text-xl w-full mb-4 tablet:px-0 px-8">{{ blok.subtitle }}</h5>
			<div class="wrapper_content flex flex-wrap">
				<div class="content md:w-1/2 w-full flex flex-col items-center justify-center tablet:px-16 px-8">
					<ul>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">1</span>
							<p class="text">{{ blok.text1 }}</p>
						</li>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">2</span>
							<p class="text">{{ blok.text2 }}</p>
						</li>
					</ul>
				</div>
				<div class="image_wrapper md:w-1/2 w-full">
					<div class="image-wrapper overflow-hidden rounded-l-[300px] md:my-0 my-4">
						<img :src="blok.imageTop.filename" alt="" class="w-full h-full object-cover" />
					</div>
				</div>
			</div>
			<div class="wrapper_content reverse flex flex-wrap">
				<div class="image_wrapper md:w-1/2 w-full md:my-0 my-4">
					<div class="image-wrapper overflow-hidden rounded-r-[300px]">
						<img :src="blok.imageBottom.filename" alt="" class="w-full h-full object-cover" />
					</div>
				</div>
				<div class="content md:w-1/2 w-full flex flex-col items-center justify-center tablet:px-16 px-8">
					<ul>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">3</span>
							<p class="text">{{ blok.text3 }}</p>
						</li>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">4</span>
							<p class="text">{{ blok.text4 }}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
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
