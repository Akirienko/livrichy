import { defineStore } from 'pinia'

enum sizeUnits {
	sqMeter = "sq. m.",
	sqFeet = "sq. ft.",
}

enum priceCurrency {
	usd = "USD",
	aet = "AED",
}

export default defineStore('ProjectStore', () => {
	
	// state
	const sizeUnit = ref<sizeUnits>(sizeUnits.sqMeter)
	const activeCurency = ref<priceCurrency>(priceCurrency.usd)

	// actions
	function sizeUnitToggle(){
		if( sizeUnit.value == sizeUnits.sqMeter) 
			sizeUnit.value = sizeUnits.sqFeet
		else
			sizeUnit.value = sizeUnits.sqMeter
	}
	function priceCurrencyToggle(){
		if( activeCurency.value == priceCurrency.usd) 
			activeCurency.value = priceCurrency.aet
		else
			activeCurency.value = priceCurrency.usd
	}

	return {
		sizeUnit,
		sizeUnitToggle,
		activeCurency,
		priceCurrencyToggle,
	}
})
