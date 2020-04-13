<template>
  <div class="row m-0 bg-white border-top py-3">
    <section class="col-12 col-md-6 col-lg-8">
      <div>
        <span class="h1">News</span>
        <a href="/news-events" class="border-left ml-3 pl-3">&gt;&gt; All News</a>
      </div>

      <div v-for="news in newsEventJSON.news" :key="news.id" class="d-flex flex-wrap">
        <article class="media position-relative my-2">
          <img src="~~/assets/images/logo-inner.png" class="mr-3 thumb" alt="..." />
          <div class="media-body">
            <a :href="news.slug" class="stretched-link">
              <h3 class="m-0">{{news.title}}</h3>
            </a>
            <p class="lead d-none d-lg-block">{{news.description}}</p>
            <div class="text-muted">{{news.time}}</div>
          </div>
        </article>
      </div>
    </section>

    <section class="col-12 col-md-6 col-lg-4">
      <div class="mt-5 mt-md-0">
        <span class="h1">Events</span>
        <a href="/news-events" class="border-left ml-3 pl-3">&gt;&gt; All Events</a>
      </div>

      <div
        v-for="event in newsEventJSON.events"
        :key="event.id"
        class="d-flex flex-column justify-content-between"
      >
        <article class="d-flex position-relative p-0 m-1 py-2">
          <div class="event-thumb h4 bg-primary m-0 p-2 mr-2 text-center text-white">
            {{event.time[0]}}
            <br />
            {{event.time[1]}}
          </div>
          <div>
            <a :href="event.slug" class="stretched-link">
              <h5 class="m-0">{{event.title}}</h5>
            </a>
            <div class="pt-2 text-muted text-small">{{event.comment}}</div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>



<script>
import newsEventJSON from "~/assets/json/news-events.json";

export default {
  data: function() {
    return {
      newsEventJSON
    };
  }
};
</script>