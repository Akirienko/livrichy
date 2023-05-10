<script lang="ts" setup>

const { data, pending } = await useAsyncGql('HomePage')

</script>

<template>
	<div>
		<template v-if="data && !pending">
			<h1 class="text-3xl font-bold">{{ data.PageItem?.name }}</h1>
			<h1 class="text-3xl font-bold">{{ data.PageItem?.content }}</h1>
			<!-- <StoryblokComponent :blok="data.PageItem?.content" /> -->
		</template>
	</div>
</template>