<template>
  <section id="carouselIndicators" class="carousel slide border-top clearfix" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="slide in slides"
        :key="slide.id"
        data-target="#carouselIndicators"
        :data-slide-to="slide.id"
        :class="slide.status"
      ></li>
    </ol>

    <div class="carousel-inner">
      <div v-for="slide in slides" :key="slide.id" :class="slide.status" class="carousel-item">
        <img class="d-block w-100" src="~/assets/images/sliders/001.jpg" :alt="slide.title" />
        <div v-if="slide.title || slide.description" class="carousel-caption d-none d-md-block">
          <h5>{{slide.title}}</h5>
          <p>{{slide.description}}</p>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </section>
</template>



<script>
//import newsJSON from "news.json";

export default {
  data: function() {
    return {
      slides: [
        {
          id: "00",
          status: "active", //NB: ONE Item MUST be active  **** require(`${slide.img}`)
          img: "001.jpg",
          title: "Dummmy Title 000",
          slug: "dummy-carousel-slug",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          id: "01",
          img: "002.jpg",
          title: "Dummmy Title 001",
          slug: "dummy-carousel-slug"
        },
        {
          id: "02",
          img: "003.jpg",
          title: "Dummmy Title 002",
          slug: "dummy-carousel-slug",
          description:
            "XDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          id: "03",
          img: "004.jpg",
          title: "Dummmy Title 003",
          slug: "dummy-carousel-slug",
          img: "",
          description:
            "WDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ]
    };
  }
};
</script>