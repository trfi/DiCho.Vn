<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Danh sách thể loại
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Thứ tự
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Tiêu đề
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Slug
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Danh mục con
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Loại danh mục
            </th>

            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in categories" :key="category.id">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ index + 1 }}
            </td>
            <Show-Cate :category="category"></Show-Cate>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ category.slug }}
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
              <select id="select" class="h-9 w-full rounded-md text-gray-900">
                <option
                  v-for="(cate, i) in category.types"
                  :key="cate[i]"
                  class="text-gray-900"
                  :value="cate"
                >
                  {{ cate }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <User-Modal></User-Modal>
    <Del-User></Del-User>
  </div>
</template>
<script>
import bootstrap from '@/assets/img/bootstrap.jpg'
import angular from '@/assets/img/angular.jpg'
import sketch from '@/assets/img/sketch.jpg'
import react from '@/assets/img/react.jpg'
import vue from '@/assets/img/react.jpg'

import team1 from '@/assets/img/team-1-800x800.jpg'
import team2 from '@/assets/img/team-2-800x800.jpg'
import team3 from '@/assets/img/team-3-800x800.jpg'
import team4 from '@/assets/img/team-4-470x470.png'

import queryCategories from '@/apollo/queries/categories'

export default {
  apollo: {
    categories: {
      prefetch: true,
      query: queryCategories,
    },
  },
  components: {
    UserModal: () => import('@/components/Modals/UserModal'),
    DelUser: () => import('@/components/Modals/DelUser'),
    ShowCate: () => import('@/components/ShowCate'),
  },
  props: {
    color: {
      default: 'light',
      validator(value) {
        // The value must match one of these strings
        return ['light', 'dark'].includes(value)
      },
    },
  },
  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      modal: false,
      team2,
      team3,
      team4,
      dropdown: false,
      show: false,
    }
  },

  methods: {
    clickCallback(pageNum) {
      console.log(pageNum)
    },
    editUser(user) {
      this.$eventBus.$emit('click', this.modal, user)
    },
    deleteUser(user, index) {
      this.$eventBus.$emit('delUser', this.modal, user, index)
    },
    showIndex(cate) {
      console.log(cate)
      console.log(this.show)
      this.$eventBus.$emit('showCate', cate, this.show)
    },
  },
}
</script>
