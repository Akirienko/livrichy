<script lang="ts" setup>
defineProps<{
	blok: {
		title: string,
		subtitle: string,
	}
}>()
</script>

<template>
	<section class="section-contact">
		<h2 class="title w-full mb-10 md:text-[3rem] md:flex-row text-[2.3rem] uppercase flex flex-col leading-[2.6rem] tablet:px-0">Let us  <span class="tablet:ml-2 colored">contact</span> you</h2>
		<p class="tablet:mt-12 mt-9 text-xl w-full mb-4 tablet:px-0 px-8">{{ blok.subtitle }}</p>
	</section>
</template>


<style lang="scss" scoped>
.section-contact {
	display: flex;
}
</style>