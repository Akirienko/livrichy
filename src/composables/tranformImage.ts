export const transformImage = (image: string, w = 600, h = 600) => {
	const cuttedPath = `img2.storyblok.com/${w}x${h}`
	const newImage = image.replace('a.storyblok.com', cuttedPath)
	return newImage
}