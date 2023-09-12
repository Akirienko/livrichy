import type { MetaTags } from "~~/src/types"

export default (data: MetaTags) => {
	
	const { fullPath } = useRoute()
	const domain = "https://livrichy.com"
	const url = domain + fullPath

	// const builder = imageUrlBuilder({ projectId: useSanity().config.projectId, dataset: "production" })
	// const image = builder.image(data.image).auto('format').url()

	
	useHead({
		title: data.title,
		htmlAttrs: { lang: 'en' },
		link: [
			{
				rel: 'canonical',
				href: url
			},
		],
	})

	useSeoMeta({
		charset: "utf-8",
		viewport: "width=device-width, initial-scale=1",
		author: "Mart Cube",
		title: data.title ?? '',
		description: data.description,
		// OpenGraph
		ogType: "website",
		ogLocale: "en_US",
		ogSiteName: "",
		ogTitle: data.og_title,
		ogDescription: data.og_description,
		ogImage: data.og_image,
		ogImageAlt: data.title,
		ogUrl: url,
		// Twitter
		twitterTitle: data.twitter_title,
		twitterDescription: data.twitter_description,
		twitterImage: data.twitter_image,
		twitterImageAlt: data.title,
		twitterCard: "summary_large_image",
	})
}