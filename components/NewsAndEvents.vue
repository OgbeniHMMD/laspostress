<template>
  <div class="row align-items-start m-0 bg-white border-top py-3 p-md-3">
    <section class="col-12 col-md-7 col-lg-8">
      <header>
        <span class="h1">News</span>
        <a href="/news" class="border-left ml-3 pl-3">
          <i class="fa fa-newspaper-o mr-2"></i> All News
        </a>
      </header>

      <section v-if="loading" class="text-center">
        <i class="fa fa-spinner h1 text-primary m-5"></i>
      </section>

      <div v-for="article in news.items" :key="article.id">
        <article class="d-flex position-relative my-3">
          <img src="~~/assets/images/logo-inner.png" class="mr-3 thumb" alt="..." />
          <div class="d-flex align-items-start flex-column">
            <a :href="'/view?id='+article.id" class="stretched-link">
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
              <i class="fa fa-clock-o mr-2"></i>
              <span>
                {{
                new Date(article.published)
                .toDateString()
                }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="col-12 col-md-5 col-lg-4">
      <header class="mt-3 mt-md-0">
        <span class="h1">Events</span>
        <a href="/events" class="border-left ml-3 pl-3">
          <i class="fa fa-calendar mr-2"></i> All Events
        </a>
      </header>

      <section v-if="loading" class="text-center">
        <i class="fa fa-spinner h1 text-primary m-5"></i>
      </section>

      <section v-for="event in events.items" :key="event.id">
        <article class="d-flex position-relative p-0 m-1 py-2">
          <div class="event-thumb h4 bg-primary text-center text-white m-0 p-2 mr-2">
            {{
            new Date(event.published)
            .toDateString().split(' ')[1]
            }}
            <br />
            {{
            new Date(event.published)
            .toDateString().split(' ')[2]
            }}
          </div>
          <div class="d-flex flex-column align-items-start">
            <a :href="'/view?id='+event.id" class="stretched-link">
              <h5 class="m-0">{{event.title}}</h5>
            </a>
            <div v-if="event.published" class="pt-2 text-muted text-small mt-auto">
              <i class="fa fa-calendar mr-2"></i>
              {{
              new Date(event.published)
              .toDateString()
              }}
            </div>
          </div>
        </article>
      </section>
    </section>
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
            this.bloggerJSON.featuredLabel +
            "&maxResult=" +
            this.bloggerJSON.maxNews
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.news = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    async fetchEvents() {
      //
      //REF: https://alligator.io/vuejs/rest-api-axios/
      //
      axios
        .get(
          "https://www.googleapis.com/blogger/v3/blogs/" +
            this.bloggerJSON.id +
            "/posts" +
            "?key=" +
            this.bloggerJSON.key +
            "&labels=" +
            this.bloggerJSON.eventsLabels +
            "," +
            this.bloggerJSON.featuredLabel +
            "&maxResult=" +
            this.bloggerJSON.maxEvents
        )
        .then(response => {
          // JSON responses are automatically parsed.
          this.events = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created() {
    this.fetchNews();
    this.fetchEvents();
  }
};
</script>