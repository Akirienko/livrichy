<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
	}
}>()
</script>

<template>
	<section class="section-contact py-8">
		<div class="container mx-auto px-6 tablet:px-0 flex flex-wrap">
			<h2 class="title w-full md:text-[3rem] md:flex-row text-[2.3rem] uppercase flex flex-col leading-[2.6rem] tablet:px-0 px-8 text-center">Let us <span class="tablet:ml-2 colored tablet:mr-3">contact</span> you</h2>
			<p class="w-full text-center text-palette-dark_blue2 my-8 text-2xl">{{ blok.subtitle }}</p>
			<div class="form_wrapper w-4/6">
				<ContactUsForm />
			</div>
			<div class="phone w-2/6 p-8 relative">

				<img src="/i_phone.png" alt="">
				<img class="absolute bottom-0 w-full h-auto" src="/phone_shade.svg" alt="">
			</div>

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
}
</style>