<template>
  <header class="fixed z-50 border-b w-full bg-white border-gray-200">
    <div class="max-w-screen-2xl w-full px-10 mx-auto">
      <div class="flex items-center justify-between h-16">
        <!-- left -->
        <div class="flex items-center">
          <nuxt-link to="/">
            <img src="~/assets/images/logo.png" class="w-24" alt="" />
          </nuxt-link>
          <!-- Input tìm kiếm -->
          <SearchBar />
        </div>
        <!-- right -->
        <div class="flex items-center relative">
          <div class="flex items-center">
            <NuxtLink
              :to="`/profile/${idUser}`"
              class="
                hidden
                whitespace-nowrap
                md:flex
                items-center
                hover:rounded-lg
                hover:bg-gray-100
              "
            >
              <div class="flex w-10 p-1 items-center justify-center">
                <img
                  src="~/assets/images/user.png"
                  class="bg-gray-900 rounded-3xl w-full"
                  alt=""
                />
              </div>
              <span class="text-sm mx-1">{{ nameUser }}</span>
            </NuxtLink>
            <div class="w-2 mx-2 mb-1 text-gray-400 hidden md:block">|</div>
            <button
              class="
                whitespace-nowrap
                text-sm
                py-1.5
                px-8
                md:py-2
                md:px-12
                rounded-lg
                text-white
                bg-blue-500
                hover:bg-blue-400
                inline-block
              "
              @click="toggleModal"
            >
              Đăng bài
            </button>
            <div class="w-1 mx-1 md:w-2 md:mx-2 mb-1 text-gray-400">|</div>
          </div>
          <div class="flex">
            <div
              class="
                flex
                w-8
                h-8
                md:w-10
                md:h-10
                mr-2
                bg-gray-100
                rounded-3xl
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-200
              "
            >
              <div class="text-xl md:text-2xl">
                <span
                  class="iconify"
                  data-icon="mdi:facebook-messenger"
                  data-inline="false"
                ></span>
              </div>
            </div>

            <div
              class="
                relative
                flex
                w-8
                h-8
                md:w-10
                md:h-10
                mr-2
                bg-gray-100
                rounded-3xl
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-200
              "
            >
              <div class="text-xl md:text-2xl" @click="notification = !notification">
                <span class="iconify" data-icon="mdi:bell" data-inline="false"></span>
              </div>
              <div v-if="notification" class="absolute top-12 -right-5 bg-white w-96">
                <div class="bg-indigo-900 text-center py-4 lg:px-4 rounded-sm">
                  <div
                    class="
                      p-2
                      bg-indigo-800
                      items-center
                      text-indigo-100
                      leading-none
                      lg:rounded-full
                      flex
                      lg:inline-flex
                    "
                    role="alert"
                  >
                    <span
                      class="
                        flex
                        rounded-full
                        bg-indigo-500
                        uppercase
                        px-2
                        py-1
                        text-xs
                        font-bold
                        mr-3
                      "
                      >New</span
                    >
                    <span class="font-semibold mr-2 text-left flex-auto"
                      >Get the coolest t-shirts from our brand new store</span
                    >
                    <svg
                      class="fill-current opacity-75 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="
                relative
                flex
                w-8
                h-8
                md:w-10
                md:h-10
                bg-gray-100
                rounded-3xl
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-200
              "
            >
              <div class="text-xl" @click="caret = !caret">
                <span
                  class="iconify"
                  data-icon="bi:caret-down-fill"
                  data-inline="false"
                ></span>
              </div>
              <div v-if="caret" class="absolute top-10 rounded-sm right-0 w-64 bg-white">
                <!-- This is an example component -->
                <div class="my-0">
                  <div class="bg-white rounded overflow-hidden shadow-lg">
                    <div class="text-center p-6 border-b">
                      <img
                        class="h-24 w-24 rounded-full mx-auto"
                        src="https://randomuser.me/api/portraits/men/24.jpg"
                        alt="User Avatar"
                      />
                      <p class="pt-2 text-lg font-semibold">{{ nameUser }}</p>
                    </div>

                    <div class="">
                      <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p class="text-sm font-medium text-gray-800 leading-none">
                          Tài khoản
                        </p>
                      </a>
                      <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p class="text-sm font-medium text-gray-800 leading-none">
                          Cài đặt
                        </p>
                      </a>
                      <a
                        href=""
                        class="px-4 py-2 pb-4 hover:bg-gray-100 flex"
                        @click.prevent="logout"
                      >
                        <p class="text-sm font-medium text-gray-800 leading-none">
                          Đăng xuất
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only><ModalPost /></client-only>
  </header>
</template>

<script>
export default {
  data() {
    return {
      notification: false,
      caret: false,
      nameUser: '',
      idUser: '',
    }
  },
  mounted() {
    this.nameUser = localStorage.getItem('userName')
    this.idUser = localStorage.getItem('userId')
  },
  // computed: {
  //   nameUser() {
  //     return localStorage.getItem('userName')
  //   },
  // },
  methods: {
    async logout() {
      await this.$apolloHelpers.onLogout()
      delete this.$root.$data.user
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      this.$router.push('/login')
    },
    toggleModal() {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    },
  },
}
</script>

<style></style>
