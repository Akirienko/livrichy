<script lang="ts" setup>
const props = defineProps<{
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
    text1: any,
    text2: any,
    text3: any,
    text4: any,
  }
}>()
const text1 = computed(() =>
	renderRichText(props.blok.text1)
);
const text2 = computed(() =>
	renderRichText(props.blok.text2)
);
const text3 = computed(() =>
	renderRichText(props.blok.text3)
);
const text4 = computed(() =>
	renderRichText(props.blok.text4)
);
</script>

<template>
	<section id="info" class="benefits">
		<div class="container mx-auto flex flex-wrap tablet:px-0">
			<h2 class="title w-full md:flex-row flex flex-col text-palette-gradient_blue tablet:px-0 px-8">Services &  <span class="tablet:ml-2 gold-title">Expertise</span></h2>
			<h5 class="my-6 text-palette-gradient_blue text-xl w-full tablet:px-0 px-8">{{ blok.subtitle }}</h5>
			<div class="wrapper_content flex flex-wrap">
				<div class="content md:w-1/2 w-full flex flex-col items-center justify-center tablet:px-16 px-8">
					<ul>
						<li class="flex items-center mb-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">1</span>
							<div v-html="text1" class="text"></div>
						</li>
						<li class="flex items-center my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">2</span>
							<div v-html="text2" class="text"></div>
						</li>
					</ul>
				</div>
				<div class="image_wrapper md:w-1/2 w-full rounded-[800px_0px_0px_800px]">
					<div class="image-wrapper overflow-hidden rounded-l-[300px] md:my-0 my-4">
						<img :src="blok.imageTop.filename" :alt="blok.imageTop.alt" class="w-full h-full object-cover" />
					</div>
				</div>
			</div>
			<div class="wrapper_content reverse flex flex-wrap">
				<div class="image_wrapper md:w-1/2 w-full md:my-0 my-4 rounded-[0px_800px_800px_0px]">
					<div class="image-wrapper overflow-hidden rounded-r-[300px]">
						<img :src="blok.imageBottom.filename" :alt="blok.imageBottom.alt" class="w-full h-full object-cover" />
					</div>
				</div>
				<div class="content md:w-1/2 w-full flex flex-col items-center justify-center tablet:px-16 px-8">
					<ul>
						<li class="flex items-center tablet:my-0 mb-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">3</span>
							<div v-html="text3" class="text"></div>
						</li>
						<li class="flex items-center tablet:my-0 my-4">
							<span class="number text-[4rem] font-[Unbounded] px-[3px]">4</span>
							<div v-html="text4" class="text"></div>
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
