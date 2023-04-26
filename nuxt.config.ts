// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: "src",
	components: {
		"dirs": [
			{ "path": "~/components/App", "global": true, pathPrefix: false, },
			{ "path": "~/components/Cards", "global": true, pathPrefix: false, },
			{ "path": "~/components/Sections", "global": true, pathPrefix: false, },
		],
	},
	typescript: {
		strict: true,
		typeCheck: false,
		shim: false
	},
	modules: [
		// 'nuxt-icon',
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
	},
})
