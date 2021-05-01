<template>
  <header class="w-full sticky z-50 top-0 right-0 left-0 bg-white shadow-lg">
    <div class="max-w-screen-xl w-full px-10 mx-auto">
      <div class="flex items-center justify-between h-16">
        <!-- left -->
        <div class="flex items-center max-w-500 w-full">
          <a href="#" class="flex w-10 h-10 items-center">
            <img src="@/assets/img/logo.png" alt="" />
          </a>
          <div class="w-14"></div>
          <div class="w-full relative">
            <input
              type="text"
              placeholder="Search"
              class="bg-gray-50 rounded-sm text-base pl-4 py-2 text-gray-900 outline-none w-full"
            />
            <button type="submit">
              <i class="fas fa-search absolute right-0 top-0 mt-3 mr-2"></i>
            </button>
          </div>
        </div>
        <!-- right -->
        <div class="flex items-center relative">
          <div class="flex items-center">
            <a
              href="#"
              class="xl:flex items-center hover:rounded-lg hover:bg-gray-100 hidden 2xl:block"
            >
              <div class="flex p-1 items-center justify-center">
                <img
                  src="@/assets/img/user.png"
                  class="bg-gray-900 rounded-3xl w-10 h-10 i"
                  alt=""
                />
              </div>
              <span class="text-sm mx-1">Phạm Quang Tâm</span>
            </a>
            <div class="w-2 mx-2 mb-1 text-gray-400">|</div>
            <button
              href="#"
              class="text-sm py-2.5 px-12 rounded-lg bg-blue-300 hover:bg-blue-400 inline-block"
            >
              Đăng bài
            </button>
            <div class="w-2 mx-2 mb-1 text-gray-400">|</div>
          </div>
          <div class="flex">
            <div
              class="flex w-10 h-10 mr-2 bg-gray-100 rounded-3xl items-center justify-center cursor-pointer hover:bg-gray-200"
            >
              <div class="text-2xl">
                <span
                  class="iconify"
                  data-icon="mdi:facebook-messenger"
                  data-inline="false"
                ></span>
              </div>
            </div>

            <div
              class="relative flex w-10 h-10 mr-2 bg-gray-100 rounded-3xl items-center justify-center cursor-pointer hover:bg-gray-200"
            >
              <div class="text-2xl" @click="notification = !notification">
                <span
                  class="iconify"
                  data-icon="mdi:bell"
                  data-inline="false"
                ></span>
              </div>
              <div
                v-if="notification"
                class="absolute top-12 -right-5 bg-white w-96"
              >
                <div class="bg-indigo-900 text-center py-4 lg:px-4 rounded-sm">
                  <div
                    class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                  >
                    <span
                      class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
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
              class="relative flex w-10 h-10 mr-2 bg-gray-100 rounded-3xl items-center justify-center cursor-pointer hover:bg-gray-200"
            >
              <div class="text-xl" @click="caret = !caret">
                <span
                  class="iconify"
                  data-icon="bi:caret-down-fill"
                  data-inline="false"
                ></span>
              </div>
              <div
                v-if="caret"
                class="absolute top-10 rounded-sm right-0 w-64 bg-white"
              >
                <!-- This is an example component -->
                <div class="my-0">
                  <div class="bg-white rounded overflow-hidden shadow-lg">
                    <div class="text-center p-6 border-b">
                      <img
                        class="h-24 w-24 rounded-full mx-auto"
                        src="https://randomuser.me/api/portraits/men/24.jpg"
                        alt="Randy Robertson"
                      />
                      <p class="pt-2 text-lg font-semibold">Randy Robertson</p>
                    </div>

                    <div class="">
                      <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p
                          class="text-sm font-medium text-gray-800 leading-none"
                        >
                          Product updates
                        </p>
                      </a>
                      <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p
                          class="text-sm font-medium text-gray-800 leading-none"
                        >
                          Status updates
                        </p>
                      </a>
                      <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p
                          class="text-sm font-medium text-gray-800 leading-none"
                        >
                          Support FAQ
                        </p>
                      </a>
                      <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                        <p
                          class="text-sm font-medium text-gray-800 leading-none"
                        >
                          Logout
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
  </header>
</template>

<script>
export default {
  data() {
    return {
      notification: false,
      caret: false,
    };
  },
};
</script>

<style>
</style>