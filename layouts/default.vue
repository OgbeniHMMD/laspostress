<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<style lang="scss">
@import "~/assets/styles/variables.scss";
@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/src/index.scss";
@import "~/assets/styles/custom.scss";
</style>


<script>
import TheHeader from "./partials/TheHeader.vue";
import TheFooter from "./partials/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
