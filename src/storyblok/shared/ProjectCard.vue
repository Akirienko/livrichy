<script setup lang="ts">
import type { RealtyProject } from "~~/src/types"
import { storeToRefs } from 'pinia'
import { transformImage } from '../../composables/tranformImage'
const props = defineProps<{
	data: RealtyProject
}>()

const { sizeUnit, activeCurency  } = storeToRefs(useProject())

const newPrice = computed(() => {
	if ( activeCurency.value == "AED")
		return props.data.content.priceAED.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	else
		return props.data.content.priceUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})
</script>

<template>
	<NuxtLink :to="`/${data.full_slug}`" class="card mb-10 max-w-[570px] flex flex-col">
		<div class="h-60">
			<picture>
				<source :srcset="transformImage(data.content.poster.filename, 500)" media="(max-width: 600px)">
				<img  :src="transformImage(data.content.poster.filename)" loading="lazy">
			</picture>
		</div>
		<div class="px-4 pt-5 pb-6 flex flex-col justify-between h-full">

			<div class="">
				<p class="mb-2 uppercase font-semibold text-2xl dots-text lg:max-w-[342px]">
					{{ data.name }}
				</p>
				<p class="flex items-center mb-4">
					<svg class="mr-2" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M0 6.39085C0 2.88687 2.88371 0 6.5 0C10.1163 0 13 2.88687 13 6.39085C13 7.34047 12.5968 8.40825 12.0642 9.42078C11.5225 10.4505 10.8047 11.5009 10.0879 12.4373C9.36976 13.3755 8.64168 14.2135 8.07035 14.8202C7.7854 15.1227 7.53377 15.3738 7.3378 15.5534C7.24135 15.6418 7.14818 15.7223 7.06545 15.7849C7.02543 15.8152 6.97336 15.8524 6.91521 15.8856C6.88622 15.9021 6.84258 15.9252 6.78858 15.9459C6.74427 15.9629 6.63865 16 6.5 16C6.36133 16 6.25572 15.9629 6.21141 15.9459C6.15741 15.9252 6.11377 15.9021 6.08478 15.8856C6.02663 15.8524 5.97456 15.8152 5.93454 15.7849C5.85181 15.7223 5.75864 15.6418 5.66219 15.5534C5.46622 15.3738 5.21459 15.1227 4.92965 14.8201C4.35832 14.2135 3.63024 13.3755 2.91205 12.4373C2.19527 11.5009 1.47745 10.4505 0.935815 9.42078C0.403204 8.40825 0 7.34047 0 6.39085ZM6.5 1.37143C3.73432 1.37143 1.44444 3.5931 1.44444 6.39085C1.44444 7.01665 1.72519 7.85202 2.22806 8.80802C2.72191 9.74687 3.39112 10.7304 4.0805 11.631C4.76849 12.5298 5.46571 13.3319 6.00642 13.906C6.19484 14.1061 6.36151 14.2756 6.5 14.4102C6.63848 14.2756 6.80516 14.1061 6.99357 13.906C7.53429 13.3319 8.23151 12.5298 8.91949 11.631C9.60888 10.7304 10.2781 9.74687 10.7719 8.80802C11.2748 7.85202 11.5556 7.01665 11.5556 6.39085C11.5556 3.5931 9.26565 1.37143 6.5 1.37143ZM2.84845 6.35183C2.84845 4.40123 4.45687 2.77361 6.5 2.77361C8.54313 2.77361 10.1516 4.40123 10.1516 6.35183C10.1516 8.30243 8.54314 9.93008 6.5 9.93008C4.45686 9.93008 2.84845 8.30242 2.84845 6.35183ZM6.5 4.14504C5.30749 4.14504 4.2929 5.10746 4.2929 6.35183C4.2929 7.59622 5.3075 8.55866 6.5 8.55866C7.69252 8.55866 8.70713 7.59621 8.70713 6.35183C8.70713 5.10746 7.69253 4.14504 6.5 4.14504Z"
							fill="url(#paint0_linear_598_285)" />
						<defs>
							<linearGradient id="paint0_linear_598_285" x1="6.5" y1="0" x2="6.5" y2="16"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#081621" />
								<stop offset="1" stop-color="#172941" />
							</linearGradient>
						</defs>
					</svg>

					{{ data.content.area }}
				</p>
			</div>

			<div class="">
				<div class="mb-4 flex items-center">
					<p class="flex items-center mr-6">
						<svg class="mr-2" width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M4.33117 5.84615C3.98051 5.84615 3.64416 6.1453 3.64416 6.57692V8.76923C3.64416 9.17282 3.30982 9.5 2.8974 9.5C2.48498 9.5 2.15065 9.17282 2.15065 8.76923V6.57692C2.15065 5.395 3.09871 4.38462 4.33117 4.38462H10.0662C10.6223 4.38462 11.1205 4.5903 11.4998 4.92462C11.879 4.59032 12.3772 4.38462 12.9338 4.38462H18.6688C19.9013 4.38462 20.8493 5.395 20.8493 6.57692V8.76923C20.8493 9.17282 20.515 9.5 20.1026 9.5C19.6902 9.5 19.3558 9.17282 19.3558 8.76923V6.57692C19.3558 6.1453 19.0195 5.84615 18.6688 5.84615H12.9338C12.5824 5.84615 12.2468 6.14497 12.2468 6.57692V8.76923C12.2468 9.17282 11.9124 9.5 11.5 9.5C11.0876 9.5 10.7532 9.17282 10.7532 8.76923V6.57692C10.7532 6.1453 10.4169 5.84615 10.0662 5.84615H4.33117Z"
								fill="black" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M2.65844 9.5C2.04369 9.5 1.49351 10.0167 1.49351 10.7179V14.6154H21.5065V10.7179C21.5065 10.0167 20.9563 9.5 20.3416 9.5H2.65844ZM0 10.7179C0 9.26589 1.16237 8.03846 2.65844 8.03846H20.3416C21.8376 8.03846 23 9.26589 23 10.7179V15.3462C23 15.7497 22.6657 16.0769 22.2532 16.0769H0.746753C0.334333 16.0769 0 15.7497 0 15.3462V10.7179Z"
								fill="black" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M2.15065 2.19231C2.15065 1.01039 3.09871 0 4.33117 0H18.6688C19.9013 0 20.8493 1.01039 20.8493 2.19231L20.8493 8.76923C20.8493 9.17282 20.515 9.5 20.1026 9.5C19.6902 9.5 19.3558 9.17282 19.3558 8.76923L19.3558 2.19231C19.3558 1.76069 19.0195 1.46154 18.6688 1.46154H4.33117C3.98051 1.46154 3.64416 1.76069 3.64416 2.19231V8.76923C3.64416 9.17282 3.30982 9.5 2.8974 9.5C2.48498 9.5 2.15065 9.17282 2.15065 8.76923V2.19231ZM0.746753 14.6154C1.15917 14.6154 1.49351 14.9426 1.49351 15.3462V18.2692C1.49351 18.6728 1.15917 19 0.746753 19C0.334333 19 0 18.6728 0 18.2692V15.3462C0 14.9426 0.334333 14.6154 0.746753 14.6154ZM22.2532 14.6154C22.6657 14.6154 23 14.9426 23 15.3462V18.2692C23 18.6728 22.6657 19 22.2532 19C21.8408 19 21.5065 18.6728 21.5065 18.2692V15.3462C21.5065 14.9426 21.8408 14.6154 22.2532 14.6154Z"
								fill="black" />
							<defs>
								<linearGradient id="paint0_linear_598_290" x1="11.5" y1="0" x2="11.5" y2="19"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#081621" />
									<stop offset="1" stop-color="#172941" />
								</linearGradient>
								<linearGradient id="paint1_linear_598_290" x1="11.5" y1="0" x2="11.5" y2="19"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#081621" />
									<stop offset="1" stop-color="#172941" />
								</linearGradient>
								<linearGradient id="paint2_linear_598_290" x1="11.5" y1="0" x2="11.5" y2="19"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#081621" />
									<stop offset="1" stop-color="#172941" />
								</linearGradient>
							</defs>
						</svg>
						<span v-if="data.content.bedroom == 'studio'">
							{{ data.content.bedroom }}
						</span>
						<span v-else>
							{{ data.content.bedroom }} bedroom
						</span>
					</p>
					<p class="flex" v-if="data.content.bathroom">
						<svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21.5333 9.48002H19.3333C19.3333 9.28907 19.2561 9.10593 19.1185 8.97091C18.981 8.83588 18.7945 8.76002 18.6 8.76002H12.7333C12.5388 8.76002 12.3523 8.83588 12.2148 8.97091C12.0773 9.10593 12 9.28907 12 9.48002H6.13333V5.52003C6.13333 5.23359 6.24923 4.95889 6.45552 4.75635C6.66181 4.55382 6.9416 4.44003 7.23333 4.44003C7.49115 4.439 7.74171 4.52377 7.94414 4.68051C8.14658 4.83726 8.28894 5.05673 8.348 5.30313C8.38828 5.48868 8.50153 5.65112 8.66313 5.75514C8.82472 5.85917 9.0216 5.89637 9.21098 5.85866C9.40035 5.82095 9.56692 5.71138 9.67447 5.55377C9.78202 5.39615 9.82186 5.20323 9.78533 5.01693C9.66082 4.444 9.3391 3.93067 8.8743 3.56333C8.4095 3.19599 7.83 2.99707 7.23333 3.00003C6.55261 3.00003 5.89977 3.26553 5.41843 3.73812C4.93708 4.21071 4.66667 4.85168 4.66667 5.52003V9.48002H2.46667C2.07768 9.48002 1.70463 9.63173 1.42958 9.90179C1.15452 10.1718 1 10.5381 1 10.92V13.8C1.00146 15.1363 1.54276 16.4174 2.50513 17.3622C3.4675 18.3071 4.77234 18.8386 6.13333 18.84V20.28C6.13333 20.471 6.2106 20.6541 6.34812 20.7891C6.48565 20.9241 6.67217 21 6.86667 21C7.06116 21 7.24768 20.9241 7.38521 20.7891C7.52274 20.6541 7.6 20.471 7.6 20.28V18.84H16.4V20.28C16.4 20.471 16.4773 20.6541 16.6148 20.7891C16.7523 20.9241 16.9388 21 17.1333 21C17.3278 21 17.5144 20.9241 17.6519 20.7891C17.7894 20.6541 17.8667 20.471 17.8667 20.28V18.84C19.2277 18.8386 20.5325 18.3071 21.4949 17.3622C22.4572 16.4174 22.9985 15.1363 23 13.8V10.92C23 10.5381 22.8455 10.1718 22.5704 9.90179C22.2954 9.63173 21.9223 9.48002 21.5333 9.48002ZM17.8667 10.2V13.08H13.4667V10.2H17.8667ZM21.5333 13.8C21.5333 14.2728 21.4385 14.7409 21.2542 15.1777C21.07 15.6144 20.7999 16.0113 20.4594 16.3456C20.1189 16.6799 19.7147 16.9451 19.2698 17.126C18.825 17.3069 18.3482 17.4 17.8667 17.4H6.13333C5.16087 17.4 4.22824 17.0207 3.54061 16.3456C2.85298 15.6705 2.46667 14.7548 2.46667 13.8V10.92H12V13.8C12 13.991 12.0773 14.1741 12.2148 14.3091C12.3523 14.4442 12.5388 14.52 12.7333 14.52H18.6C18.7945 14.52 18.981 14.4442 19.1185 14.3091C19.2561 14.1741 19.3333 13.991 19.3333 13.8V10.92H21.5333V13.8Z"
								fill="url(#paint0_linear_598_293)" />
							<defs>
								<linearGradient id="paint0_linear_598_293" x1="12" y1="3" x2="12" y2="21"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#081621" />
									<stop offset="1" stop-color="#172941" />
								</linearGradient>
							</defs>
						</svg>
						{{ data.content.bathroom }} bathroom
					</p>
				</div>

				<div class="mb-4 xxs:flex items-center justify-between">
					<p class="flex items-center mb-4 xxs:mb-0">
						<svg class="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V2C18 0.897 17.103 0 16 0H2C0.897 0 0 0.897 0 2ZM16.002 16H2V2H16L16.002 16Z"
								fill="url(#paint0_linear_598_298)" />
							<path d="M12 9H14V4H9V6H12V9ZM9 12H6V9H4V14H9V12Z" fill="url(#paint1_linear_598_298)" />
							<defs>
								<linearGradient id="paint0_linear_598_298" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
									<stop stop-color="#081621" />
									<stop offset="1" stop-color="#172941" />
								</linearGradient>
								<linearGradient id="paint1_linear_598_298" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
									<stop stop-color="#081621" />
									<stop offset="1" stop-color="#172941" />
								</linearGradient>
							</defs>
						</svg>
						{{ sizeUnit == "sq. m." ? data.content?.sizeMeter : data.content?.sizeFeet }}
						{{ sizeUnit }}
					</p>
					<p class="font-semibold xxs:font-normal">
						{{ newPrice }}
						{{ activeCurency }}
					</p>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<style lang="scss" scoped>
	.card {
		box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
		overflow: hidden;
		border-radius: 16px;
		transition: .3s;

		&:hover {
			transform: scale(1.05);
		}
	}
	.img-card {
		object-fit: cover;
		height: 100%;
		object-position: top;
		width: 100%;
		position: absolute;
	}
</style>