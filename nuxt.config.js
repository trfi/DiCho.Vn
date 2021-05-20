export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DiCho',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/uikit.min.css' },
    ],
    script: [
      { type: 'module', src: 'uikit.min.js', ssr: false },
      { src: 'https://code.iconify.design/1/1.0.7/iconify.min.js' },
    ],
  },
  // < script src = "https://code.iconify.design/1/1.0.7/iconify.min.js" ></ >
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/styles/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/icon-design.js',
    '~/plugins/eventbus.js',
    { src: '~/plugins/uikit.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
    '@nuxtjs/cloudinary',
    'nuxt-buefy',
  ],

  cloudinary: {
    cloudName: 'dicho',
    useComponent: true,
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000',
        browserHttpEndpoint: 'http://localhost:4000',
        // wsEndpoint: 'ws://localhost:4000',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
