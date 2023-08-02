export const transformImage = (image: string) => {
	const cuttedPath = 'img2.storyblok.com/600x600'
	const newImage = image.replace('a.storyblok.com', cuttedPath)
	return newImage
}