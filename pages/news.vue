<template>
  <div class="container bg-white border-top p-3 px-md-5">
    <h1 class>
      <i class="fa fa-newspaper-o mr-2"></i> Latest News
    </h1>
    <hr />

    <div v-for="article in news.items" :key="article.id" class="d-flex flex-wrap">
      <article class="media position-relative my-2">
        <img src="~~/assets/images/logo-inner.png" class="mr-3 thumb" alt="..." />
        <div class="media-body d-flex flex-column align-items-start">
          <a :href="'/view?id'+article.id" class="stretched-link">
            <h3 class="m-0">{{article.title}}</h3>
          </a>
          <p class="lead d-none d-lg-inline">{{article.content}}</p>
          <div class="text-muted mt-auto">
            <span>
              <i class="fa fa-clock-o mr-2"></i>
              {{new Date(article.published).toDateString()}}
            </span>
            <span>
              <i class="fa fa-newspaper-o m-2"></i>
              <template v-for="label in article.labels">{{" #" + label}}</template>
            </span>
          </div>
        </div>
      </article>
    </div>

    <div v-if="loading" classs="text-center text-monospaced lead">
      <i class="fa fa-spinner mr-3"></i>Loading...
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
      news: "",
      events: "",
      bloggerJSON
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
            this.bloggerJSON.newsLabels +
            "," +
            "&maxResult="
        )
        .then(response => {
          this.news = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created() {
    this.fetchNews();
  }
};
</script>