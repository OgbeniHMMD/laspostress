<template>
  <div>
    <div class="d-flex flex-wrap justify-content-center align-items-center p-3 p-md-5">
      <div class="d-flex align-items-start flex-column order-2 order-1 mr-md-3 mr-lg-5">
        <h3 class="text-primary">{{error.statusCode}}. That was an error</h3>

        <p v-if="error.statusCode === 404" class="text-primary mt-3 mt-md-5">
          The requested URL "{{$nuxt.$route.fullPath}}"
          was not found on this server.
        </p>
        <template v-else>
          <p class="text-primary mt-3 mt-md-5">{{error.message}}</p>
        </template>
      </div>
      <img class="order-1 order-md-2 img-fluid" src="http://www.google.com/images/errors/robot.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: "Error" + " - Lagos State Polytechnic"
    };
  }
};
</script>