<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'
// import type { TextField } from "~~/src/types";

const props = defineProps<{ data: {
	name: string,
	label: string,
	placeholder: string,
} }>()
const nameRef = toRef(props.data, 'name')
const { errorMessage, value } = useField(nameRef)
</script>

<template>
	<div class="field">
		<div class="error">
			<span v-show="errorMessage"> {{ errorMessage }} </span>
		</div>
		<label :for="data.name">{{ data.label }}</label>
		<input v-if="data.name === 'phone'" v-model="value" type="number" :id="data.name" :name="data.name" :placeholder="data.placeholder" />
		<input v-else v-model="value" type="text" :id="data.name" :name="data.name" :placeholder="data.placeholder" />
	</div>
</template>

<style lang="scss" scoped>
.field {
	width: 100%;
	margin-bottom: 2rem;
	position: relative;

	display: flex;
	flex-direction: column;

	label {
		text-transform: uppercase;
		font-size: 12px;
		line-height: 18px;
		font-weight: 400;
		color: theme("colors.palette.light_beige");
	}

	.error {
		display: flex;
		align-self: flex-end;
		overflow: hidden;
		height: 0.75rem;

		span {
			color: theme("colors.palette.error");
			font-weight: 300;
			font-size: .75rem;
			line-height: .75rem;
		}
	}

	input {
		width: 100%;
		border: none;
		border-bottom: 1px solid theme("colors.palette.light_beige");
		background: transparent;
		padding: 10px 16px;

		color: theme("colors.palette.light_beige");
		font-size: 1rem;
		font-weight: 100;
		line-height: 1rem;
		letter-spacing: 1px;

		&::placeholder {
			color: theme("colors.palette.light_beige");
			opacity: 0.7;
			// text-transform: lowercase;
			&::first-letter {
				text-transform: capitalize;
			}
		}

		transition: all 0.2s ease;

		&:focus {
			border-color: theme("colors.palette.gold_yellow");

			&::placeholder {
				color: theme("colors.palette.light_beige");
				opacity: 1;
			}

		}
	}


}
</style>