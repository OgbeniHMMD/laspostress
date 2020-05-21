<template>
  <header class="text-uppercase m-0 p-0">
    <b-navbar toggleable="lg" type="dark" variant="primary" class="border-bottom p-0">
      <div class="slant p-1 pl-sm-3 pr-5 bg-light align-self-start p-auto">
        <div class="d-flex align-items-center">
          <a href="/">
            <img width="90" height="90" src="/logo.png" class="logo d-inline-block align-top" alt />
          </a>
        </div>
      </div>

      <div class="d-none d-sm-block pl-md-3">
        <div class="h2 text-white">
          Lagos State Polytechnic
          <div class="h4 text-light mb-0">The Polytechnic of Excellence</div>
        </div>
      </div>

      <b-navbar-toggle target="nav-collapse" class="border-light rounded p-3 mr-2"></b-navbar-toggle>

      <div id="search-navbar" class="ml-auto mr-lg-3 p-2 col-12 col-lg-4">
        <div class="input-group input-group-lg nav-item">
          <input
            type="search"
            class="form-control border-light shadow-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <div class="input-group-append">
            <button class="btn bg-white" type="button" id="button-addon1">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </b-navbar>

    <b-navbar toggleable="lg" type="dark" variant="secondary" class="p-0">
      <b-collapse
        is-nav
        id="nav-collapse"
        class="justify-content-around align-items-center border-bottom"
      >
        <b-navbar-nav v-for="menu in menuJSON" :key="menu.id" class="m-2">
          <b-nav-item
            v-if="!menu.children"
            :href="menu.url"
            class="text-white h5 mb-0"
            :class="menu.class"
          >
            <i :class="menu.icon" class="fa mr-2"></i>
            {{menu.title}}
          </b-nav-item>

          <b-nav-item-dropdown v-else>
            <template v-slot:button-content>
              <div class="avoid-sticky d-flex justify-content-between w-100 text-white h5 mb-0 p-1">
                <i :class="menu.icon" class="fa mr-2"></i>
                <span class="flex-grow-1">{{menu.title}}</span>
                <i class="fa fa-angle-down ml-2 d-lg-none"></i>
              </div>
            </template>

            <template v-for="child in menu.children">
              <b-dropdown-divider v-if="child.divider" :key="child.id"></b-dropdown-divider>
              <b-dropdown-item v-else :key="child.id" :href="child.url">{{child.title}}</b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>


<script>
import menuJSON from "~/assets/json/HeaderMenu.json";

export default {
  data: function() {
    return {
      menuJSON: menuJSON
    };
  }
};
</script>