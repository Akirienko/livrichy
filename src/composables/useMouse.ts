// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useMouse(e: any) {
  // state encapsulated and managed by the composable
  const x = ref(0)
  const y = ref(0)

	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	// console.log(screenWidth, x.value);
	

	const padding = 24;
	const cardWidth = 448;
	const cardHeight = 280;

  // a composable can update its managed state over time.
  function update(event: any) {
		console.log(event);
		
    x.value = event.pageX
    y.value = event.clientY
  }
  update(e)

	const leftPropertyCss = (screenWidth - x.value) < cardWidth ? `right: ${Math.abs(screenWidth - x.value)}px;` : `left: ${x.value}px;`
	const topPropertyCss = (screenHeight - y.value) < cardHeight ? `bottom: ${Math.abs(screenHeight - y.value)}px;` : `top: ${y.value}px;`
	console.log(topPropertyCss);
	
	// if()


  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  // window.addEventListener('mousemove', update(e))

  // expose managed state as return value
  return `display:flex;${leftPropertyCss}${topPropertyCss}`
}