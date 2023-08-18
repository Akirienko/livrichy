<script lang="ts" setup>
defineProps<{
	blok: {
		primaryTitle: string,
		primarySubtitle: string,
		primaryImage: {
			filename: string,
			alt: string,
		},
		secondaryTitle: string,
		secondarySubtitle: string,
		secondaryImage: {
			filename: string,
			alt: string,
		},
	}
}>()


function FilterRealty(value: string) {
	const { push } = useRouter()
	push({
		path: '/realty',
		query: {
			market: value
		}
	})
}
</script>

<template>
  <section class="market">
    <div class="md:flex">
      <svg class="absolute top-0 h-[280px] lg:h-[533px]" viewBox="0 0 704 533" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M702 2H517C224.404 2 -12.9184 238.657 -13.9963 531H702V2ZM-16 533C-16 532.333 -15.9988 531.666 -15.9963 531C-14.9184 237.552 223.299 0 517 0H704V533H-16Z" fill="url(#paint0_linear_679_92)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M686 2H501C208.404 2 -28.9184 238.657 -29.9963 531H686V2ZM-32 533C-32 532.333 -31.9988 531.666 -31.9963 531C-30.9184 237.552 207.299 0 501 0H688V533H-32Z" fill="url(#paint1_linear_679_92)"/>
        <defs>
        <linearGradient id="paint0_linear_679_92" x1="336" y1="3.9405e-06" x2="336" y2="533" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FCD07D"/>
        <stop offset="1" stop-color="#5B391E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_679_92" x1="336" y1="3.9405e-06" x2="336" y2="533" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FCD07D"/>
        <stop offset="1" stop-color="#5B391E"/>
        </linearGradient>
        </defs>
      </svg>

      <div @click="FilterRealty('primary')" class="primary block h-[280px] overflow-hidden md:w-[50%] lg:h-[533px] black-bg">
				<picture class="absolute h-full">
						<source :srcset="transformImage(blok.primaryImage.filename as string, 500)" media="(max-width: 600px)">
						<img loading="lazy" :src="transformImage(blok.primaryImage.filename as string, 900)" >
					</picture>
        <div class="flex flex-col z-10 items-end mt-20 md:items-start md:left-[20%] lg:left-[30%] lg:mt-28 macbook-13:left-[22%]">
          <p class="text-palette-gradient_blue text-lg lg:text-2xl lg:mb-2 md:ml-[30px]">{{ blok.primarySubtitle }}</p>
          <h2 class="text-[40px] text-palette-gradient_blue leading-[50px] uppercase mr-10 lg:text-[54px] xl:text-[64px] lg:mb-2">{{ blok.primaryTitle }}</h2>
          <svg class="w-[140px] h-8 mr-[200px] md:mr-10" viewBox="0 0 191 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.312 2.00009V29.4198L51.7788 2.00009H63.0902L75.5475 29.3989V2.00009H84.9596L86.1715 0.709961V2.00009H91.7875C93.8571 2.00009 95.7625 2.37274 97.4478 3.18654C99.1055 3.96581 100.461 5.08775 101.447 6.56356C102.467 8.06881 102.939 9.81475 102.939 11.7121C102.939 13.5829 102.459 15.3102 101.452 16.8215C100.592 18.1104 99.4514 19.1298 98.0737 19.8872L105.295 29.3098V2.00009H115.887V13.3078L124.754 2.00009H144.808L144.887 1.91097L144.902 2.00009H161.107V11.3761H146.428L146.465 11.6001H160.211V20.4001H146.465L146.428 20.6241H161.267V30.0001H144.902L144.887 30.0892L144.808 30.0001H124.395L120.105 22.7557L114.232 30.0001H93.0886L86.6394 21.3601H86.1715V30.0001H64.3279L62.3371 25.3921H52.537L50.5393 30.0001H29.008V19.4548L24.4504 30.0001H15.1049L10.544 19.5146V30.0001H0.23999V2.00009H13.8121L19.7963 16.3267L25.7361 2.00009H39.312ZM19.8032 21.5323L12.48 4.00009H2.23999V28.0001H8.54399V9.9026L16.416 28.0001H23.136L31.008 9.78591V28.0001H37.312V4.00009H27.072L19.8032 21.5323ZM51.2242 23.3921H63.6517L65.6425 28.0001H72.7145L61.8025 4.00009H53.0665L42.1545 28.0001H49.2265L51.2242 23.3921ZM53.541 18.0481H61.343L57.4488 9.0343L53.541 18.0481ZM56.588 16.0481H58.3003L57.4456 14.0698L56.588 16.0481ZM84.1715 19.3601H87.6423L94.0915 28.0001H101.771L94.8773 19.0043C95.4833 18.8519 96.0533 18.6505 96.5875 18.4001C96.6728 18.3601 96.7569 18.3191 96.8398 18.2772C98.0849 17.6472 99.0675 16.7921 99.7875 15.7121C100.555 14.5601 100.939 13.2268 100.939 11.7121C100.939 10.1548 100.555 8.81075 99.7875 7.68009C99.0195 6.52809 97.9528 5.63209 96.5875 4.99209C95.2222 4.33075 93.6222 4.00009 91.7875 4.00009H77.5475V28.0001H84.1715V19.3601ZM84.1715 14.4961H90.8595C91.9262 14.4961 92.7582 14.2508 93.3555 13.7601C93.9528 13.2694 94.2515 12.5868 94.2515 11.7121C94.2515 10.8161 93.9528 10.1334 93.3555 9.66409C92.7582 9.17342 91.9262 8.92809 90.8595 8.92809H84.1715V14.4961ZM86.1715 10.9281V12.4961H90.8595C91.6376 12.4961 91.9614 12.317 92.086 12.2146C92.1565 12.1568 92.2515 12.0769 92.2515 11.7121C92.2515 11.4852 92.2139 11.3725 92.1952 11.3297C92.1808 11.2968 92.1643 11.2717 92.1199 11.2367L92.1028 11.2233L92.086 11.2095C91.9614 11.1072 91.6376 10.9281 90.8595 10.9281H86.1715ZM120.361 19.2636L125.535 28.0001H133.055L124.568 14.075L132.735 4.00009H125.727L113.887 19.0996V4.00009H107.295V28.0001H113.279L120.361 19.2636ZM127.01 14.2387L135.031 27.3994L136.764 16.0001L134.998 4.38427L127.01 14.2387ZM136.963 28.0001H159.267V22.6241H144.076L144.764 18.4001H158.211V13.6001H144.764L144.076 9.37609H159.107V4.00009H136.963L138.787 16.0001L136.963 28.0001ZM163.783 9.88809V4.00009H188.743V9.88809H179.591V28.0001H172.935V9.88809H163.783ZM170.935 11.8881H161.783V2.00009H190.743V11.8881H181.591V30.0001H170.935V11.8881Z" fill="#000"/>
          </svg>
        </div>
      </div>
      <div @click="FilterRealty('secondary')" class="secondary block h-[280px] overflow-hidden md:w-[50%] lg:h-[533px] black-bg">
				<picture class="absolute h-full">
						<source :srcset="transformImage(blok.secondaryImage.filename as string, 500)" media="(max-width: 600px)">
						<img loading="lazy" :src="transformImage(blok.secondaryImage.filename as string, 900)" >
					</picture>
        <div class="lg:ml-4 mt-20 lg:mt-28 z-10">
          <p class="text-palette-gradient_blue text-lg ml-[72px] lg:text-2xl lg:mb-2 ">{{ blok.secondarySubtitle }}</p>
          <h2 class="text-[40px] text-palette-gradient_blue leading-[50px] uppercase lg:text-[54px] xl:text-[64px] lg:mb-2">{{ blok.secondaryTitle }}</h2>
          <svg class="w-[140px] mt-2.5 ml-[3px]" viewBox="0 0 191 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.312 2.00009V29.4198L51.7788 2.00009H63.0902L75.5475 29.3989V2.00009H84.9596L86.1715 0.709961V2.00009H91.7875C93.8571 2.00009 95.7625 2.37274 97.4478 3.18654C99.1055 3.96581 100.461 5.08775 101.447 6.56356C102.467 8.06881 102.939 9.81475 102.939 11.7121C102.939 13.5829 102.459 15.3102 101.452 16.8215C100.592 18.1104 99.4514 19.1298 98.0737 19.8872L105.295 29.3098V2.00009H115.887V13.3078L124.754 2.00009H144.808L144.887 1.91097L144.902 2.00009H161.107V11.3761H146.428L146.465 11.6001H160.211V20.4001H146.465L146.428 20.6241H161.267V30.0001H144.902L144.887 30.0892L144.808 30.0001H124.395L120.105 22.7557L114.232 30.0001H93.0886L86.6394 21.3601H86.1715V30.0001H64.3279L62.3371 25.3921H52.537L50.5393 30.0001H29.008V19.4548L24.4504 30.0001H15.1049L10.544 19.5146V30.0001H0.23999V2.00009H13.8121L19.7963 16.3267L25.7361 2.00009H39.312ZM19.8032 21.5323L12.48 4.00009H2.23999V28.0001H8.54399V9.9026L16.416 28.0001H23.136L31.008 9.78591V28.0001H37.312V4.00009H27.072L19.8032 21.5323ZM51.2242 23.3921H63.6517L65.6425 28.0001H72.7145L61.8025 4.00009H53.0665L42.1545 28.0001H49.2265L51.2242 23.3921ZM53.541 18.0481H61.343L57.4488 9.0343L53.541 18.0481ZM56.588 16.0481H58.3003L57.4456 14.0698L56.588 16.0481ZM84.1715 19.3601H87.6423L94.0915 28.0001H101.771L94.8773 19.0043C95.4833 18.8519 96.0533 18.6505 96.5875 18.4001C96.6728 18.3601 96.7569 18.3191 96.8398 18.2772C98.0849 17.6472 99.0675 16.7921 99.7875 15.7121C100.555 14.5601 100.939 13.2268 100.939 11.7121C100.939 10.1548 100.555 8.81075 99.7875 7.68009C99.0195 6.52809 97.9528 5.63209 96.5875 4.99209C95.2222 4.33075 93.6222 4.00009 91.7875 4.00009H77.5475V28.0001H84.1715V19.3601ZM84.1715 14.4961H90.8595C91.9262 14.4961 92.7582 14.2508 93.3555 13.7601C93.9528 13.2694 94.2515 12.5868 94.2515 11.7121C94.2515 10.8161 93.9528 10.1334 93.3555 9.66409C92.7582 9.17342 91.9262 8.92809 90.8595 8.92809H84.1715V14.4961ZM86.1715 10.9281V12.4961H90.8595C91.6376 12.4961 91.9614 12.317 92.086 12.2146C92.1565 12.1568 92.2515 12.0769 92.2515 11.7121C92.2515 11.4852 92.2139 11.3725 92.1952 11.3297C92.1808 11.2968 92.1643 11.2717 92.1199 11.2367L92.1028 11.2233L92.086 11.2095C91.9614 11.1072 91.6376 10.9281 90.8595 10.9281H86.1715ZM120.361 19.2636L125.535 28.0001H133.055L124.568 14.075L132.735 4.00009H125.727L113.887 19.0996V4.00009H107.295V28.0001H113.279L120.361 19.2636ZM127.01 14.2387L135.031 27.3994L136.764 16.0001L134.998 4.38427L127.01 14.2387ZM136.963 28.0001H159.267V22.6241H144.076L144.764 18.4001H158.211V13.6001H144.764L144.076 9.37609H159.107V4.00009H136.963L138.787 16.0001L136.963 28.0001ZM163.783 9.88809V4.00009H188.743V9.88809H179.591V28.0001H172.935V9.88809H163.783ZM170.935 11.8881H161.783V2.00009H190.743V11.8881H181.591V30.0001H170.935V11.8881Z" fill="#000"/>
          </svg>
        </div>
      </div>

      <svg class="absolute top-[280px] h-[280px] -z-10 right-0 md:top-0 lg:h-[533px]" viewBox="0 0 704 533" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 531H187C479.596 531 716.918 294.343 717.996 2H2V531ZM720 0C720 0.666931 719.999 1.33362 719.996 2C718.918 295.448 480.701 533 187 533H0V0H720Z" fill="url(#paint0_linear_679_101)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 531H203C495.596 531 732.918 294.343 733.996 2H18V531ZM736 0C736 0.666931 735.999 1.33362 735.996 2C734.918 295.448 496.701 533 203 533H16V0H736Z" fill="url(#paint1_linear_679_101)"/>
        <defs>
        <linearGradient id="paint0_linear_679_101" x1="368" y1="3.9405e-06" x2="368" y2="533" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FCD07D"/>
        <stop offset="1" stop-color="#5B391E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_679_101" x1="368" y1="3.9405e-06" x2="368" y2="533" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FCD07D"/>
        <stop offset="1" stop-color="#5B391E"/>
        </linearGradient>
        </defs>
      </svg>

    </div>
  </section>
</template>

<style scoped lang="scss">

// .black-bg {
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.2);
//     z-index: 1;
//   }
// }
.primary {
  border-radius: 800px 0px 0px 0px;
	picture img{
		transition: transform 0.5s linear;
    object-position: bottom;
	}
	&:hover {
		picture img {
			transform: scale(1.1);
		}
	}
}
.secondary {
  border-radius: 0px 0px 800px 0px;
	img {
		transition: transform 0.5s linear;
	}
	&:hover {
		img {
			transform: scale(1.1);
		}
	}
}
</style>