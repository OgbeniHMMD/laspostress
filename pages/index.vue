<template>
  <section>
    <the-carousel />
    <join-our-poly />
    <news-and-events />
    <youtube-cards />
    <featured-links />
  </section>
</template>

<script>
import TheCarousel from "~/components/carousel.vue";
import JoinOurPoly from "~/components/JoinOurPoly.vue";
import NewsAndEvents from "~/components/NewsAndEvents.vue";
import YoutubeCards from "~/components/YoutubeCards.vue";
import FeaturedLinks from "~/components/FeaturedLinks.vue";

export default {
  components: {
    JoinOurPoly,
    NewsAndEvents,
    TheCarousel,
    FeaturedLinks,
    YoutubeCards
  }
};
</script>