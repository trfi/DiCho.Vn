<template>
  <div class="category-shadow py-4 border-solid border-b border-gray-400">
    <div class="hover:no-underline">
      <div class="flex flex-row items-center justify-start">
        <a href class="relative w-64 h-36">
          <img
            :src="`https://dicho.s3-ap-southeast-1.amazonaws.com/pi/${cate.thumbnail}.jpg`"
            alt=""
            class="w-full h-full object-cover rounded-md"
          />
        </a>
        <div class="p-4 relative">
          <a href="" class="hover:no-underline">
            <h3 class="md:text-xl text-black">
              <span>{{ cate.title }}</span>
            </h3>
            <div class="md:text-md text-gray-500">
              {{ cate.category.title }}
            </div>
            <div class="text-md text-red-500">
              <span>{{ cate.price }}</span>
            </div>
          </a>
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center">
              <div class="flex items-center"></div>
              <div class="ml-2">
                <span></span>
              </div>
              <div class="ml-2">
                <span>{{ cate.regionName }}</span>
              </div>
            </div>
            <div>
              <button>
                <span
                  class="iconify text-red-400"
                  data-icon="akar-icons:heart"
                  data-inline="false"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cate: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
