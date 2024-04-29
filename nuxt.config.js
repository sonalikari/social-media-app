import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',

  head: {
    titleTemplate: '%s - my-social-media-app',
    title: 'my-social-media-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  layouts: {
    default: '~/layouts/MainLayout.vue',
    auth: '~/layouts/AuthLayout.vue',
  },

  build: {},

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'http://116.202.210.102:5000/',
  },
}
