<script setup lang="ts">
import type { Link } from '~/types'
defineProps<{
	links: Link[]
}>()

</script>

<template>
	<ul class="breadcrumbs container mx-auto px-5">
		<li v-for="link in links">
			<NuxtLink :to="link.url" class="capitalize breadcrumbs-link flex">
				<div class="dots-breadcrumbs">
          {{ link.name }}
        </div>
				<span class="mx-2">
					>
				</span>
			</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss" >
.breadcrumbs{
	display: flex;
	// flex-wrap: wrap;
	.router-link-active {
		color: #926D3F;
	}
	li {
		&:last-child {
			span {
				display: none;
			}
		}
	}
}
</style>