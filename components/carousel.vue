<template>
  <section
    id="carousel-01"
    class="carousel slide align-self-stretch border-top clearfix"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        v-for="slide in carouselJSON"
        :key="slide.id"
        data-target="#carousel-01"
        :data-slide-to="slide.id"
        :class="slide.status"
      ></li>
    </ol>

    <div class="carousel-inner">
      <div
        v-for="slide in carouselJSON"
        :key="slide.id"
        :class="slide.status"
        class="carousel-item"
      >
        <img class="d-block w-100" :src="slide.img" :alt="slide.title" />
        <div
          v-if="slide.title"
          class="carousel-caption h2 d-none d-md-block"
          style="text-shadow: black 2px 2px;"
        >{{slide.title}}</div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#carousel-01" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-01" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </section>
</template>


<script>
import carouselJSON from "~/assets/json/carousel.json";

export default {
  data: function() {
    return {
      carouselJSON
    };
  }
};
</script>

