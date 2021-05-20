<template>
  <div v-if="showModal" class="fixed w-full h-full top-0 left-0 z-50">
    <div
      id="app"
      class="antialiased min-h-screen w-full h-full bg-gray-900 pt-8 pb-12"
      style="background-color: rgba(0, 0, 0, 0.3)"
    >
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <!-- Modal container -->
        <div v-if="showModal" class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Card container -->
          <form
            class="px-8 py-6 space-y-6 overflow-hidden bg-white rounded-md shadow-lg transition duration-300 ease-in-out transform"
          >
            <!-- Card heading -->
            <div class="flex justify-between">
              <div class="space-y-1">
                <h2 class="font-bold text-gray-900">Chỉnh sửa người dùng</h2>
              </div>
              <div>
                <button
                  type="button"
                  class="flex flex-col items-center text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out"
                  @click="toggleModal()"
                >
                  <svg
                    class="w-7 h-7"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span
                    class="text-xs font-semibold text-center leading-3 uppercase"
                    >Thoát</span
                  >
                </button>
              </div>
            </div>
            <!-- Flow options -->
            <div class="space-y-6">
              <div class="space-y-4">
                <div class="flex items-center">
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Tên</span
                    >
                    <input
                      id="name"
                      :value="user.name"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                  <label class="flex-1 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Tên người dùng</span
                    >
                    <input
                      id="username"
                      :value="user.username"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                </div>
                <div class="flex items-center">
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Số điện thoại</span
                    >
                    <input
                      id="phone"
                      :value="user.phone"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                  <label class="flex-1 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Email</span
                    >
                    <input
                      id="email"
                      :value="user.email"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                </div>
                <div class="flex items-center">
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Vai trò</span
                    >
                    <select id="role" name="" class="text-gray-900">
                      <option value="ADMIN">ADMIN</option>
                      <option value="USER">USER</option>
                      <option value="MODERATOR">MODERATOR</option>
                    </select>
                  </label>
                  <label class="flex-1 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Địa chỉ</span
                    >
                    <input
                      id="address"
                      :value="user.address"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                </div>
              </div>
              <div class="max-w-md space-y-3 py-4">
                <transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div v-show="advancedSettings" class="space-y-4">
                    <fieldset class="space-y-2">
                      <legend class="text-sm leading-5 text-gray-600">
                        Select how this flow should be shown.
                      </legend>

                      <div class="grid sm:grid-cols-3 gap-3">
                        <label
                          v-for="option in flowType.options"
                          :key="option.id"
                          :class="{
                            'bg-gray-50 border-indigo-500 text-gray-600':
                              flowType.selected === option.name,
                          }"
                          class="relative flex flex-col items-center justify-center px-4 py-3 border border-gray-200 rounded text-center text-gray-500 bg-white hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            class="absolute inset-0 w-full h-full form-checkbox appearance-none invisible"
                            @change="updateOption(option.name)"
                          />
                          <span class="block">{{ option.name }}</span>
                          <span
                            v-if="option.advanced"
                            class="px-3 py-1 rounded-full text-xs font-medium leading-4 bg-gray-50"
                            >Advanced</span
                          >
                        </label>
                      </div>
                    </fieldset>
                    <fieldset
                      v-if="flowType.selected === 'URL'"
                      class="space-y-4"
                    >
                      <legend class="sr-only">URL Options</legend>
                      <div
                        class="space-y-3 sm:flex sm:items-center sm:space-x-3 sm:space-y-0"
                      >
                        <label class="block">
                          <span class="sr-only">Starts with</span>
                          <select
                            class="w-full form-select text-gray-900 rounded sm:text-sm sm:leading-5"
                          >
                            <option>Starts with</option>
                          </select>
                        </label>
                        <label class="block sm:flex-1">
                          <span class="sr-only">Prefix</span>
                          <input
                            type="text"
                            placeholder="/"
                            class="w-full form-input rounded sm:text-sm sm:leading-5"
                          />
                        </label>
                      </div>
                      <button
                        type="button"
                        class="block text-sm leading-5 text-indigo-500 hover:text-indigo-600 transition duration-150 ease-in-out"
                      >
                        + Add another
                      </button>
                      <div class="px-6 py-5 rounded-md bg-gray-100">
                        <p class="text-sm leading-5 text-center text-gray-600">
                          This flow will be shown only on the specific page or
                          pages you provide.
                        </p>
                      </div>
                    </fieldset>
                  </div>
                </transition>
              </div>
            </div>
            <div
              class="max-w-md grid grid-flow-row sm:grid-cols-2 gap-3 sm:gap-6"
            >
              <button
                type="button"
                class="px-4 py-3 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-600 transition duration-300 ease-in-out"
                @click="toggleModal()"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                class="px-4 py-3 border border-transparent rounded text-white bg-indigo-600 hover:bg-indigo-500 transition duration-300 ease-in-out"
                @click="updateUser(user.id)"
              >
                Lưu
              </button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import updateUser from '@/apollo/mutations/updateUser'
export default {
  data() {
    return {
      showModal: false,
      user: {},
      users: [],
      advancedSettings: false,
      flowType: {
        selected: '',
        options: [
          {
            id: 1,
            name: 'Auto',
            advanced: false,
          },
          {
            id: 2,
            name: 'URL',
            advanced: false,
          },
          {
            id: 3,
            name: 'Manual',
            advanced: true,
          },
        ],
      },
    }
  },
  created() {
    this.$eventBus.$on('click', (modal, user) => {
      this.showModal = !modal
      this.user = user
      console.log(user)
      console.log('showModal', this.showModal)
      console.log('modal', modal)
    })
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    async updateUser(id) {
      const name = document.querySelector('#name').value
      const username = document.querySelector('#username').value
      const phone = document.querySelector('#phone').value
      const email = document.querySelector('#email').value
      const role = document.querySelector('#role').value
      const address = document.querySelector('#address').value
      const dataUser = {
        name,
        username,
        phone,
        email,
        role,
        address,
      }
      try {
        console.log(id)
        console.log(this.$apollo)
        console.log(dataUser)
        const res = await this.$apollo
          .mutate({
            mutation: updateUser,
            variables: { id, data: dataUser },
          })
          .then(({ data }) => console.log(data))
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      this.showModal = !this.showModal
    },
  },
}
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}
</style>
