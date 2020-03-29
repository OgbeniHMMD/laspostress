<template>
  <header class="text-uppercase m-0 p-0">
    <nav class="bg-primary d-sm-flex align-items-center p-0 pr-sm-3">
      <section class="slant pl-2 pl-sm-3 pr-sm-5 bg-light align-self-start p-auto">
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
          <div class="h2 d-inline d-sm-none text-primary pl-2">Lagos State Polytechnic</div>
        </div>
      </section>

      <section class="text-white align-self-center">
        <div class="h2 d-none d-md-block">
          Lagos State Polytechnic
          <div class="h4 d-none d-lg-block">The Polytechnic of Excellence</div>
        </div>
      </section>

      <section class="ml-auto h6 m-0">
        <div class="nav d-flex justify-content-between">
          <a class="nav-link text-light" href="#">Home</a>
          <a class="nav-link text-light" href="#">Feature</a>
          <a class="nav-link text-light" href="#">Pricing</a>
          <span class="dropdown">
            <a
              class="nav-link dropdown-toggle text-light"
              href="#"
              id="dropdown-portal"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Portal</a>
            <div
              class="dropdown-menu bg-secondary border-light rounded-0"
              aria-labelledby="dropdown-portal"
            >
              <a class="dropdown-item" href="#">Student's Login</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Applicant's Login</a>
            </div>
          </span>
          <span class="dropdown">
            <a
              class="nav-link dropdown-toggle text-light"
              href="#"
              id="dropown-quicklinks"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Quick Links</a>
            <div
              class="dropdown-menu dropdown-menu-right bg-secondary border-light rounded-0"
              aria-labelledby="dropdown-quicklinks"
            >
              <a class="dropdown-item" href="#">Staff Login</a>
              <a class="dropdown-item" href="#">Staff Email</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Staff Appraisal</a>
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Sundry Payments</a>
            </div>
          </span>
        </div>
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

