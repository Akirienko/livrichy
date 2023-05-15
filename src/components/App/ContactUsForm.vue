<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import { object, z } from 'zod';


const validationSchema = toFormValidator(
	z.object({
		// place: z.string(),
		email: z.string().min(1, { message: "Required" }).email("This is not a valid email."),
		name: z.string().min(1, 'Required'),
		phone: z.number().int().min(1, 'Required'),
		// promoCode: z.union([z.string().refine((val) => {
    //   return promoCodes.some(el => el.code === val)
    // }, { message: "Invalid promotion code" }).optional(), z.literal("")]),
	})
)	
const { handleSubmit, isSubmitting, } = useForm({ validationSchema })

const onSubmit = handleSubmit(async (values, { resetForm }) => {
	console.log(values);
	
}) 

const data = {
	name:{
		name: 'Name',
		label: 'name',
		placeholder: 'Name',
	},
	email: {
		name: 'Email',
		label: 'email',
		placeholder: 'Email',
	},
	phone: {
		name: 'Phone',
		label: 'phone',
		placeholder: 'Phone',
	},
	button: 'Send',
}
</script>

<template>
	<form id="form" @submit="onSubmit" autocomplete="off">
		<template v-if="data">
			<VeeInput :data="data.name" />
			<VeeInput :data="data.email" />
			<VeeInput :data="data.phone" />
			<!-- <VeeInput :data="data.promoCode" /> -->
			<button type="submit" :disabled="isSubmitting">
				<span>{{ data.button }}</span>
			</button>
		</template>
	</form>
</template>