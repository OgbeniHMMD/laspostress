<template>
  <div>
    <div class="container bg-white border-top p-3 p-md-5">
      <the-spinner v-if="loading" />

      <template v-if="!loading">
        <h1 class="mt-0">{{article.title}}</h1>
        <hr class="mt-0" />
        <article v-html="article.content"></article>
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
            this.$route.hash.substring(2) +
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
  created() {
    this.fetchArticle();
  }
};
</script>