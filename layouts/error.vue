<template>
  <div>
    <div class="d-flex flex-wrap justify-content-center align-items-center p-3 p-md-5">
      <div class="text-primary">
        <template v-if="error.statusCode === 404">
          <h1>404. Page Not Found</h1>
          <h3>Maybe I'm still working on this page.</h3>
          <h3>Maybe you clicked a broken links</h3>
        </template>
        <h1 v-else>An error occurred</h1>
      </div>
      <img class="img-fluid" src="http://www.google.com/images/errors/robot.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>