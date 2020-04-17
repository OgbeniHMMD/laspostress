<template>
  <div class="container-fluid bg-light border-top px-3 py-3 py-md-5">
    <div class="card-deck">
      <div v-for="n in 3" :key="n" class="card embed-responsive embed-responsive-4by3">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/Gd4xlaZe0Lw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>