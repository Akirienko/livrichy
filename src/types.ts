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
		price: number,
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