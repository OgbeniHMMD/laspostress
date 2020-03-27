<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>


<script>
import TheHeader from "~/components/header.vue";
import TheFooter from "~/components/footer.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
