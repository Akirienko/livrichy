// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	srcDir: "src",
	components: {
		"dirs": [
			{ "path": "~/components/App", "global": true, pathPrefix: false, },
		],
	},
	typescript: {
		// strict: true,
		// typeCheck: false,
		shim: false
	},
	modules: [
		// 'nuxt-icon',
		'nuxt-graphql-client',
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		'@storyblok/nuxt'
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
	},
	storyblok: {
		accessToken: "EY5QQBcr1uxt51fx1tkRPwtt"
	},
	'graphql-client': {
		clients: {
			default: {
				host: 'https://gapi.storyblok.com/v1/api',
				headers: {
					token: 'EY5QQBcr1uxt51fx1tkRPwtt',
					version: 'published',
				}
			}
		}
	},
})
