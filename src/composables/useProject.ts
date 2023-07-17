import { defineStore } from 'pinia'

enum sizeUnits {
	sqMeter = "sq. m.",
	sqFeet = "sq. ft.",
}

export default defineStore('ProjectStore', () => {
	
	// state
	const sizeUnit = ref<sizeUnits>(sizeUnits.sqMeter)

	// actions
	function sizeUnitToggle(){
		if( sizeUnit.value == sizeUnits.sqMeter) 
			sizeUnit.value = sizeUnits.sqFeet
		else
		sizeUnit.value = sizeUnits.sqMeter

	}

	return {
		sizeUnit,
		sizeUnitToggle
	}
})
