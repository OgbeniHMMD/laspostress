<template>
  <div class="container-fluid bg-white border-top px-3 py-3 py-md-5">
    <div class="card-deck">
      <article v-for="n in 3" :key="n" class="card bg-light">
        <img src="/logo-inner.png" class="mx-auto" />
        <div class="card-body">
          <a href="#">
            <div class="card-text">Dummy dummy dummy dummy dummy dummy dummy</div>
          </a>
          <div class="text-muted text-small">Date and Time</div>
        </div>
      </article>
    </div>
  </div>
</template>