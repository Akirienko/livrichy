<script lang="ts" setup>

const projectNumber = 6
const { data: projects, pending } = await useAsyncGql("LatestProjects", { projectNumber })
</script>

<template>
	<section class="section-realty py-20">
		<div v-if="projects && !pending" class="container m-auto px-5 lg:px-0">
			<div class="filters">

			</div>
			<div class="md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3">
				<ProjectCard v-for="item in projects.ProjectItems?.items" :data="item!" />
			</div>
			<div class="mt-10">
				<button class="swipe-btn">
					<div class="swipe-btn__content">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 16C15.2833 16 15.521 15.904 15.713 15.712C15.905 15.52 16.0007 15.2827 16 15V6C16 5.71667 15.904 5.479 15.712 5.287C15.52 5.095 15.2827 4.99934 15 5C14.7167 5 14.479 5.096 14.287 5.288C14.095 5.48 13.9993 5.71734 14 6V14H6C5.71666 14 5.479 14.096 5.287 14.288C5.095 14.48 4.99933 14.7173 5 15C5 15.2833 5.096 15.521 5.288 15.713C5.48 15.905 5.71733 16.0007 6 16H15ZM10 11C10.2833 11 10.521 10.904 10.713 10.712C10.905 10.52 11.0007 10.2827 11 10V1C11 0.71667 10.904 0.479004 10.712 0.287004C10.52 0.0950036 10.2827 -0.000663206 10 3.4602e-06C9.71666 3.4602e-06 9.479 0.0960036 9.287 0.288004C9.095 0.480004 8.99933 0.717337 9 1V9H0.999996C0.716662 9 0.478997 9.096 0.286997 9.288C0.0949965 9.48 -0.000671387 9.71734 -3.8147e-06 10C-3.8147e-06 10.2833 0.0959959 10.521 0.287996 10.713C0.479997 10.905 0.71733 11.0007 0.999996 11H10Z" fill="#FDF6E9"/>
						</svg>
							<span class="whitespace-nowrap">See more apartments</span>
					</div>
				</button>
			</div>
		</div>
	</section>
</template>


<style lang="scss" scoped>
.section-realty {
	width: 100%;
	display: flex;
	flex-direction: column;

	.grid {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
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
				max-width: 245px;
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
				max-width: 245px;
			}
		}
	}

}
}
</style>