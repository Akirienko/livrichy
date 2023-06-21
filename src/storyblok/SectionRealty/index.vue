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
const FilterSortByRef = ref(DataSortBy[1])
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

</script>

<template>
	<section class="section-realty">
		<div class="filters">

			<!-- size -->
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

			<!-- name -->
			<div class="search-fitler">
				<input type="text" name="filterByName" id="filterByName" v-model="FilterNameRef">
				<Icon name="Search" size="24px" />
			</div>

			<!-- price -->
			<FilterDropdown name="price">
				<template #name>
					<h5>price range</h5>
					<Icon name="Dropdown" />
				</template>
				<template #dropdown>
					<div class="fitler-input">
						<label for="minPrice">
							Min
						</label>
						<input type="text" v-model="FilterMinPriceRef" name="minPrice" id="minPrice" placeholder="any" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
					</div>
					<div class="fitler-input">
						<label for="minPrice">
							Max
						</label>
						<input type="text" v-model="FilterMaxPriceRef" name="minPrice" id="minPrice" placeholder="99999999" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
					</div>

				</template>
			</FilterDropdown>

			<!-- area -->
			<FilterDropdown name="area">
				<template #name>
					<Icon name="Location" />
					<h5>Area</h5>
					<Icon name="Dropdown" />
				</template>
				<template #dropdown>
					<template v-for="area in DataArea">
						<div class="input-label">
							<input :value="area" v-model="FilterAreaRef" type="checkbox" :id="area">
							<label :for="area">{{ area }}</label>
						</div>
					</template>
				</template>
			</FilterDropdown>

			<!-- bedroom -->
			<FilterDropdown name="bedroom">
				<template #name>
					<Icon name="Bedroom" />
					<h5>bedroom</h5>
					<Icon name="Dropdown" />
				</template>
				<template #dropdown>
					<template v-for="data in DataBedroom">
						<input :value="data.value" v-model="FilterBedroomRef" type="checkbox" :id="data.value">
						<label :for="data.value">{{ data.label }}</label>
					</template>
				</template>
			</FilterDropdown>

			<!-- bathroom -->
			<FilterDropdown name="bathroom">
				<template #name>
					<Icon name="Bathroom" />
					<h5>bathroom</h5>
					<Icon name="Dropdown" />
				</template>
				<template #dropdown>
					<template v-for="data in DataBathroom">
						<input :value="data.value" v-model="FilterBathroomRef" type="checkbox" :id="data.value">
						<label :for="data.value">{{ data.label }}</label>
					</template>
				</template>
			</FilterDropdown>

			<!-- market -->
			<FilterDropdown name="market">
				<template #name>
					<h5>Market</h5>
					<Icon name="Dropdown" />
				</template>
				<template #dropdown>
					<template v-for="data in DataMarket">
						<input :value="data.value" v-model="FilterMarketRef" type="checkbox" :id="data.value">
						<label :for="data.value">{{ data.label }}</label>
					</template>
				</template>
			</FilterDropdown>

			<!-- sortby -->
			<FilterDropdown name="sortby">
				<template #name>
					<Icon name="Bathroom" />
					<h5>{{ FilterSortByRef.label }}</h5>
					<Icon name="Dropdown" />
				</template>
				<template #dropdown>
					<template v-for="(data, index) in DataSortBy">
						<input :value="data" v-model="FilterSortByRef" type="radio" :id="index.toString">
						<label :for="index.toString">{{ data.label }}</label>
					</template>
				</template>
			</FilterDropdown>

			<button class="btn m-8 p-8  border-4" @click="refresh()">
				Filter
			</button>

		</div>
		<div class="projects-grid">
			<template v-if="realty && !pending">
				<ProjectCard v-for="item in realty.data.stories" :data="item!" />
			</template>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.section-realty {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 10%;

	.filters {

		.search-fitler {
			width: 30rem;
			display: flex;
			flex-direction: column;

			position: relative;

			.icon {
				position: absolute;
				top: 1rem;
				left: 1rem;
			}

			input {
				height: 56px;
				padding: 1rem 1rem 1rem 3rem;
			}
		}

		.fitler-input {
			width: 10rem;
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
			}
		}

		.dropdown {
			&.area {
				.input-label {
					width: 10rem;
					display: flex;
					justify-content: center;
				}
			}
		}
	}

	.projects-grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}
</style>