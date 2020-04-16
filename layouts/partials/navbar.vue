<template>
  <header class="text-uppercase m-0 p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary align-items-center p-0 pr-sm-3">
      <div class="slant p-1 pl-sm-3 pr-5 bg-light align-self-start p-auto">
        <div class="d-flex align-items-center">
          <a href="/">
            <img width="90" height="90" src="/logo.png" class="logo d-inline-block align-top" alt />
          </a>
        </div>
      </div>

      <div class="text-white align-self-center pl-md-3">
        <div class="h2 d-none d-sm-block">
          Lagos State Polytechnic
          <div class="h4 d-none d-md-block">The Polytechnic of Excellence</div>
        </div>
      </div>

      <div class="ml-auto">
        <button
          class="navbar-toggler btn bg-secondary border-light rounded p-3 mr-2"
          width="40"
          height="40"
          type="button"
          data-toggle="collapse"
          data-target="#navbar01"
          aria-controls="navbar01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div id="search-navbar" class="ml-auto h6 m-0 p-2 col-12 col-lg-4">
        <div class="input-group input-group-lg nav-item">
          <input
            type="search"
            class="form-control border-light"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <div class="input-group-append">
            <button class="btn bg-light" type="button" id="button-addon1">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-dark m-0 p-0">
      <div id="navbar01" class="collapse navbar-collapse bg-secondary border-top">
        <ul class="navbar-nav justify-content-around w-100 h5 m-0 p-1">
          <li v-for="menu in menuJSON" :key="menu.id" class="nav-item mx-3">
            <a v-if="!menu.children" :href="menu.slug" class="nav-link text-light h5 mb-0">
              <i :class="menu.icon" class="fa mr-2"></i>
              {{menu.title}}
            </a>

            <div v-else class="nav-link dropdown">
              <a
                role="button"
                :href="menu.slug"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="dropdown avoid-sticky text-light h5 d-flex align-items-center"
              >
                <i :class="menu.icon" class="fa mr-2"></i>
                <span class="flex-grow-1">{{menu.title}}</span>
                <i class="fa fa-angle-down ml-2 d-lg-none"></i>
              </a>

              <div
                :class="menu.class"
                class="dropdown-menu bg-secondary border-light rounded-0 mt-0"
              >
                <template v-for="child in menu.children">
                  <div v-if="child.divider" :key="child.id" class="dropdown-divider"></div>
                  <a
                    v-else
                    :key="child.id"
                    :href="child.slug"
                    class="dropdown-item text-light py-2"
                  >{{child.title}}</a>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
import menuJSON from "~/assets/json/navbar.json";

export default {
  data: function() {
    return {
      menuJSON: menuJSON
    };
  }
};
</script>