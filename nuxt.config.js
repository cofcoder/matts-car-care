module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Home',
    titleTemplate: "%s | Matt\'s Car Care",
    htmlAttrs: {
      lang: 'en-GB'
    },
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
        content: 'Automotive detailing in Toowoomba'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/css/uikit.min.css"
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: "https://fonts.googleapis.com/css?family=Archivo+Black|Roboto"
      }
    ],
    script: [{
        src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
        type: 'text/javascript'
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js",
        type: 'text/javascript'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/main.css'
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#F06850'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
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
