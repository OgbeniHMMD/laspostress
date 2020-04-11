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

      <div id="search-navbar" class="ml-auto h6 m-0 p-2 col-12 col-lg-auto">
        <div class="input-group input-group-lg nav-item">
          <input
            type="search"
            class="form-control"
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
        <ul class="navbar-nav justify-content-around h5 m-0 p-1">
          <li v-for="menu in menu001" :key="menu.id" class="nav-item mx-3">
            <a v-if="!menu.children" :href="menu.slug" class="nav-link text-light h5">{{menu.title}}</a>

            <div v-else class="nav-link dropdown">
              <a
                role="button"
                :href="menu.slug"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="nav-link dropdown-toggle text-light h5 p-0"
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
      </div>
    </nav>
  </header>
</template>


<script>
//import newsJSON from "news.json";

export default {
  data: function() {
    return {
      menu001: [
        {
          title: "Admissions",
          slug: "dummy-carousel-slug",
          children: [
            { title: "National Diploma", slug: "dummy-children-slug" },
            { title: "Higher National Diploma", slug: "dummy-children-slug" },
            { divider: "-" },
            {
              title: "School Of Part-time Studies",
              slug: "dummy-children-slug"
            }
          ]
        },
        {
          title: "Portals",
          slug: "dummy-carousel-slug",
          children: [
            { title: "Application portal", slug: "dummy-children-slug" },
            { title: "Post UTME portal", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "Student Portal", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "Staff Portal", slug: "dummy-children-slug" },
            { title: "Staff Appraisal", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "PT Lecturing Form", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "LaspoKonsult", slug: "dummy-children-slug" }
          ]
        },
        { title: "Research", slug: "dummy-carousel-slug" },
        {
          id: "03",
          title: "Documents",
          slug: "dummy-carousel-slug",
          children: [
            { title: "Brochure", slug: "dummy-children-slug" },
            { title: "Harmonized Curriculum", slug: "dummy-children-slug" },
            {
              title: "CCE Examinations Time-Table 18/19 Acad. Sess.",
              slug: "dummy-children-slug"
            },
            {
              title: "Procedure for Registration 2019/2020",
              slug: "dummy-children-slug"
            },
            { divider: "-" },
            { title: "FAQ", slug: "dummy-children-slug" }
          ]
        },
        { title: "News & Event", slug: "dummy-carousel-slug" },
        {
          title: "About",
          slug: "dummy-carousel-slug",
          children: [
            { title: "Mission & Vission", slug: "dummy-children-slug" },
            { title: "Child Title 2", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" },
            { title: "Child Title 3", slug: "dummy-children-slug" },
            { divider: "-" },
            { title: "FAQ", slug: "dummy-children-slug" }
          ]
        }
      ]
    };
  }
};
</script>