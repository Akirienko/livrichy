<script setup lang="ts">
defineProps<{
	data: {
		name?: string | null,
		full_slug?: string | null,
		published_at?: string | null,
		content?:{
			poster?: {
				alt?: string | null,
				filename?: string | null,
			} | null,
		} | null
	}
}>()
</script>

<template>
	<NuxtLink
		:to="data.full_slug!"
		class="card block mb-10 max-w-[470px] lg:mb-0 lg:first:mr-[130px] lg:w-[470px]"
	>
		<div class="h-60">
			<!-- <img :src="project.img" alt="flat"> -->
			<img :src="data.content?.poster?.filename!" >
		</div>
		<div class="px-4 pt-5 pb-6">

			<p class="text-lg font-semibold uppercase line-clamp-3 mb-4 md:text-2xl">{{ data.name }}</p>

			<div class="md:flex">
				<p class="text-base line-clamp-2">{{  }}</p>
				<p class="text-base text-end">{{ data.published_at }}</p>
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