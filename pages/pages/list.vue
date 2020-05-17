<template>
  <div>
    <div class="container bg-white border-top p-3 px-md-5">
      <header class="mb-3">
        <span class="h1">
          <i class="fa fa-newspaper-o mr-2"></i>
          Pages
        </span>
      </header>

      <the-spinner v-if="spinner" />

      <article
        v-for="article in news.items"
        :key="article.id"
        class="d-flex position-relative my-3"
      >
        <img :src="bloggerJSON.defaultThumbnail" class="mr-3 thumb" alt="thumbnail" />
        <div class="d-flex justify-content-center justify-content-lg-around flex-column">
          <a :href="'/pages/?id='+article.id" class="stretched-link">
            <h3 class="mt-0 mb-2">{{article.title}}</h3>
          </a>
          <p class="lead d-none d-lg-inline mb-1">
            {{
            article.content
            .replace(/<[^>]+>/g, '')
            .substring(0, parseInt(bloggerJSON.snippetLenght))
            }}
          </p>
          <div class="text-muted">
            <span>
              <i class="fa fa-clock-o mr-2"></i>
              {{new Date(article.published).toDateString()}}
            </span>
            <span>
              <i class="fa fa-tags m-2"></i>
              <template v-for="label in article.labels">{{" #" + label}}</template>
            </span>
          </div>
        </div>
      </article>
    </div>

    <join-our-poly />
  </div>
</template>


<script>
import axios from "axios";
import bloggerJSON from "~/assets/json/blogger.json";

import TheSpinner from "~/components/TheSpinner.vue";
import JoinOurPoly from "~/components/JoinOurPoly.vue";

export default {
  components: {
    TheSpinner,
    JoinOurPoly
  },
  data: function() {
    return {
      news: [],
      events: [],
      bloggerJSON,
      spinner: true,
      label: this.$route.query.label
    };
  },
  methods: {
    async fetchNews() {
      axios
        .get(
          `${process.env.bloggerURL}/${process.env.bloggerId}/pages?key=${process.env.bloggerKey}&maxResult=${this.bloggerJSON.maxNews}`
        )
        .then(response => {
          this.news = response.data;
          this.spinner = false;
        })
        .catch(e => $nuxt.error({ message: e.message }));
    }
  },
  created() {
    this.fetchNews();
  },
  head() {
    return {
      title: "Latest " + this.label + " - Lagos State Polytechnic"
    };
  }
};
</script>