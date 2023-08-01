<script lang="ts" setup>
import type { Link } from '~/types'

const { params, fullPath } = useRoute()
const { data, pending } = await useAsyncGql(
	"Article",
	{ articleID: `blog/${params.article}` }
)

const renderedRichText = renderRichText(data.value?.ArticleItem?.content?.richtext);

const date = new Date(data.value?.ArticleItem?.published_at).toLocaleDateString();
const formattedDate = date.replace(/\./g, '/')

const links: Link[] = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Blog',
		url: '/blog',
	},
	{
		name: params.article.toString(),
		url: fullPath,
	},
]
</script>

<template>
	<AppBreadcrumbs :links="links"/>
  <section class="blog pt-6 lg:pt-16">
    <div v-if="data?.ArticleItem && !pending" class="container mx-auto px-4 xl:px-0">
      <p class="text-lg mb-4 uppercase lg:text-[64px] font-bold lg:leading-[120%]">{{ data.ArticleItem.name }}</p>
      <div class="text-base mb-4 lg:text-2xl lg:flex lg:justify-between lg:items-end lg:mb-8">
				<p class="uppercase mb-4 lg:max-w-[175px] lg:mb-0">{{ data.ArticleItem.content?.subtitle }}</p>
				<p>{{ formattedDate }}</p>
			</div>
      <div class="">
				<div class="rounded-2xl overflow-hidden h-[400px] mb-4 lg:hidden">
					<img :src="data.ArticleItem.content?.poster?.filename" alt="hotel">
				</div>

				<div class="richTextArticle text-sm md:columns-2 lg:columns-3" v-html="renderedRichText">

				</div>
				<div class="hidden rounded-2xl overflow-hidden max-h-[650px] lg:block ">
					<img :src="data.ArticleItem.content?.poster?.filename" alt="hotel">
				</div>
			</div>
			<NuxtLink to="/blog" class="swipe-btn my-20">
				<div class="swipe-btn__content">
					<svg width="25" height="24" class="rotate-180" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.1066 12.7073C23.3069 12.507 23.4071 12.2711 23.4071 11.9995C23.4071 11.728 23.3069 11.4925 23.1066 11.2931L16.7426 4.92917C16.5423 4.72882 16.3064 4.62865 16.0348 4.62865C15.7633 4.62865 15.5278 4.72882 15.3284 4.92917C15.1281 5.12952 15.0279 5.36545 15.0279 5.63698C15.0279 5.90851 15.1281 6.14398 15.3284 6.34338L20.9853 12.0002L15.3284 17.6571C15.1281 17.8574 15.0279 18.0934 15.0279 18.3649C15.0279 18.6364 15.1281 18.8719 15.3284 19.0713C15.5288 19.2717 15.7647 19.3718 16.0362 19.3718C16.3078 19.3718 16.5432 19.2717 16.7426 19.0713L23.1066 12.7073ZM16.0355 12.7073C16.2359 12.507 16.3361 12.2711 16.3361 11.9995C16.3361 11.728 16.2359 11.4925 16.0355 11.2931L9.67157 4.92917C9.47123 4.72882 9.23529 4.62865 8.96376 4.62865C8.69223 4.62865 8.45676 4.72882 8.25736 4.92917C8.05701 5.12952 7.95684 5.36545 7.95684 5.63698C7.95684 5.90851 8.05701 6.14398 8.25736 6.34338L13.9142 12.0002L8.25736 17.6571C8.05701 17.8574 7.95684 18.0934 7.95684 18.3649C7.95684 18.6364 8.05701 18.8719 8.25736 19.0713C8.45771 19.2717 8.69364 19.3718 8.96517 19.3718C9.2367 19.3718 9.47217 19.2717 9.67157 19.0713L16.0355 12.7073Z" fill="#FDF6E9"/>
					</svg>
					<span>Go back</span>
				</div>
			</NuxtLink>
    </div>
  </section>
</template>


<style scoped lang="scss">
.swipe-btn {
	height: 50px;
	background: linear-gradient(184.4deg, #FCD07D 3.57%, #926D3F 96.43%);
	border-radius: 16px;
	padding: 0 20px;
	display: flex;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: white;
	text-decoration: none;
	overflow: hidden;
	width: auto;
	box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
	animation: bounce-back 1s cubic-bezier(0.25, 0.5, 0.5, 1.1) forwards;
	transition: all 1.1s;

	&__content {
		display: flex;
		align-items: center;
		position: relative;
		height: 100%;
		width: 100%;
		justify-content: center;

		span {
			margin-left: 10px;
			transition: .5s all;
		}
	}

	@media (min-width:760px) {
		max-width: 50px;
		&__content {
			width: auto;
			justify-content: unset;
			svg {
				transform: rotate(180deg);
			}
			span {
				opacity: 0;
				white-space: nowrap;
			}
		}

		&:hover {
			animation: bounce 1s cubic-bezier(0.25, 0.5, 0.5, 1.1) forwards;
			transition: all 1.1s;

			span {
				opacity: 1;
			}
		}

		@keyframes bounce-back {
			0% {
				max-width: 150px;
			}

			90% {
				max-width: 55px;
			}

			100% {
				max-width: 60px;
			}
		}

		@keyframes bounce {
			80% {
				// padding-right: 35px;
			}

			100% {
				max-width: 150px;
			}
		}
	}
}
</style>
