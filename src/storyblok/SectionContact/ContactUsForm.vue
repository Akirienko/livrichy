<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const validationSchema = toTypedSchema(
	z.object({
		Name: z.string().min(1, 'Required'),
		Email: z.string().min(1, { message: "Required" }).email("This is not a valid email."),
		Phone: z.string().min(1, 'Required'),
	})
)
const { handleSubmit, isSubmitting, } = useForm({ validationSchema })
const onSubmit = handleSubmit(async (values, { resetForm }) => {
	const emailData = {
		Name: values.Name,
		Email: values.Email,
		Phone: values.Phone,
	}

	emailjs.send('service_wda5h3j', 'template_contactForm', emailData, 'GZRxMdaQHDQviRqgt')
		.then(
			(result) => {
				console.log('SUCCESS!', result.text)
			},
			(error) => {
				console.log('ERROR...', error.text)
			},
		)

	resetForm()
	successModal.value = true
})
// Toggle Modal
const successModal = ref(false)
// form data
const data = {
	name: {
		name: 'Name',
		label: 'name',
		placeholder: 'Name',
		icon: 'User',
	},
	email: {
		name: 'Email',
		label: 'email',
		placeholder: 'Email',
		icon: 'Email',
	},
	phone: {
		name: 'Phone',
		label: 'phone',
		placeholder: 'Phone',
		icon: 'Phone',
	},
	button: 'Send',
}
</script>

<template>
	<form id="form" @submit="onSubmit" autocomplete="off" class="w-full">
		<template v-if="data">
			<VeeInput :data="data.name" />
			<VeeInput :data="data.email" />
			<VeeInput :data="data.phone" />
			<button type="submit" :disabled="isSubmitting" class="w-full h-[55px] flex justify-center items-center relative mt-6">
				<span class="text">{{ data.button }}</span>
				<div class="buttonbg"></div>
			</button>
		</template>
		<div v-show="successModal" @click="successModal = false" class="success_modal">
			<h3 class="font-bold md:text-[4.5rem] text-[2rem] text-center uppercase max-w-[70%] title">Thanks for your detatils</h3>
			<p class="text-xl my-8 md:text-[1.5rem]">Our manager will contact you shortly</p>
			<div class="links flex md:w-[50%] w-[80%]">
				<NuxtLink to="/" class="w-full h-[55px] flex justify-center items-center relative mt-6 uppercase mx-4">
					<span class="text">Home</span>
					<div class="buttonbg"></div>
				</NuxtLink>
				<a @click="successModal = false" class="w-full h-[55px] flex justify-center items-center relative mt-6 uppercase mx-4">
					<span class="text">Back</span>
					<div class="buttonbg"></div>
				</A>
			</div>
		</div>
	</form>
</template>

<style lang="scss" scoped>
form {
	.success_modal {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 1000;
		top: 0;
		left: 0;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('/success_form.jpg');

		.title {
			line-height: 1.2;

			background: linear-gradient(180deg, theme('colors.palette.dark_blue1') 0%, theme('colors.palette.dark_blue2') 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	.links a {
		border-radius: 1rem;
		background-color: theme("colors.palette.body");
		border: 1px solid theme("colors.palette.gold_yellow");
		transition: all .2s linear;

		span {
			position: relative;
			z-index: 10;
			transition: all .2s linear;
			font-weight: 500;

			background: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}

		&:nth-child(2) {
			span {
				background-clip: initial;
				background: initial;
				color: theme('colors.palette.body');
				-webkit-text-fill-color: theme('colors.palette.body');
			}

			background: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
		}

		&:hover {
			background-image: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
			cursor: pointer;

			span {
				color: theme('colors.palette.body');
				background-clip: initial;
				background: none;
				-webkit-text-fill-color: inherit;
			}

			&:nth-child(2) {
				background: theme("colors.palette.body");

				span {
					background: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
				}

			}
		}

	}

	button {
		background-image: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
		border-radius: 1rem;

		span {
			position: relative;
			z-index: 10;
			transition: all .2s linear;

			background: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}

		.buttonbg {
			background-color: theme('colors.palette.body');
			transition: all 0.2s linear;

			width: 99.4%;
			height: 96%;
			left: 1px;
			top: 1px;
			border-radius: 1rem;
			position: absolute;
			z-index: 1;

		}

		&:hover {
			.buttonbg {
				opacity: 0;
			}

			span {
				color: theme('colors.palette.body');
				background-clip: initial;
				background: none;
				-webkit-text-fill-color: inherit;
			}
		}
	}
}
</style>