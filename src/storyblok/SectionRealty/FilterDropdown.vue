<script lang="ts" setup>
defineProps<{
	name: string,
}>()
</script>

<template>
	<button class="btn">
		<slot name="name"></slot>
	</button>

	<div :class="`dropdown ${name}`">
		<slot name="dropdown"></slot>
	</div>
</template>


<style lang="scss" scoped>
.btn {
	padding: 0.5rem 1rem;
	border: 1px solid #102032;

	display: flex;
	align-items: center;

	h5 {
		margin: 0 1rem;
	}

}

.dropdown {
	display: flex;
	flex-wrap: wrap;

	&.price {
		width: 360px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	&.area {

		width: 575px;
		justify-content: flex-start;
		display: flex;

		input {
			width: 1rem;
			margin-right: 0.5rem;
		}

		label {
			width: 160px;
		}

	}
}
</style>