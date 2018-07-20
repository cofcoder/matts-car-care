module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'matts-car-care',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Automotive detailing in Toowoomba' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.9/css/uikit.min.css" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Archivo+Black|Roboto" }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.9/js/uikit.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.9/js/uikit-icons.min.js" }
    ]
  },
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
    extend (config, { isDev, isClient }) {
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

