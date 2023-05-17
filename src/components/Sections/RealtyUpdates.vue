<script setup lang="ts">
const title = 'Our'
const title2 = 'projects'
const updates = [
  {
    img: "../../assets/img/flat2.jpg",
    name: "🏡 The most expensive apartments in Dubai sold in 2023.",
    description: "The top three deals included two lands on the Palm Jumeirah Island worth $150 and $20 million, as well as land in the El Tanya Fort area worth $19 million.",
    uid: "#"
  },
  {
    img: "../../assets/img/flat3.jpg",
    name: "💰 During the week, 3,164 real estate transactions worth $2.34 billion were concluded in Dubai.",
    description: "The top three deals included two lands on the Palm Jumeirah Island worth $150 and $20 million, as well as land in the El Tanya Fort area worth $19 million.",
    uid: "#"
  }
]
</script>

<template>
  <section class="our-projects">
    <div class="container mx-auto px-6 xl:px-0">
      <h2 class="title w-full mb-10 md:flex-row flex flex-col tablet:px-0 lg:mb-[90px] lg:justify-center">{{ title }}<span class="tablet:ml-2 gold-title"> {{ title2 }}</span></h2>
      <div class="lg:flex lg:items-center lg:justify-center">
        <a
          :href="update.uid"
          class="card block mb-10 max-w-[470px] lg:mb-0 lg:first:mr-[130px]"
          v-for="update in updates"
          key="project.uid"
        >
          <div class="h-60">
            <!-- <img :src="project.img" alt="flat"> -->
            <img class="img-card" src="../../assets/img/flat1.jpg" alt="flat">
          </div>
          <div class="px-4 pt-5 pb-6">

            <p class="text-lg font-semibold uppercase line-clamp-3 mb-4 md:text-2xl">{{ update.name }}</p>

            <div class="md:flex">
              <p class="text-base line-clamp-2">{{ update.description }}</p>
              <p class="text-base text-end">28/04/2023</p>
            </div>

          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  box-shadow: 0px 4px 16px rgba(146, 119, 95, 0.16);
  overflow: hidden;
  border-radius: 16px;
  transition: .3s;
  &:hover {
    transform: scale(1.05);
  }

}
.img-card {
  object-fit: cover;
  height: 100%;
  object-position: top;
  width: 100%;
  position: absolute;
}
</style>