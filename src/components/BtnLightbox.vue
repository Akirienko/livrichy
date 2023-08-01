<script setup lang="ts">
import { useCycleList, onKeyStroke, onClickOutside } from '@vueuse/core'

const props = defineProps<{
	data: ({
		filename: string;
		alt?: string | null | undefined;
	} | null)[],
}>()

const isOpen = ref(false) // toggle lightbox
const { state, next, prev, index } = useCycleList(props.data)

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

</script>

<template>
	<div :class="[`slider`, { lightbox: isOpen }]">
		<div class="wrapper">
			<Icon class="prev" @click="prev()" name="GalleryArrow" ref="lightbox" />
			<div class="image"  ref="lightbox">
				<img :src="state?.filename">
			</div>
			<Icon class="next" @click="next()" name="GalleryArrow" ref="lightbox" />
		</div>
		<button class="floor-plan" @click="isOpen = true">
				Floor Plan
		</button>
	</div>
</template>

<style lang="scss" scoped>
$white: rgba(253, 246, 233, 1);
$white75: rgba(253, 246, 233, 0.75);

.slider {
	position: absolute;
	top: -3rem;
	left: 2rem;
	width: fit-content;

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	.floor-plan{
		z-index: 2;
		position: absolute;
		bottom: 5%;
		left: 5%;
		display: flex;
		width: 160px;
		height: 56px;
		padding: 8px;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;

		border-radius: 4px;
		background: rgba(253, 246, 233, 0.70);
	}

	.wrapper {
		width: inherit;
		height: inherit;
		max-width: 812px;

		.image {
			width: inherit;
			height: inherit;
			display: none;

			img {
				// width: 100%;
				// height: 100%;
				border-radius: 1rem;
				// object-fit: cover;
				width: auto;
				height: auto;
				object-fit: contain;
			}

			&:hover {
				cursor: pointer;
			}
		}

		.icon {
			display: none;
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
		.floor-plan{
			display: none;
		}

		.wrapper {
			max-width: 1030px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 2rem;

			.image {
				// display: initial;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				max-width: 1030px;
				height: 558px;

				&:hover {
					cursor: auto;
				}
			}

			.icon {
				display: initial;
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
				transform: rotate(180deg);
			}

			.dots {
				display: none;
			}

		}
	}
}

// @media (max-width: 1250px) {
// }
@media (max-width: 760px) {
	.slider {
		height: 100%;

		&.lightbox {
			.wrapper {
				justify-content: space-evenly;
			}
		}
	}
}
</style>