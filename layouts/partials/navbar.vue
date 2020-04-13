<template>
  <header class="text-uppercase m-0 p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary align-items-center p-0 pr-sm-3">
      <div class="slant p-1 pl-sm-3 pr-5 bg-light align-self-start p-auto">
        <div class="d-flex align-items-center">
          <a href="/">
            <img
              width="90"
              height="90"
              src="~~/assets/images/logo-alpha.png"
              class="logo d-inline-block align-top"
              alt
            />
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
              <svg
                class="bi bi-search"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="CurrentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-dark m-0 p-0">
      <div id="navbar01" class="collapse navbar-collapse bg-secondary border-top">
        <ul class="navbar-nav justify-content-around w-100 h5 m-0 p-1">
          <li v-for="menu in menuJSON" :key="menu.id" class="nav-item mx-3">
            <a
              v-if="!menu.children"
              :href="menu.slug"
              class="nav-link text-light h5 mb-0"
            >{{menu.title}}</a>

            <div v-else class="nav-link dropdown">
              <a
                role="button"
                :href="menu.slug"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="dropdown dropdown-toggle text-light h5 d-flex align-items-center justify-content-between"
              >
                {{menu.title}}
                <svg
                  class="ml-2"
                  width="1em"
                  height="0.6em"
                  viewBox="0 0 292.362 292.362"
                  fill="#f8f9fa"
                >
                  <path
                    d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                  />
                </svg>
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