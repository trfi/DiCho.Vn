import Vue from 'vue'
const EventBus = new Vue()
Vue.prototype.$eventBus = EventBus

export default (_, inject) => {
  inject('eventBus', EventBus)
}
