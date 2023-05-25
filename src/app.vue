<script lang="ts" setup>
const { data } = await useAsyncGql('App')
</script>

<template>
	<div class="app mt-20 lg:mt-24">
		<AppHeader :data="data.AppItem.content" />
		<NuxtPage />
		<AppFooter :data="data.AppItem.content" />
	</div>
</template>
