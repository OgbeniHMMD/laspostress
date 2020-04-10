<template>
  <header class="text-uppercase m-0 p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary align-items-center p-0 pr-sm-3">
      <section class="slant p-1 pl-3 pr-5 bg-light align-self-start p-auto">
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
      </section>

      <section class="text-white align-self-center pr-5">
        <div class="h2 d-none d-sm-block">
          Lagos State Polytechnic
          <div class="h4 d-none d-md-block">The Polytechnic of Excellence</div>
        </div>
      </section>

      <div class="ml-auto pr-3">
        <button
          class="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbar000"
          aria-controls="navbar000"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <span class="icon"></span>
          </span>
        </button>
      </div>

      <section
        id="navbar000"
        class="collapse navbar-collapse justify-content-end ml-auto h6 m-0 py-2 py-md-0"
      >
        <ul class="navbar-nav">
          <li v-for="menu in menu000" :key="menu.id" class="nav-item mx-3">
            <a v-if="!menu.children" :href="menu.slug" class="nav-link text-light h6">{{menu.title}}</a>

            <div v-else :key="menu.id" class="nav-link dropdown">
              <a
                role="button"
                :href="menu.slug"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="nav-link dropdown-toggle text-light h6 p-0"
              >{{menu.title}}</a>

              <div
                class="dropdown-menu bg-secondary border-light rounded-0 mt-0"
                aria-labelledby="dropdown-quicklinks"
              >
                <template v-for="child in menu.children">
                  <div v-if="child.divider" :key="child.id" class="dropdown-divider"></div>
                  <a
                    v-else
                    :href="child.slug"
                    :key="child.id"
                    class="dropdown-item text-light py-2"
                  >{{child.title}}</a>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </nav>

    <nav class="bg-secondary border-top text-uppercase">
      <section class="container-fluid">
        <div class="d-flex flex-wrap justify-content-around h5 m-0 p-1">
          <span class="dropdown">
            <a
              class="nav-link dropdown-toggle text-light"
              href="#"
              role="button"
              aria-haspopup="true"
              data-toggle="dropdown"
              aria-expanded="false"
            >Admission</a>
            <div
              class="dropdown-menu bg-secondary border-light rounded-0"
              aria-labelledby="dropdown002"
            >
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </span>
          <a class="nav-link text-light" href="#about">Research</a>
          <a class="nav-link text-light" href="#about">Gallery</a>
          <a class="nav-link text-light" href="#contact">News & Events</a>
          <a class="nav-link text-light" href="#contact">About</a>
        </div>
      </section>
    </nav>
  </header>
</template>


<script>
//import newsJSON from "news.json";

export default {
  data: function() {
    return {
      menu000: [
        {
          id: "00",
          title: "Dummmy Title 001",
          slug: "dummy-carousel-slug",
          children: [
            { title: "Child Title 1", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "Child Title 2", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" }
          ]
        },
        { title: "Dummmy Title 002", slug: "dummy-carousel-slug" },
        {
          id: "03",
          title: "Documents",
          slug: "dummy-carousel-slug"
        },
        {
          id: "04",
          title: "Quick Links",
          slug: "dummy-carousel-slug",
          children: [
            { title: "Child Title 1", slug: "dummy-children-slug" },
            { title: "Child Title 2", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "Child Title 3", slug: "dummy-children-slug" }
          ]
        }
      ]
    };
  }
};
</script>