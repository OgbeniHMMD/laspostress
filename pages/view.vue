<template>
  <div>
    <div class="container bg-white border-top p-3 px-md-5">
      <template v-if="!loading">
        <h1>{{article.title}}</h1>
        <div class="text-muted mt-auto">
          <span>
            <i class="fa fa-clock-o mr-2"></i>
            {{new Date(article.published).toDateString()}}
          </span>
          <span>
            <i class="fa fa-user-o m-2"></i>
            {{article.author.displayName}}
          </span>
          <span>
            <i class="fa fa-newspaper-o m-2"></i>
            <template v-for="label in article.labels">{{" #" + label}}</template>
          </span>
        </div>

        <hr class="mt-0" />
        <article v-html="article.content"></article>
      </template>

      <div v-if="loading" classs="text-center text-monospaced lead">
        <i class="fa fa-spinner mr-3"></i>Loading, Please wait...
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import bloggerJSON from "~/assets/json/blogger.json";

export default {
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
            "/posts/" +
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
          $nuxt.error({ statusCode: 400, message: "Teub" });
        });
    }
  },
  created() {
    this.fetchArticle();
  }
};
</script>