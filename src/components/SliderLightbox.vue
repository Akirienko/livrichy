<script setup lang="ts">
import { useCycleList, onKeyStroke, onClickOutside, useIntervalFn } from '@vueuse/core'

const props = defineProps<{
	data: ({
		filename: string;
		alt?: string | null | undefined;
	} | null)[]
}>()

const isOpen = ref(false) // toggle lightbox
const { state, next, prev, index } = useCycleList(props.data)


// go to img with click on dots
function goToImage(value: number) {
	index.value = value
}
// close lightbox on click outside
const lightbox = ref(null)	// lightbox ref
onClickOutside(lightbox, (event) => {
	isOpen.value = false
})
// onKeyStroke
onKeyStroke(['Escape', 'ArrowLeft', 'ArrowRight'], (e: KeyboardEvent) => {
	if (!isOpen.value) return
	switch (e.key) {
		case 'Escape':
			isOpen.value = false
			break
		case 'ArrowLeft':
			prev()
			break
		case 'ArrowRight':
			next()
			break
	}
})

// auto loop
// const { } = useIntervalFn(() => {
// 	/* your function */
// 	index.value++
// }, 2000)

// TODO
// add swipe
// const { isSwiping, direction } = useSwipe(img)


// TODO
// add loading spinner animation
</script>

<template>
	<div :class="[`slider`, { lightbox: isOpen }]">
		<div class="wrapper">
			<Icon class="prev" @click="prev()" name="GalleryArrow" ref="lightbox" />
			<div class="image" @click="isOpen = true" ref="lightbox">
				<img :src="state?.filename">
			</div>
			<Icon class="next" @click="next()" name="GalleryArrow" ref="lightbox" />
			<div class="dots">
				<span v-for="i in data.length" class="dot" :class="{ active: index == i - 1 }" @click="goToImage(i - 1)"></span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$white: rgba(253, 246, 233, 1);
$white75: rgba(253, 246, 233, 0.75);

.slider {
	width: 812px;
	height: 440px;
	margin-bottom: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	.wrapper {
		width: inherit;
		height: inherit;

		.image {
			width: inherit;
			height: inherit;

			img {
				width: 100%;
				height: 100%;
				border-radius: 1rem;
				object-fit: cover;
			}

			&:hover {
				cursor: pointer;
			}
		}

		.icon {
			display: none;
		}

		.dots {
			position: absolute;
			right: 2rem;
			bottom: 2rem;

			display: flex;
			gap: 1rem;

			.dot {
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				background: $white75;

				transition: transform 0.25s ease;
				will-change: transform;

				&:hover {
					cursor: pointer;
					background: $white;
					transform: scale(1.5);
				}

				&.active {
					background: rgba(253, 246, 233, 1);
					transform: scale(1.5);
				}
			}
		}
	}


	&.lightbox {
		position: fixed;
		z-index: 1001;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(8, 22, 33, 0.8);

		display: flex;
		justify-content: center;
		align-items: center;

		.wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;

			.image {
				width: 1030px;
				height: 558px;

				&:hover {
					cursor: auto;
				}
			}

			.icon {
				display: initial;
				// position: absolute;
				width: 2rem;
				height: 2rem;
				stroke: none;
				fill: $white75;
				transition: all 0.2s ease;

				&:hover {
					cursor: pointer;
					fill: $white;
				}
			}

			.prev {
				// top: 50%;
				// left: -4rem;
				transform: rotate(180deg);
			}

			.next {
				// top: 50%;
				// right: -4rem;
			}


			.dots {
				display: none;
			}

		}
	}
}





@media (max-width: 800px) {
	#gallery {
		.grid {
			justify-content: space-between;

			.image {
				width: 48%;
				margin-right: 0;
			}
		}
	}
}

@media (max-width: 600px) {
	#gallery {
		padding-bottom: 2rem;

		.grid {

			.image {
				width: 100%;
				margin-bottom: 2rem;

			}
		}
	}
}
</style>