export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
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
      { rel: 'stylesheet', href: '/uikit-core.min.css' },
    ],
    script: [{ type: 'module', src: '/uikit.min.js', ssr: false }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/icon-design.js', '~/plugins/eventbus.js'],

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
        wsEndpoint: 'ws://localhost:4000/graphql',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  privateRuntimeConfig: {},
  publicRuntimeConfig: {
    S3AccessKey: process.env.S3_ACCESS_KEY_ID || 'accessKey test',
    S3SecretKey: process.env.S3_SECRET_ACCESS_KEY,
    S3BucketName: process.env.S3_BUCKET_NAME,
    AWSUrl: process.env.AWS_URL,
  },
}
