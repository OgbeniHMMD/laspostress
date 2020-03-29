<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>


<script>
import TheHeader from "~~/pages/partials/header.vue";
import TheFooter from "~~/pages/partials/footer.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
