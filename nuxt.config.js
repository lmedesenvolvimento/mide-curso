const webpack = require('webpack')

const router = {
  middleware: 'before-route-change',
  mode: 'hash'
}

switch (process.env.DEPLOY_ENV) {
  case 'GH_PAGES':
    router.base = '/mide-curso/'
    break
  case 'MEC':
    router.base = './'
    break
  default:
    router.base = ''
}

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'http://cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css'
      }
    ],
    script: [
      {
        src:
          'https://cdn.jsdelivr.net/npm/@labtime/avamec-api-bridge-cliente@latest/dist/bridge-rest-api.bundle.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'plyr/dist/plyr.css',
    '@fancyapps/fancybox/dist/jquery.fancybox.css',
    '~assets/styles/_app.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/components.js',
    '~plugins/vuex-persistedstate.js',
    '~plugins/plyr.js',
    '~plugins/fancybox.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit'
  ],
  router,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Buefy module configuration
   ** See https://github.com/buefy/nuxt-buefy
   */
  buefy: {
    css: false
  },
  /*
   ** markdownit module configuration
   ** See https://www.npmjs.com/package/@nuxtjs/markdownit
   */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },
  /*
   ** Globals Styles
   */
  styleResources: {
    scss: [
      '~assets/styles/globals/_functions.scss',
      '~assets/styles/globals/_variables.scss',
      '~assets/styles/globals/_mixins.scss'
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery', 'fancybox'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
