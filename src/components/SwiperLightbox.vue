<script setup lang="ts">
import { onClickOutside,  } from '@vueuse/core'

defineProps<{
	data: ({
		filename: string;
		alt?: string | null | undefined;
	} | null)[],
}>()

const isOpen = ref(false)
function openLightbox(){ isOpen.value = true }

useHead({
  bodyAttrs: {
    class: computed(() => {		// lock scroll
			return isOpen.value ? 'scroll-lock' : "scroll-unlock"
		}),
  },
})

const lightbox = ref(null)	// lightbox ref
onClickOutside(lightbox, (event) => {		// close lightbox on click outside
	isOpen.value = false
})
</script>

<template>
	<slot :openLightbox="openLightbox" />
	<div
		v-if="isOpen"
		class="lightbox"
	>
		<Swiper
			:height="558"
			:slides-per-view="1"
			:loop="true"
			:modules="[SwiperPagination, SwiperMousewheel]"
			ref="lightbox"
		>

			<SwiperSlide
				v-for="(slide, index) in data"
				:key="index"
			>
			<div class="image">
				<img :src="slide?.filename" :alt="slide?.alt">
			</div>
			</SwiperSlide>
			<SwiperControls/>
		</Swiper>
	</div>
</template>

<style lang="scss">

.lightbox{
	position: fixed;
	z-index: 1001;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(8, 22, 33, 0.8);

	display: flex;
	justify-content: center;
	align-items: center;

	.swiper {
		button {
			z-index: 5;
			@media (min-width:1220px) {
				position: fixed;
			}
		}
	}

	.swiper-wrapper {
		width: 100%;
		max-width: 64rem;
		height: 650px;
		margin-bottom: 2rem;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 450px;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 16px;
		@media (min-width:1024px) {
			height: 650px;
		}
		.image{
			width: 100%;
			height: 450px;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				border-radius: 1rem;
				object-fit: contain;
				width: auto;
				height: auto;
			}
			@media (min-width:1024px) {
				height: 650px;
				img {
					height: 100%;
				}
			}
		}
	}
}

@media (max-width: 760px) {
	.lightbox {
		.swiper-wrapper {
			width: 100vw;
			height: initial;
		}
		.swiper-slide {
			height: 100%;
			max-height: 450px;
		}
	}
}

</style>