<template>
  <div>
    <div class="container bg-white border-top p-3 p-md-5">
      <the-spinner v-if="loading" />

      <template v-if="!loading">
        <h1 class="mt-0 mb-3">{{article.title}}</h1>
        <article v-html="article.content" class="lead"></article>
      </template>
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
      article: "",
      bloggerJSON
    };
  },
  methods: {
    async fetchArticle() {
      axios
        .get(
          "https://www.googleapis.com/blogger/v3/blogs/" +
            this.bloggerJSON.id +
            "/pages/" +
            this.$route.query.id +
            "?key=" +
            this.bloggerJSON.key
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.article = response.data;
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
          this.loading = false;
          $nuxt.error({ statusCode: 404 });
        });
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