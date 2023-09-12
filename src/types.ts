export interface AppData {
	content: {
		adress: string,
		email: string,
		phone: string,
		contacts: [
			{
				name: string,
				link: string,
			}
		],
		socialMedias: [
			{
				name: string,
				link: string,
			}
		],
	}
}

export interface RealtyProject {
	name: string,
	full_slug: string,
	content: {
		area: string[],
		market: string[],
		priceUSD: number,
		priceAED: number,
		buildingName: string,
		sizeMeter: string,
		sizeFeet: string,
		bedroom: string,
		bathroom: string,
		poster: {
			alt: string,
			filename: string,
		},
	}
}

export interface Realty {
	data: {
		stories: [RealtyProject],
	},
	total:number,
}

export interface Link {
	name: string,
	url: string,
}

export interface MetaTags {
	_uid: string
	description: string
	og_description: string
	og_image: string
	og_title: string
	plugin: string
	title: string
	twitter_description: string
	twitter_image: string
	twitter_title: string
}

export interface Sitemap {
	url: string,
	changefreq: string,
	priority: number,
	lastmod: string,
}