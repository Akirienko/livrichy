<script setup lang="ts">
import { transformImage } from '../../composables/tranformImage'

const props = defineProps<{
	data: {
		name?: string | null,
		full_slug?: string | null,
		published_at?: string | null,
		content?:{
			cardInfo?: string | null,
			poster?: {
				alt?: string | null,
				filename?: string | null,
			} | null,
		} | null
	}
}>()

const date = new Date(props.data.published_at).toLocaleDateString();
const formattedDate = date.replace(/\./g, '/')
</script>

<template>
	<NuxtLink
		:to="data.full_slug!"
		class="card block mb-10 max-w-[470px] lg:mb-0 lg:first:mr-[130px] lg:w-[470px]"
	>
		<div class="h-60">
			<picture>
				<source :srcset="transformImage(data.content?.poster?.filename!, 500)" media="(max-width: 600px)">
				<img  :src="transformImage(data.content?.poster?.filename!)" loading="lazy">
			</picture>
		</div>
		<div class="px-4 pt-5 pb-6">

			<p class="text-lg font-semibold uppercase line-clamp-3 mb-4 md:text-2xl">{{ data.name }}</p>

			<div class="md:flex">
				<p class="text-base line-clamp-2">{{ data.content?.cardInfo }}</p>
				<p class="text-base text-end mt-4 opacity-60">{{ formattedDate }}</p>
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