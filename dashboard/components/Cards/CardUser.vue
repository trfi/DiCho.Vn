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
            Danh sách User
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
              class="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Hình ảnh
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Tên
            </th>
            <th
              class="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Tên người dùng
            </th>
            <th
              class="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Số điện thoại
            </th>
            <th
              class="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Email
            </th>
            <th
              class="pr-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Vai trò
            </th>
            <th
              class="pr-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Lượt thích
            </th>
            <th
              class="pr-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Bình luận
            </th>
            <th
              class="pr-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Người theo dõi
            </th>
            <th
              class="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Đang theo dõi
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
          <tr v-for="(user, index) in users" :key="user.id">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ index + 1 }}
            </td>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2 text-left flex items-center"
            >
              <img
                :src="user.avatar"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.name }}
            </td>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.username }}
            </td>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.phone }}
            </td>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.email }}
            </td>
            <td
              class="border-t-0 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.role }}
            </td>
            <td
              class="border-t-0 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.likes.length }}
            </td>
            <td
              class="border-t-0 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ user.comments.length }}
            </td>
            <td
              class="border-t-0 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              <i class="fas fa-circle text-orange-500 mr-2"></i>
              {{ user.followerCount }}
            </td>
            <td
              class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              <i class="fas fa-circle text-orange-500 mr-2"></i>
              {{ user.followingCount }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              <div class="w-32 h-12 flex items-center justify-between">
                <button class="text-gray-300">
                  <span
                    class="iconify text-3xl"
                    data-icon="carbon:add"
                    data-inline="false"
                  ></span>
                </button>
                <button class="text-gray-300" @click="editUser(user)">
                  <span
                    class="iconify text-2xl"
                    data-icon="clarity:edit-line"
                    data-inline="false"
                  ></span>
                </button>
                <button class="text-gray-300" @click="deleteUser(user, index)">
                  <span
                    class="iconify text-2xl"
                    data-icon="feather:trash-2"
                    data-inline="false"
                  ></span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <User-Modal></User-Modal>
    <Del-User :users="users"></Del-User>
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

import queryUser from '@/apollo/queries/users'

export default {
  apollo: {
    users: {
      prefetch: true,
      query: queryUser,
      update: (data) => data.users.users,
    },
  },
  components: {
    UserModal: () => import('@/components/Modals/UserModal'),
    DelUser: () => import('@/components/Modals/DelUser'),
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
      users: [],
      dropdown: false,
    }
  },
  mounted() {},
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
  },
}
</script>
