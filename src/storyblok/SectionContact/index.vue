<script lang="ts" setup>
import type { AppData } from "~~/src/types"
defineProps<{
	blok: {
		title: string,
		subtitle: string,
	}
}>()
// const props = defineProps<{
// 	blok: {
// 		title: string;
// 		subtitle: string;
// 	},
// 	data: AppData
// }>()

// console.log(props.data);
// :href="`tel:${data.content.phone}`"
</script>

<template>
	<section class="section-contact">
		<div class="container mx-auto px-6 tablet:px-0 flex flex-wrap">
			<h2 class="title w-full md:text-[3rem] md:flex-row text-[2.3rem] uppercase flex flex-col leading-[2.6rem] tablet:px-0 px-8 text-center whitespace-break-spaces justify-center">Let us <span class="tablet:ml-2 colored tablet:mr-3">contact</span> you</h2>
			<p class="w-full text-center text-palette-dark_blue2 my-6 md:text-2xl">{{ blok.subtitle }}</p>
			<div class="form_wrapper lg:w-[50%] lg:px-[5%] w-full flex items-center justify-center">
				<ContactUsForm class="max-w-[650px] lg:mb-20" />
			</div>
			<a href="tel:$+971‒52‒110‒0555" target="_blank" class="hidden lg:flex w-1/2 p-8 relative ml-auto justify-center items-center">

				<img class="w-[60%] phone h-[450px] object-contain" src="/i_phone.png" alt="phone">
				<div class="absolute bottom-[-50px] w-[80%] h-auto mx-auto phone_shadow" >
					<svg class="w-full h-auto" viewBox="0 0 354 96" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.2" filter="url(#filter0_f_235_188)">
						<ellipse cx="149" cy="20" rx="149" ry="20" transform="matrix(1 0 0 -1 28 68)" fill="url(#paint0_linear_235_188)"/>
						</g>
						<defs>
						<filter id="filter0_f_235_188" x="0" y="0"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feGaussianBlur stdDeviation="14" result="effect1_foregroundBlur_235_188"/>
						</filter>
						<linearGradient id="paint0_linear_235_188" x1="149" y1="0" x2="149" y2="40" gradientUnits="userSpaceOnUse">
						<stop stop-color="#081621"/>
						<stop offset="1" stop-color="#172941"/>
						</linearGradient>
						</defs>
					</svg>

				</div>
			</a>

		</div>
	</section>
</template>


<style lang="scss" scoped>
.section-contact {
	display: flex;
	.title {
		background: linear-gradient(180deg, theme('colors.palette.dark_blue1') 0%, theme('colors.palette.dark_blue2') 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		span {
			background: linear-gradient(180deg, theme('colors.palette.gold_yellow') 0%, theme('colors.palette.gold_dark') 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}

	.phone, .phone_shadow {
		animation: vibrate;
		animation-duration: 3s;
		animation-timing-function: linear;
		// animation-timing-function: cubic-bezier(.36, .07, .19, .97);
		animation-iteration-count: infinite;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 300px;
		animation-direction: alternate;
	}
	.phone_shadow {
		animation: shadow;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		// transform: translate3d(0, 0, 0);
		// backface-visibility: hidden;
		// perspective: 300px;
		animation-direction: alternate;
	}

	@keyframes shadow {
		0% {
			transform: scaleX(0.8);
		}
		100% {
			transform: scaleX(1);
		}
	}

	$translateY: -20px;
	$translateX: 3px;
	@keyframes vibrate {
		0%, 10% {
		// 0%, 10%, 20% {
			// -webkit-transform: translate3d(-$translateX, $translateY, 0);
							transform: translate3d(3px, -20px, 0) rotateZ(5deg);
		}
		5%, 15% {
			// -webkit-transform: translate3d(3px, $translateY, 0);
							transform: translate3d(3px, -20px, 0)  rotateZ(-5deg);
		}
		// 0%, 2%, 4%, 6%, 8%, 10%, 12%, 14%, 16%, 18% {
		// 	-webkit-transform: translate3d(-$translateX, $translateY, 0);
		// 					transform: translate3d(-$translateX, $translateY, 0);
		// }
		// 1%, 3%, 5%, 7%, 9%, 11%, 13%, 15%, 17%, 19% {
		// 	-webkit-transform: translate3d($translateX, $translateY, 0);
		// 					transform: translate3d($translateX, -15px, 0);
		// }
		30%{
			-webkit-transform: translate3d(0, $translateY, 0);
							transform: translate3d(0, $translateY, 0);
		}
		100% {
			-webkit-transform: translate3d(0, 0, 0);
							transform: translate3d(0, 0, 0);
		}
	}
}
</style>