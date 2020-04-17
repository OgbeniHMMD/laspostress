<template>
  <div>
    <div class="container bg-white border-top p-3 px-md-5">
      <header class="mb-3">
        <span class="h1">
          <i class="fa fa-newspaper-o mr-2"></i>
          Latest {{label}}
        </span>
      </header>

      <the-spinner v-if="loading" />

      <div>
        <article
          v-for="article in news.items"
          :key="article.id"
          class="d-flex position-relative my-3"
        >
          <img :src="bloggerJSON.defaultThumbnail" class="mr-3 thumb" alt="thumbnail" />
          <div class="media-body d-flex flex-column align-items-start">
            <a :href="'/articles/read?id='+article.id" class="stretched-link">
              <h3 class="mt-0 mb-2">{{article.title}}</h3>
            </a>
            <p class="lead d-none d-lg-inline">
              {{
              article.content
              .replace(/<[^>]+>/g, '')
              .substring(0, parseInt(bloggerJSON.snippetLenght))
              }}
            </p>
            <div class="text-muted mt-auto">
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
      loading: true,
      news: "",
      events: "",
      bloggerJSON,
      label: this.$route.query.label
    };
  },
  methods: {
    async fetchNews() {
      axios
        .get(
          "https://www.googleapis.com/blogger/v3/blogs/" +
            this.bloggerJSON.id +
            "/posts" +
            "?key=" +
            this.bloggerJSON.key +
            "&labels=" +
            this.label +
            "," +
            "&maxResult="
        )
        .then(response => {
          this.news = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.errors.push(e);
          this.loading = false;
          $nuxt.error({ statusCode: 404 });
        });
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