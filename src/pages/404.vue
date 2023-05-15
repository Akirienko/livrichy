<template>
  <section class="404 h-screen">
    <div class="container m-auto pt-24 pb-12 px-6 flex flex-col justify-between h-screen lg:h-auto">
      <div class="text-center lg:mb-20">
        <h1 class="uppercase text-[40px] leading-[120%] mb-7 lg:text-[64px]">
          Oops! <br> <span class="gold-title">Something goes wrong</span>
        </h1>
        <p class="text-2xl">Let’s catch up via phone</p>
      </div>
      <div class="lg:flex lg:items-center lg:justify-center">
        <a href="tel:+971‒58‒571‒8080" class="phone-btn mb-6 lg:mb-0 lg:mr-10 lg:w-[270px]">

          <span class="mr-4">+971‒58‒571‒8080</span>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5772 10.3691L11.9549 8.74523L11.941 8.73907C11.7056 8.63757 11.4484 8.5967 11.1931 8.62022C10.9378 8.64373 10.6924 8.73088 10.4794 8.87369C10.4496 8.89368 10.4208 8.91525 10.3933 8.93831L8.6771 10.3999C7.67708 9.85756 6.64398 8.83292 6.10089 7.84521L7.56708 6.1021C7.59064 6.07396 7.61248 6.04442 7.63246 6.01363C7.77153 5.80144 7.85596 5.55815 7.87824 5.30543C7.90052 5.0527 7.85995 4.79839 7.76016 4.56514C7.75779 4.56067 7.75573 4.55605 7.754 4.5513L6.13089 0.922758C5.99766 0.619309 5.77027 0.366814 5.48239 0.202643C5.1945 0.0384711 4.8614 -0.0286541 4.5324 0.0112009C3.41574 0.157891 2.39065 0.706041 1.6486 1.55327C0.906542 2.40051 0.49826 3.48889 0.500006 4.61514C0.500006 10.893 5.60703 16 11.8849 16C13.0111 16.0017 14.0995 15.5935 14.9467 14.8514C15.794 14.1093 16.3421 13.0843 16.4888 11.9676C16.5287 11.6386 16.4615 11.3055 16.2974 11.0176C16.1332 10.7297 15.8807 10.5023 15.5772 10.3691ZM11.8849 14.1538C9.35598 14.1507 6.93156 13.1448 5.14338 11.3566C3.3552 9.56844 2.34925 7.14402 2.3462 4.61514C2.34444 3.97782 2.5608 3.35908 2.95935 2.86173C3.35789 2.36439 3.91462 2.0184 4.53701 1.88124L5.98474 5.11208L4.51086 6.8675C4.48704 6.89589 4.46494 6.92568 4.4447 6.95673C4.29943 7.1787 4.21402 7.43446 4.19677 7.69918C4.17952 7.9639 4.23101 8.22858 4.34624 8.46753C5.07087 9.95064 6.56398 11.4337 8.06247 12.1599C8.30301 12.274 8.56903 12.3236 8.83452 12.3041C9.1 12.2845 9.35587 12.1964 9.57712 12.0484C9.60686 12.0283 9.63538 12.0065 9.6625 11.983L11.3879 10.516L14.6188 11.963C14.4816 12.5854 14.1356 13.1421 13.6383 13.5407C13.1409 13.9392 12.5222 14.1556 11.8849 14.1538Z" fill="url(#paint0_linear_700_1234)"/>
            <path d="M9.78381 1.37184C9.47821 2.00663 10.0736 2.74142 10.774 2.66552C11.6218 2.57366 12.5407 2.59242 12.9549 3C13.3879 3.4262 13.4024 4.40348 13.307 5.2801C13.2347 5.94466 13.9337 6.50441 14.5353 6.21296C14.7894 6.08985 14.9573 5.83931 14.9562 5.55693C14.9529 4.70272 14.8418 2.87108 14 2C13.1666 1.13768 11.3708 0.96186 10.4973 0.928606C10.1913 0.916956 9.91663 1.09593 9.78381 1.37184Z" fill="url(#paint1_linear_700_1234)"/>
            <defs>
            <linearGradient id="paint0_linear_700_1234" x1="8.5" y1="0" x2="8.5" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#081621"/>
            <stop offset="1" stop-color="#172941"/>
            </linearGradient>
            <linearGradient id="paint1_linear_700_1234" x1="8.5" y1="0" x2="8.5" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#081621"/>
            <stop offset="1" stop-color="#172941"/>
            </linearGradient>
            </defs>
          </svg>
        </a>
        <a href="/" class="home-btn lg:w-[270px]">
          HOME
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.phone-btn {
  height: 56px;
  background: #FDF6E9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #102032;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
}
.home-btn {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(184.4deg, #FCD07D 3.57%, #926D3F 96.43%);
  border-radius: 16px;
  transition: .3s;
}
</style>