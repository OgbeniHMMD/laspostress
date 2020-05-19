<template>
  <div>
    <div class="container bg-white border-top p-3 p-md-5">
      <the-spinner v-if="spinner" />

      <template v-if="!spinner">
        <h1 class="mt-0 mb-3">{{article.title}}</h1>
        <article v-html="article.content" class="lead"></article>
      </template>
    </div>

    <join-our-poly />
  </div>
</template>


<script>
import axios from "axios";
import bloggerJSON from "~/assets/json/BloggerSettings.json";

import TheSpinner from "~/components/TheSpinner.vue";
import JoinOurPoly from "~/components/JoinOurPoly.vue";

export default {
  components: {
    TheSpinner,
    JoinOurPoly
  },
  data: function() {
    return {
      article: "",
      bloggerJSON,
      spinner: true
    };
  },
  methods: {
    async fetchArticle() {
      axios
        .get(
          `${process.env.bloggerURL}/${process.env.bloggerId}/pages/${this.$route.query.id}?key=${process.env.bloggerKey}`
        )
        .then(response => {
          this.article = response.data;
          this.spinner = false;
        })
        .catch(e => $nuxt.error({ message: e.message }));
    }
  },
  head() {
    return { title: this.article.title + " - Lagos State Polytechnic" };
  },
  created() {
    this.fetchArticle();
  }
};
</script>