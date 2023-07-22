<script setup lang="ts">
import type { Link } from '~/types'
defineProps<{
	links: Link[]
}>()

</script>

<template>
	<ul class="breadcrumbs">
		<li v-for="link in links">
			<NuxtLink :to="link.url">
				{{ link.name }}
			</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss" >
.breadcrumbs{
	display: flex;
	gap: 1.5rem;
}
</style>