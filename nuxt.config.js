export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Lagos State Polytechnic" || process.env.npm_package_name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Cuprum&display=swap"
      }
    ],
    script: [
      {
        crossorigin: "anonymous",
        src: "https://kit.fontawesome.com/57b5a4abc3.js"
      }
    ]
  },
  env: {
    name: process.env.npm_package_name,
    description: process.env.npm_package_description,

    bloggerId: "4656669091149423564",
    bloggerKey: "AIzaSyD43jXF8hy8PtQ-B6Jr0VZ9cWnaWoWVGgI",
    bloggerURL: "https://www.googleapis.com/blogger/v3/blogs"
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "bootstrap-vue/nuxt"],
  bootstrapVue: { bootstrapCSS: false, bootstrapVueCSS: false },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true // If you want to use '404.html' instead of the default '200.html'
  }
};
