import Vue from 'vue'
import Iconify from '@iconify/iconify'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'vi-VN', // Default locale
  locales: {
    'vi-VN': require('./vi-VN.json'),
  },
})
Vue.use(Iconify)
