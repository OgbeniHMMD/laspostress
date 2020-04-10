<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<style lang="sass">
@import "~/assets/styles/variables.scss"
@import "~/assets/styles/bootstrap/bootstrap.scss"
@import "~/assets/styles/custom.scss"
</style>


<script>
import TheHeader from "./partials/navbar.vue";
import TheFooter from "./partials/footer.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
