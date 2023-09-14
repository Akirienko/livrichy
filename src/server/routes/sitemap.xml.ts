import { SitemapStream, streamToPromise } from 'sitemap'
import StoryblokClient from "storyblok-js-client"
interface Sitemap {
	real_path: string,
	changefreq: string,
	priority: number,
	lastmod: string,
}

export default defineEventHandler(async event => {

	const Storyblok = new StoryblokClient({
			accessToken: 'EY5QQBcr1uxt51fx1tkRPwtt'
	})
	// fetch 
	const routes: Sitemap[] = await await Storyblok.getAll('cdn/links', {
			version: 'published'
	})
	// console.log(routes);
	
	const sitemap = new SitemapStream({ hostname: 'https://livrichy.com' })
	routes.forEach(route => {
		sitemap.write({
			url: route.real_path,
			priority: 1,
		})
	})
	sitemap.end()

	setHeader(event, 'content-type', 'application/xml')
	return streamToPromise(sitemap)
})