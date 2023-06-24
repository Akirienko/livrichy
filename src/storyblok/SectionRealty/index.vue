<script lang="ts" setup>
import type { Realty } from "~~/src/types"

// ### Filters

// Size
const FilterMinSizeRef = ref("")
const FilterMaxSizeRef = ref("")
const FilterMinSize = computed(() => {
	if (FilterMinSizeRef.value.length == 0) return null
	return FilterMinSizeRef.value
})
const FilterMaxSize = computed(() => {
	if (FilterMaxSizeRef.value.length == 0) return null
	return FilterMaxSizeRef.value
})

// Name
const FilterNameRef = ref("")
const FilterName = computed(() => {
	if (FilterNameRef.value.length == 0) return null
	return `*${FilterNameRef.value}*`
})

// Price
const FilterMinPriceRef = ref("")
const FilterMaxPriceRef = ref("")
const FilterMinPrice = computed(() => {
	if (FilterMinPriceRef.value.length == 0) return null
	return FilterMinPriceRef.value
})
const FilterMaxPrice = computed(() => {
	if (FilterMaxPriceRef.value.length == 0) return null
	return FilterMaxPriceRef.value
})

// Area
const DataArea = ["Palm Jebel Ali", "Palm Jumeirah", "The World Islands", "Blue Waters", "Dubai Harbour", "Dubai Marina", "Dubai Internet City", "JLT", "Deema", "jumeirah heights", "Jebel Ali Village", "jumeirah park", "discovery gardens", "springs", "Emirates Hills", "Al Barsha", "Jumeirah Village Circle", "Jumeirah Village Triangle", "Dubai Production City", "Jumeirah Golf Estates", "Motor City", "Damac Hills", "Al Barari", "Villanova", "Silicon Oasis", "International City", "Nad Al Sheba", "Ras Al Khor", "Dubai Creek Harbour", "meydan", "Dubai International Airport", "DIFC", "Downtown", "Business Bay", "City Walk / Al Wasl", "Jumeirah Bay", "Jumeirah", "Umm Suqeim"]
const FilterAreaRef = ref([])
const FilterArea = computed(() => {
	if (FilterAreaRef.value.length == 0) return null
	return FilterAreaRef.value.join()
})

// Bedroom
const DataBedroom = [
	{
		value: "studio,1,2,3,4,5,6,7,8,9,10",
		label: "any",
	},
	{
		value: "studio",
		label: "studio",
	},
	{
		value: "1",
		label: "1 bedroom",
	},
	{
		value: "2",
		label: "2 bedrooms",
	},
	{
		value: "3",
		label: "3 bedrooms",
	},
	{
		value: "4",
		label: "4 bedrooms",
	},
	{
		value: "5,6,7,8,9,10",
		label: "5+ bedrooms",
	},
]
const FilterBedroomRef = ref([])
const FilterBedroom = computed(() => {
	if (FilterBedroomRef.value.length == 0) return null
	return FilterBedroomRef.value.join()
})

// Bathroom
const DataBathroom = [
	{
		value: "1,2,3,4,5,6,7,8,9,10",
		label: "any",
	},
	{
		value: "1",
		label: "1 bathroom",
	},
	{
		value: "2",
		label: "2 bathrooms",
	},
	{
		value: "3",
		label: "3 bathrooms",
	},
	{
		value: "4",
		label: "4 bathrooms",
	},
	{
		value: "5,6,7,8,9,10",
		label: "5+ bathrooms",
	},
]
const FilterBathroomRef = ref([])
const FilterBathroom = computed(() => {
	if (FilterBathroomRef.value.length == 0) return null
	return FilterBathroomRef.value.join()
})

// Market
const DataMarket = [
	{
		value: "primary",
		label: "primary",
	},
	{
		value: "secondary",
		label: "secondary",
	},
]
const FilterMarketRef = ref([])
const FilterMarket = computed(() => {
	if (FilterMarketRef.value.length == 0) return null
	return FilterMarketRef.value.join()
})

// SortBy
const DataSortBy = [
	{
		value: "content.size",
		label: "Size (low to high)",
	},
	{
		value: "content.size:desc",
		label: "Size (high to low)",
	},
	{
		value: "content.price",
		label: "Price (low to high)",
	},
	{
		value: "content.price:desc",
		label: "Price (high to low))",
	},
]
const FilterSortByRef = ref(DataSortBy[0])
const FilterSortBy = computed(() => FilterSortByRef.value.value)

// ### Fetch data
const storyblokApi = useStoryblokApi()
const { data: realty, pending, refresh } = await useAsyncData<Realty>(
	async () => await storyblokApi.get(`cdn/stories`, {
		version: "published",
		content_type: "project",
		per_page: 6,
		filter_query: {
			price: {
				"gt-int": FilterMinPrice.value,
				"lt-int": FilterMaxPrice.value,
			},
			size: {
				"gt-int": FilterMinSize.value,
				"lt-int": FilterMaxSize.value,
			},
			market: { in: FilterMarket.value },
			area: { in: FilterArea.value },
			bedroom: { in: FilterBedroom.value },
			bathroom: { in: FilterBathroom.value },
			name: { like: FilterName.value }
		},
		sort_by: FilterSortBy.value,
	},
	),
)

function resetFilters() {
	FilterSortByRef.value = DataSortBy[0]
	FilterMarketRef.value = []
	FilterBathroomRef.value = []
	FilterBedroomRef.value = []
	FilterAreaRef.value = []
	FilterMinPriceRef.value = ""
	FilterMaxPriceRef.value = ""
	FilterNameRef.value = ""
	FilterMinSizeRef.value = ""
	FilterMaxSizeRef.value = ""
}

////////////
const isOpen = ref(false);

const openFilters = () => {
	isOpen.value = !isOpen.value
	document.body.classList.add('overflow-hidden')
}

const update = () => {
	if (window.innerWidth<1024) {
		isOpen.value = !isOpen.value
	}
	document.body.classList.remove('overflow-hidden')
}

</script>

<template>
	<section class="section-realty">
		<div class="flex flex-col items-start mt-5 mb-14">
			<button @click="openFilters" class="flex items-center py-2 px-4 rounded border-2 border-[#081621] mb-5 lg:hidden">
				<svg class="mr-2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 2.28571H16.4286" stroke="url(#paint0_linear_402_2455)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M1.57129 8H7.28558M10.7141 8H16.4284" stroke="url(#paint1_linear_402_2455)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12.9999 13.7143H1.57129" stroke="url(#paint2_linear_402_2455)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M3.28557 3.99998C4.23235 3.99998 4.99986 3.23247 4.99986 2.2857C4.99986 1.33892 4.23235 0.571411 3.28557 0.571411C2.3388 0.571411 1.57129 1.33892 1.57129 2.2857C1.57129 3.23247 2.3388 3.99998 3.28557 3.99998Z" fill="#FDF6E9" stroke="url(#paint3_linear_402_2455)" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8.99993 9.71422C9.9467 9.71422 10.7142 8.9467 10.7142 7.99993C10.7142 7.05316 9.9467 6.28564 8.99993 6.28564C8.05316 6.28564 7.28564 7.05316 7.28564 7.99993C7.28564 8.9467 8.05316 9.71422 8.99993 9.71422Z" fill="#FDF6E9" stroke="url(#paint4_linear_402_2455)" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M14.7143 15.4286C15.6611 15.4286 16.4286 14.6611 16.4286 13.7143C16.4286 12.7675 15.6611 12 14.7143 12C13.7675 12 13 12.7675 13 13.7143C13 14.6611 13.7675 15.4286 14.7143 15.4286Z" fill="#FDF6E9" stroke="url(#paint5_linear_402_2455)" stroke-linecap="round" stroke-linejoin="round" />
					<defs>
						<linearGradient id="paint0_linear_402_2455" x1="10.7143" y1="2.28571" x2="10.7143" y2="3.28571" gradientUnits="userSpaceOnUse">
							<stop stop-color="#081621" />
							<stop offset="1" stop-color="#172941" />
						</linearGradient>
						<linearGradient id="paint1_linear_402_2455" x1="8.99986" y1="8" x2="8.99986" y2="9" gradientUnits="userSpaceOnUse">
							<stop stop-color="#081621" />
							<stop offset="1" stop-color="#172941" />
						</linearGradient>
						<linearGradient id="paint2_linear_402_2455" x1="7.28557" y1="13.7143" x2="7.28557" y2="14.7143" gradientUnits="userSpaceOnUse">
							<stop stop-color="#081621" />
							<stop offset="1" stop-color="#172941" />
						</linearGradient>
						<linearGradient id="paint3_linear_402_2455" x1="3.28557" y1="0.571411" x2="3.28557" y2="3.99998" gradientUnits="userSpaceOnUse">
							<stop stop-color="#081621" />
							<stop offset="1" stop-color="#172941" />
						</linearGradient>
						<linearGradient id="paint4_linear_402_2455" x1="8.99993" y1="6.28564" x2="8.99993" y2="9.71422" gradientUnits="userSpaceOnUse">
							<stop stop-color="#081621" />
							<stop offset="1" stop-color="#172941" />
						</linearGradient>
						<linearGradient id="paint5_linear_402_2455" x1="14.7143" y1="12" x2="14.7143" y2="15.4286" gradientUnits="userSpaceOnUse">
							<stop stop-color="#081621" />
							<stop offset="1" stop-color="#172941" />
						</linearGradient>
					</defs>
				</svg>
				Filters
			</button>
			<button class="text text-palette-dark_blue1 opacity-50 text-base font-semibold lg:hidden">Deselect all</button>
			<div class="filters space-y-5 lg:w-full" :class="isOpen ? 'modal-open' : 'hidden lg:block'">
				<div class="lg:flex items-end gap-5">
					<!-- size -->
					<div class="flex justify-between mb-5 lg:mb-0">
						<div class="fitler-input">
							<label for="minSize">
								<Icon name="Size" />
								Min
							</label>
							<input type="text" v-model="FilterMinSizeRef" name="minSize" id="minSize" placeholder="any" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
						</div>
						<div class="fitler-input">
							<label for="maxSize">
								<Icon name="Size" />
								Max
							</label>
							<input type="text" v-model="FilterMaxSizeRef" name="maxSize" id="maxSize" placeholder="99999999" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
						</div>
					</div>

					<!-- name -->
					<div class="search-fitler w-full">
						<input type="text" name="filterByName" id="filterByName" v-model="FilterNameRef">
						<Icon name="Search" size="24px" />
					</div>
				</div>
				<div class="lg:flex lg:flex-wrap gap-5 lg:justify-between space-y-5 lg:space-y-0">
					<!-- price -->
					<div>
						<FilterDropdown name="price" dropdownClass="flex justify-between">
							<template #name>
								<p>Price range</p>
								<Icon name="Dropdown" />
							</template>
							<template #dropdown>
								<div class="fitler-input lg:!w-full lg:mb-5">
									<label for="minPrice">
										Min
									</label>
									<input type="text" v-model="FilterMinPriceRef" name="minPrice" id="minPrice" placeholder="any" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
								</div>
								<div class="fitler-input lg:!w-full">
									<label for="minPrice">
										Max
									</label>
									<input type="text" v-model="FilterMaxPriceRef" name="minPrice" id="minPrice" placeholder="99999999" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
								</div>
							</template>
						</FilterDropdown>
					</div>

					<!-- area -->
					<div>
						<FilterDropdown name="area" dropdownClass="sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:w-[650px] lg:max-h-[300px] lg:overflow-hidden lg:overflow-y-scroll">
							<template #name>
								<Icon name="Location" class="mr-2.5" />
								<p>Area</p>
								<Icon name="Dropdown" />
							</template>
							<template #dropdown>
								<template v-for="area in DataArea">
									<div class="input-label mb-5 sm:mb-0">
										<div class="checkbox">
											<input :value="area" v-model="FilterAreaRef" type="checkbox" :id="area">
											<span class="checkmark">
												<svg width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.04784 7.27029C3.65569 7.67079 3.01098 7.67079 2.61882 7.27029L0.571053 5.17895C0.253743 4.85489 0.253744 4.3366 0.571054 4.01254C0.897954 3.67869 1.43538 3.67869 1.76228 4.01254L2.61882 4.88731C3.01098 5.28781 3.65569 5.28781 4.04784 4.88731L8.23772 0.608285C8.56462 0.27443 9.10205 0.27443 9.42895 0.608285C9.74626 0.932347 9.74626 1.45063 9.42895 1.77469L4.04784 7.27029Z" fill="#FDF6E9" />
												</svg>
											</span>
											<label :for="area">{{ area }}</label>
										</div>

									</div>
								</template>
							</template>
						</FilterDropdown>
					</div>

					<!-- bedroom -->
					<div>
						<FilterDropdown name="bedroom" dropdownClass="sm:w-[180px]">
							<template #name>
								<Icon name="Bedroom" class="fill-black mr-2.5" />
								<p>Bedroom</p>
								<Icon name="Dropdown" />
							</template>
							<template #dropdown>
								<template v-for="data in DataBedroom">
									<div class="input-label mb-5 last:mb-0">
										<div class="checkbox">
											<input :value="data.value" v-model="FilterBedroomRef" type="checkbox" :id="data.value">
											<span class="checkmark">
												<svg width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.04784 7.27029C3.65569 7.67079 3.01098 7.67079 2.61882 7.27029L0.571053 5.17895C0.253743 4.85489 0.253744 4.3366 0.571054 4.01254C0.897954 3.67869 1.43538 3.67869 1.76228 4.01254L2.61882 4.88731C3.01098 5.28781 3.65569 5.28781 4.04784 4.88731L8.23772 0.608285C8.56462 0.27443 9.10205 0.27443 9.42895 0.608285C9.74626 0.932347 9.74626 1.45063 9.42895 1.77469L4.04784 7.27029Z" fill="#FDF6E9" />
												</svg>
											</span>
											<label :for="data.value">{{ data.label }}</label>
										</div>

									</div>
								</template>
							</template>
						</FilterDropdown>
					</div>

					<!-- bathroom -->
					<div>
						<FilterDropdown name="bathroom" dropdownClass="sm:w-[180px]">
							<template #name>
								<Icon name="Bathroom" class="fill-black mr-2.5" />
								<p>bathroom</p>
								<Icon name="Dropdown" />
							</template>
							<template #dropdown>
								<template v-for="data in DataBathroom">
									<div class="input-label mb-5 last:mb-0">
										<div class="checkbox">
											<input :value="data.value" v-model="FilterBathroomRef" type="checkbox" :id="data.value">
											<span class="checkmark">
												<svg width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.04784 7.27029C3.65569 7.67079 3.01098 7.67079 2.61882 7.27029L0.571053 5.17895C0.253743 4.85489 0.253744 4.3366 0.571054 4.01254C0.897954 3.67869 1.43538 3.67869 1.76228 4.01254L2.61882 4.88731C3.01098 5.28781 3.65569 5.28781 4.04784 4.88731L8.23772 0.608285C8.56462 0.27443 9.10205 0.27443 9.42895 0.608285C9.74626 0.932347 9.74626 1.45063 9.42895 1.77469L4.04784 7.27029Z" fill="#FDF6E9" />
												</svg>
											</span>
											<label :for="data.value">{{ data.label }}</label>
										</div>

									</div>
								</template>
							</template>
						</FilterDropdown>
					</div>

					<!-- market -->
					<div>
						<FilterDropdown name="market" dropdownClass="sm:w-[180px]">
							<template #name>
								<p>Market</p>
								<Icon name="Dropdown" />
							</template>
							<template #dropdown>
								<template v-for="data in DataMarket" class="justify-start">
									<div class="input-label first:mb-5">
										<div class="checkbox">
											<input :value="data.value" v-model="FilterMarketRef" type="checkbox" :id="data.value">
											<span class="checkmark">
												<svg width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.04784 7.27029C3.65569 7.67079 3.01098 7.67079 2.61882 7.27029L0.571053 5.17895C0.253743 4.85489 0.253744 4.3366 0.571054 4.01254C0.897954 3.67869 1.43538 3.67869 1.76228 4.01254L2.61882 4.88731C3.01098 5.28781 3.65569 5.28781 4.04784 4.88731L8.23772 0.608285C8.56462 0.27443 9.10205 0.27443 9.42895 0.608285C9.74626 0.932347 9.74626 1.45063 9.42895 1.77469L4.04784 7.27029Z" fill="#FDF6E9" />
												</svg>
											</span>
											<label :for="data.value">{{ data.label }}</label>
										</div>

									</div>
								</template>
							</template>
						</FilterDropdown>
					</div>

					<!-- sortby -->
					<div>
						<FilterDropdown name="sortby" dropdownClass="sm:w-[227px]">
							<template #name>
								<p>{{ FilterSortByRef.label }}</p>
								<Icon name="Dropdown" />
							</template>
							<template #dropdown>
								<template v-for="(data, index) in DataSortBy">
									<div class="input-label mb-5 last:mb-0">
										<div class="checkbox">
											<input :value="data" v-model="FilterSortByRef" type="radio" :id="index.toString">
											<span class="checkmark">
												<svg width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.04784 7.27029C3.65569 7.67079 3.01098 7.67079 2.61882 7.27029L0.571053 5.17895C0.253743 4.85489 0.253744 4.3366 0.571054 4.01254C0.897954 3.67869 1.43538 3.67869 1.76228 4.01254L2.61882 4.88731C3.01098 5.28781 3.65569 5.28781 4.04784 4.88731L8.23772 0.608285C8.56462 0.27443 9.10205 0.27443 9.42895 0.608285C9.74626 0.932347 9.74626 1.45063 9.42895 1.77469L4.04784 7.27029Z" fill="#FDF6E9" />
												</svg>
											</span>
											<label :for="index.toString">{{ data.label }}</label>
										</div>

									</div>
								</template>
							</template>
						</FilterDropdown>
					</div>
				</div>
				<div class="flex">
					<button class="btn-filter" @click="refresh(); update();">
						Filter
					</button>
					<button @click="resetFilters()" class="text text-palette-dark_blue1 opacity-50 text-base font-semibold w-52">
						Deselect all
					</button>
				</div>
			</div>
		</div>
		<div class="projects-grid lg:grid lg:grid-cols-2 lg:gap-7 macbook-13:grid-cols-3">
			<template v-if="realty?.data.stories">
				<ProjectCard v-for="item in realty.data.stories" :data="item!" />
			</template>
			<template v-else>
				<div class="">
					No Realty
				</div>
			</template>
		</div>
		<div class="mt-20 mb-40">
			<button @click="loadMore" class="swipe-btn">
				<div class="swipe-btn__content">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 16C15.2833 16 15.521 15.904 15.713 15.712C15.905 15.52 16.0007 15.2827 16 15V6C16 5.71667 15.904 5.479 15.712 5.287C15.52 5.095 15.2827 4.99934 15 5C14.7167 5 14.479 5.096 14.287 5.288C14.095 5.48 13.9993 5.71734 14 6V14H6C5.71666 14 5.479 14.096 5.287 14.288C5.095 14.48 4.99933 14.7173 5 15C5 15.2833 5.096 15.521 5.288 15.713C5.48 15.905 5.71733 16.0007 6 16H15ZM10 11C10.2833 11 10.521 10.904 10.713 10.712C10.905 10.52 11.0007 10.2827 11 10V1C11 0.71667 10.904 0.479004 10.712 0.287004C10.52 0.0950036 10.2827 -0.000663206 10 3.4602e-06C9.71666 3.4602e-06 9.479 0.0960036 9.287 0.288004C9.095 0.480004 8.99933 0.717337 9 1V9H0.999996C0.716662 9 0.478997 9.096 0.286997 9.288C0.0949965 9.48 -0.000671387 9.71734 -3.8147e-06 10C-3.8147e-06 10.2833 0.0959959 10.521 0.287996 10.713C0.479997 10.905 0.71733 11.0007 0.999996 11H10Z" fill="#FDF6E9" />
					</svg>
					<span class="whitespace-nowrap">See more updates</span>
				</div>
			</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.modal-open {
	display: block;
	position: fixed;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	width: 100vw;
	z-index: 101;
	background: #FDF6E9;
	top: 0;
	left: 0;
	padding: 20px;
}

.btn-filter {
	border: 1.5px solid #081621;
	border-radius: 4px;
	background: transparent;
	padding: 10px 20px;
	width: 100%;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;

	@media (min-width:1024px) {
		width: 220px;
		height: 56px;
	}
}

.section-realty {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 10%;

	.filters {
		.search-fitler {
			display: flex;
			flex-direction: column;
			position: relative;

			.icon {
				position: absolute;
				top: 1rem;
				left: 1rem;
			}

			input {
				border: 1.5px solid #081621;
				border-radius: 4px;
				height: 56px;
				padding: 1rem 1rem 1rem 3rem;
				background: transparent;
			}
		}

		.fitler-input {
			width: 48%;
			display: flex;
			flex-direction: column;

			label {
				display: flex;
				align-items: center;

				.icon {
					margin-right: 0.5rem;
				}
			}

			input {
				height: 56px;
				padding: 1rem;
				border: 1.5px solid #081621;
				border-radius: 4px;
				background: transparent;
			}
		}

		.dropdown {

			.input-label {
				.checkbox {
					display: flex;
					align-items: center;
					width: 20px;
					height: 20px;
					cursor: pointer;

					label {
						padding-left: 30px;
						min-width: 200px;
					}

					input[type="checkbox"],
					input[type="radio"] {
						opacity: 0;
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;

						&:checked+.checkmark {
							background-color: black;

							&:before {
								content: "";
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								width: 8px;
								height: 8px;
								border-radius: 50%;
							}
						}
					}

					.checkmark {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border: 1px solid black;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;

						&:before {
							content: "";
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							width: 8px;
							height: 8px;
							border-radius: 50%;
							background-color: transparent;
						}
					}
				}

			}
		}
	}

}

.swipe-btn {
	height: 50px;
	background: linear-gradient(184.4deg, #FCD07D 3.57%, #926D3F 96.43%);
	border-radius: 16px;
	padding: 0 20px;
	display: flex;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: white;
	text-decoration: none;
	overflow: hidden;
	width: auto;
	box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
	animation: bounce-back 1s cubic-bezier(0.25, 0.5, 0.5, 1.1) forwards;
	transition: all 1.1s;

	&__content {
		display: flex;
		align-items: center;
		position: relative;
		height: 100%;
		width: 100%;
		justify-content: center;

		span {
			margin-left: 10px;
			transition: .5s all;
		}
	}

	@media (min-width:760px) {
		max-width: 70px;
		left: 65%;

		&__content {
			width: auto;
			justify-content: unset;

			span {
				opacity: 0;
			}
		}

		&:hover {
			animation: bounce 1s cubic-bezier(0.25, 0.5, 0.5, 1.1) forwards;
			transition: all 1.1s;

			span {
				opacity: 1;
			}
		}

		@keyframes bounce-back {
			0% {
				max-width: 220px;
			}

			90% {
				max-width: 55px;
			}

			100% {
				max-width: 60px;
			}
		}

		@keyframes bounce {
			80% {
				// padding-right: 35px;
			}

			100% {
				max-width: 220px;
			}
		}
	}
}
</style>