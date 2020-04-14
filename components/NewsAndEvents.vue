<template>
  <div class="row m-0 bg-white border-top py-3">
    <section class="col-12 col-md-6 col-lg-8">
      <div>
        <span class="h1">News</span>
        <a href="/news" class="border-left ml-3 pl-3">
          <i class="fa fa-newspaper-o mr-2"></i> All News
        </a>
      </div>

      <div v-for="news in newsBlogger.items" :key="news.id" class="d-flex flex-wrap">
        <article class="media position-relative my-2">
          <img src="~~/assets/images/logo-inner.png" class="mr-3 thumb" alt="..." />
          <div class="media-body d-flex flex-column align-items-start">
            <a :href="'/news/'+news.id" class="stretched-link">
              <h3 class="m-0">{{news.title}}</h3>
            </a>
            <p class="lead d-none d-lg-block">{{news.content}}</p>
            <div class="text-muted mt-auto">
              <span>
                <i class="fa fa-clock-o mr-2"></i>
                {{new Date(news.published).toDateString()}}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="col-12 col-md-6 col-lg-4">
      <div class="mt-5 mt-md-0">
        <span class="h1">Events</span>
        <a href="/events" class="border-left ml-3 pl-3">
          <i class="fa fa-calendar mr-2"></i> All Events
        </a>
      </div>

      <div
        v-for="event in newsBlogger.items"
        :key="event.id"
        class="d-flex flex-column justify-content-between"
      >
        <article if-v="event.labels.find('Events')" class="d-flex position-relative p-0 m-1 py-2">
          <div class="event-thumb h4 bg-primary text-center text-white m-0 p-2 mr-2">
            21
            <br />4
          </div>
          <div class="d-flex flex-column align-items-start">
            <a :href="'/events'+event.id" class="stretched-link">
              <h5 class="m-0">{{event.title}}</h5>
            </a>
            <div v-if="event.published" class="pt-2 text-muted text-small mt-auto">
              <i class="fa fa-calendar mr-2"></i>
              {{new Date(event.published).toDateString()}}
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newsBlogger: ""
    };
  },
  // Fetches posts when the component is created.
  created() {
    axios //REF: https://alligator.io/vuejs/rest-api-axios/
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/4656669091149423564/posts?key=AIzaSyD43jXF8hy8PtQ-B6Jr0VZ9cWnaWoWVGgI"
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.newsBlogger = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>