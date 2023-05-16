<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
		description: string,
		image: {
			filename: string
		}
	}
}>()
</script>


<template>
	<section class="about">
		<div class="container mx-auto tablet:py-20 tablet:px-0 pt-8 pb-32">
			<h2 class="title w-full md:text-[3rem] md:flex-row text-[2.3rem] uppercase flex flex-col leading-[2.6rem] tablet:px-0 px-8">About <span class="tablet:ml-2 colored">livrichy</span></h2>
			<p class="tablet:mt-12 mt-9 text-xl tablet:px-0 px-8">{{ blok.subtitle }}</p>
			<div class="content flex flex-wrap items-stretch">
				<div class="text md:w-1/2 tablet:pl-[5vw] tablet:pr-[6vw] flex items-center justify-center py-9 tablet:py-0  px-8">
					<p>
						{{ blok.description }}
					</p>
				</div>
				<div class="image md:w-1/2 relative">
					<div class="arrow absolute tablet:top-1/2 tablet:left-28 tablet:translate-y-[-50%] bottom-[-5rem] left-1/2 translate-x-[-50%] w-40 h-40 rounded-full flex justify-center items-center z-10 bg-gradient-to-b from-[#081621e6] to-[#172940e6]">
						<div class="text absolute top-0 left-0">
							<svg viewBox="0 0 100 100" class="w-full fill-white h-auto">
								<defs>
									<path id="circle" d="
											M 50, 50
											m -37, 0
											a 37,37 0 1,1 74,0
											a 37,37 0 1,1 -74,0" />
								</defs>
								<text font-size="6" letter-spacing="1.5">
									<textPath xlink:href="#circle">
										Luxury appartment with livrichy Real Estate agency
									</textPath>
								</text>
							</svg>
						</div>
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.49768e-05 16C2.497e-05 16.5666 0.192024 17.042 0.576025 17.426C0.960026 17.81 1.43469 18.0013 2.00002 18L24.35 18L14.6 27.75C14.2 28.15 14 28.6253 14 29.176C14 29.7266 14.2 30.2013 14.6 30.6C15 31 15.4667 31.2 16 31.2C16.5334 31.2 17 31 17.4 30.6L30.6 17.4C30.8 17.2 30.9414 16.9833 31.024 16.75C31.1067 16.5166 31.1487 16.2666 31.15 16C31.15 15.7333 31.108 15.4746 31.024 15.224C30.94 14.9733 30.7987 14.7653 30.6 14.6L17.4 1.39995C17 0.999952 16.5334 0.799949 16 0.799949C15.4667 0.799949 15 0.999952 14.6 1.39995C14.2 1.79995 14 2.27528 14 2.82595C14 3.37662 14.2 3.85128 14.6 4.24995L24.35 14L2.00003 14C1.43336 14 0.958027 14.1919 0.574026 14.576C0.190026 14.96 -0.00130825 15.4346 2.49768e-05 16Z" fill="url(#paint0_linear_505_583)" />
							<defs>
								<linearGradient id="paint0_linear_505_583" x1="31.15" y1="16" x2="0.192407" y2="18.4404" gradientUnits="userSpaceOnUse">
									<stop stop-color="#FCD07D" />
									<stop offset="1" stop-color="#926D3F" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div class="image-wrapper overflow-hidden rounded-l-[200px]">
						<img class="w-full h-full object-cover" :src="blok.image.filename" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
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

.arrow {
	backdrop-filter: blur(2.5px);

	.text {
		animation: spin 7s infinite linear;
	}

	@keyframes spin {
		0% {
			transform: rotateZ(0);
		}

		100% {
			transform: rotateZ(360deg);
		}
	}
}
</style>
