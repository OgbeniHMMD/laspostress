<template>
  <div>
    <div class="container bg-white border-top p-3 p-md-5">
      <the-spinner v-if="spinner" />

      <template v-if="!spinner">
        <h1 class="mt-0">{{article.title}}</h1>
        <div class="text-muted mt-auto">
          <span>
            <i class="fa fa-clock-o mr-2"></i>
            {{new Date(article.published).toDateString()}}
          </span>
          <span>
            <i class="fa fa-user m-2"></i>
            {{article.author.displayName}}
          </span>
          <span>
            <i class="fa fa-tags m-2"></i>
            <template v-for="label in article.labels">{{" #" + label}}</template>
          </span>
        </div>

        <hr class="mt-0" />
        <article v-html="article.content" class="lead"></article>
      </template>
    </div>

    <join-our-poly />
  </div>
</template>



<script>
import axios from "axios";
import TheSpinner from "~/components/TheSpinner.vue";
import JoinOurPoly from "~/components/JoinOurPoly.vue";

export default {
  components: {
    TheSpinner,
    JoinOurPoly
  },
  data: function() {
    return {
      article: [],
      spinner: true
    };
  },
  methods: {
    async fetchArticle() {
      axios
        .get(
          `${process.env.bloggerURL}/${process.env.bloggerId}/posts/${this.$route.query.id}?key=${process.env.bloggerKey}`
        )
        .then(response => {
          this.article = response.data;
          this.spinner = false;
        })
        .catch(e => $nuxt.error({ message: e.message }));
    }
  },
  head() {
    return {
      title: `${this.article.title}  - Lagos State Polytechnic}`
    };
  },
  created() {
    this.fetchArticle();
  }
};
</script>