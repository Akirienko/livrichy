import { defineStore } from 'pinia'

enum sizeUnits {
	sqMeter = "sq. m.",
	sqFeet = "sq. ft.",
}

enum priceCurrency {
	usd = "USD",
	aed = "AED",
}

export default defineStore('ProjectStore', () => {

	// state
	const sizeUnit = ref<sizeUnits>(sizeUnits.sqMeter)
	const activeCurency = ref<priceCurrency>(priceCurrency.aed)

	// actions
	function sizeUnitToggle(){
		if( sizeUnit.value == sizeUnits.sqMeter)
			sizeUnit.value = sizeUnits.sqFeet
		else
			sizeUnit.value = sizeUnits.sqMeter
	}
	function priceCurrencyToggle(){
		if( activeCurency.value == priceCurrency.usd)
			activeCurency.value = priceCurrency.aed
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
