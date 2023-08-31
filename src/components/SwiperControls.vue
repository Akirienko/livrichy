<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <button @click="swiper.slidePrev()">
		<Icon class="prev" name="GalleryArrow" />
	</button>
  <button @click="swiper.slideNext()">
		<Icon class="next" name="GalleryArrow" />
	</button>
</template>

<style lang="scss" scoped>
$white: rgba(253, 246, 233, 1);
$white75: rgba(253, 246, 233, 0.75);

.icon {
	position: fixed;
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
	top: 50%;
	left: 10%;
}

.next {
	top: 50%;
	right: 10%;
}

@media (max-width: 760px) {
.prev, .next{
	display: none;
}
}
</style>
