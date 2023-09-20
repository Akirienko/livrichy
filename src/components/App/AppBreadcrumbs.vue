<script setup lang="ts">
import type { Link } from '~/types'
const props = defineProps<{
	links: Link[]
}>()

type ItemType = {
  url: string;
  name: string;
};
const items: {
  '@type': 'ListItem';
  position: number;
  item: {
    '@id': string;
    name: string;
  };
}[] = props.links.map((item: ItemType, index: number) => ({
  '@type': 'ListItem',
  position: index + 1,
  item: {
    '@id': `https://livrichy.com/${item.url}`,
    name: item.name,
  },
}));

// Define a function that returns the JSON-LD object
// console.log(items, typeof items);


useJsonld({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items
});
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