<template>
  <b-carousel id="carousel-1" :interval="4000" fade controls indicators>
    <!-- Text slides with image -->
    <b-carousel-slide
      :key="slide.id"
      :text="slide.text"
      :img-src="slide.img"
      content-visible-up="md"
      :caption="slide.caption"
      v-for="slide in carouselJSON"
      style="text-shadow: 1px 1px 2px #333"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
import carouselJSON from "~/assets/json/CarouselSlides.json";

export default {
  data: function() {
    return {
      carouselJSON
    };
  }
};
</script>