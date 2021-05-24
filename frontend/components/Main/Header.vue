<template>
  <header class="z-50 sticky top-0 bg-yellow-400">
    <div class="max-w-screen-xl px-10 mx-auto">
      <div class="flex items-center md:justify-between">
        <a href="#" class="p-2 mx-auto md:m-0 md:pl-0">
          <img
            class="object-contain w-24 md:w-28"
            src="@/assets/img/logo.png"
            alt=""
          />
        </a>
        <ul class="p-0 flex list-none items-center">
          <li class="hidden md:inline-block md:p-4 md:hover:opacity-50">
            <a href="" class="flex text-2xl items-center">
              <i class="iconify" data-icon="mdi:home-search-outline"></i>
              <span class="md:block ml-2 whitespace-nowrap text-lg"
                >Trang chủ</span
              >
            </a>
          </li>
          <li class="hidden md:inline-block md:p-4 md:hover:opacity-50">
            <a href="" class="flex text-2xl items-center text-blue-400">
              <i
                class="iconify"
                data-icon="emojione-v1:grinning-face-with-smiling-eyes"
              ></i>
              <span class="md:block ml-2 whitespace-nowrap text-lg text-black"
                >Tôi bán</span
              >
            </a>
          </li>
          <li class="md:inline-block md:p-4 md:hover:opacity-50">
            <a href="" class="flex text-2xl items-center">
              <i class="iconify" data-icon="flat-ui:chat"></i>
              <span class="md:block ml-2 whitespace-nowrap text-lg hidden"
                >Chat</span
              >
            </a>
          </li>
        </ul>
      </div>

      <div class="flex md:justify-between flex-row items-center pb-2">
        <div class="flex items-center w-full md:w-7/12 relative">
          <button class="absolute right-2 text-2xl">
            <i class="iconify" data-icon="flat-color-icons:search"></i>
          </button>
          <input
            type="text"
            class="w-full p-1 text-sm md:text-lg rounded-md pl-4 outline-none"
            placeholder="Tìm kiếm trên trợ tốt"
          />
        </div>
        <div class="flex items-center w-0 md:w-36">
          <a href="/login" class="flex items-center text-4xl">
            <i
              class="iconify hidden md:block"
              data-icon="mdi:account-circle-outline"
            ></i>
            <span class="ml-2 text-lg whitespace-nowrap hidden md:block"
              >Đăng nhập</span
            >
          </a>
        </div>
        <div class="flex items-center w-0 md:w-40">
          <div class="items-center hidden md:block">
            <a
              href=""
              class="flex text-2xl float-right h-10 items-center px-4 rounded-lg bg-yellow-500 hover:bg-yellow-600"
            >
              <i
                class="iconify"
                data-icon="mdi:checkbox-multiple-marked-outline"
              ></i>
              <span class="ml-2 text-lg uppercase whitespace-nowrap"
                >Đăng tin</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    notification() {},
  },
}
</script>
<style scoped>
a:hover {
  text-decoration: none;
  color: initial;
}
.show {
  position: absolute;
  top: 40px;
  right: 20px;
  background-color: azure;
  width: 400px;
  height: 150px;
  z-index: 10;
}
</style>
