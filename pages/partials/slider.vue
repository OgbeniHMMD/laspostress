<template>
  <section
    id="carouselExampleIndicators"
    class="carousel slide border-top clearfix"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="~~/assets/images/sliders/001.jpg" alt="First slide" />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~~/assets/images/sliders/002.jpg" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~~/assets/images/sliders/003.jpg" alt="Third slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~~/assets/images/sliders/004.jpg" alt="Fourth slide" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Fourth slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </section>
</template>

