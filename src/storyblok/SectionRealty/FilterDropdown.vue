<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

defineProps<{
	name: string,
	dropdownClass: string,
}>()

const isOpen = ref(false)
const dropdownRef = ref(null)

onClickOutside(
	dropdownRef,
	(event) => {
		console.log('onClickOutside');
		isOpen.value = false
	},
)


</script>

<template>
	<div ref="dropdownRef">
		<button @click.stop="isOpen = !isOpen" class="btn">
			<slot name="name"></slot>
		</button>
		<div :class="`dropdown ${name} ${dropdownClass} ${isOpen ? 'block sm:grid' : 'hidden'} mb-10`">
			<slot name="dropdown"></slot>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.btn {
	padding: 0 20px;
	border: 1.5px solid #081621;
	border-radius: 4px;
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	height: 56px;
	width: 100%;
	@media (min-width: 1240px) {
		padding: 0 30px;
	}
}

.dropdown {
	margin: 20px 0 40px;

	@media (min-width: 1024px) {
		margin: 0;
		position: absolute;
		background-color: hsla(39, 83%, 95%, 1);
		z-index: 1;
		padding: 20px;
		border-radius: 4px;
		// border: 1.5px solid #081621;
	}
}
</style>