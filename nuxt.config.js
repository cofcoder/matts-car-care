const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Home',
    titleTemplate: "%s | Matt's Car Care",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css"
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: "https://fonts.googleapis.com/css?family=Archivo+Black|Roboto"
      }
    ],
    script: [{
        src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit.min.js",
        type: 'text/javascript'
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/js/uikit-icons.min.js",
        type: 'text/javascript'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#F06850'
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
