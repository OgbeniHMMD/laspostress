<template>
  <footer class="text-light">
    <div class="bg-secondary border-top border-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-100 col-sm-6 col-md-4 p-3 p-md-5">
            <div class="h3 pb-2">Quick Links</div>
            <p v-for="link in footerJSON.quickLinks" :key="link.id">
              <span class="mr-2">&raquo;</span>
              <a class="text-light" :href="link.slug">{{link.title}}</a>
            </p>
          </div>

          <div class="col-100 col-sm-6 col-md-4 p-3 p-md-5">
            <div class="h3 pb-2">About US</div>
            <p v-for="link in footerJSON.aboutUs" :key="link.id">
              <span class="mr-2">&raquo;</span>
              <a class="text-light" :href="link.slug">{{link.title}}</a>
            </p>
          </div>

          <div class="col-100 col-md-4 p-3 p-md-5">
            <div class="h3 pb-2">Contact Us</div>
            <p v-for="contact in footerJSON.contactUs" :key="contact.id">
              <i class="fa mr-2" :class="contact.icon"></i>
              <span>{{contact.title}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary border-top text-monospace">
      <div class="container-fluid row align-items-center p-3 p-md-3 m-0">
        <div class="col-100 col-md-6 text-center text-md-left">
          <p>
            &copy; Lagos State Polytechnic. Designed by
            <a
              class="text-light"
              href="//www.hmmd.xyz"
            >Olajide A. Hammed</a>
          </p>
        </div>

        <div class="col-100 col-md-6 pt-3 pt-md-0">
          <div class="d-flex justify-content-around justify-content-md-end">
            <a
              v-for="link in footerJSON.socialLinks"
              :key="link.id"
              class="m-2 ml-md-3 text-light"
              :href="link.url"
            >
              <i class="fa fa-2x" :class="link.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
import footerJSON from "~/assets/json/footer.json";

export default {
  data: function() {
    return {
      footerJSON
    };
  }
};
</script>