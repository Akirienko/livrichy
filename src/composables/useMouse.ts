// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useMouse(e: any) {
	// state encapsulated and managed by the composable
	const x = ref(0)
	const y = ref(0)


	// console.log(screenWidth, x.value);


	// const root = document.documentElement;

	// a composable can update its managed state over time.
	function update(event: any) {
		// console.log(event);

		x.value = e.clientX
		y.value = e.clientY
	}
	update(e)

	// root.style.setProperty('--top-x', e.clientX + "px");
	// root.style.setProperty('--left-y', e.clientY + "px");
	// root.style.setProperty('--display', "flex");

	// top: var(--mouse-y);
	// left: var(--mouse-x);
	// if((screenWidth - x.value) < cardWidth) {
	// 	root.style.setProperty('--right-y', e.clientY + "px")
	// } else {
	// 	root.style.setProperty('--left-y', e.clientY + "px")
	// }

	// if((screenHeight - y.value) < cardHeight) {
	// 	root.style.setProperty('--top-x', e.clientX + "px")
	// } else {
	// 	root.style.setProperty('--bottom-x', e.clientX + "px")
	// }
	// (screenWidth - x.value) < cardWidth ? root.style.setProperty('--right-y', e.clientY + "px") : root.style.setProperty('--left-y', e.clientY + "px");
	// (screenHeight - y.value) < cardHeight ? root.style.setProperty('--bottom-x', e.clientX + "px") : root.style.setProperty('--top-x', e.clientX + "px");
	// console.log(topPropertyCss, leftPropertyCss);

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	const cardWidth = 448;
	const cardHeight = 280;
	const leftPropertyCss = (screenWidth - e.clientX) < cardWidth ? `right: ${screenWidth - e.clientX}px;` : `left: ${e.clientX}px;`
	const topPropertyCss = (screenHeight - e.clientY) < cardHeight ? `bottom: ${screenHeight - e.clientY}px;` : `top: ${e.clientY}px;`
	// const leftPropertyCss = (screenWidth - x.value) < cardWidth ? `right: ${screenWidth - e.clientX}px;` : `left: ${e.clientX}px;`
	// const topPropertyCss = (screenHeight - y.value) < cardHeight ? `bottom: ${screenHeight - e.clientY}px;` : `top: ${e.clientY}px;`
	// if()


	// a composable can also hook into its owner component's
	// lifecycle to setup and teardown side effects.
	// window.addEventListener('mousemove', update(e))

	// expose managed state as return value
	return `display:flex;${leftPropertyCss}${topPropertyCss}`
	// return `${leftPropertyCss}${topPropertyCss}`
}