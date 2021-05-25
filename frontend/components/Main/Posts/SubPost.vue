<template>
  <div class="p-1 sm:p-2 border-r border-solid border-gray-100 hover:shadow-md">
    <!-- thumbnail -->
    <NuxtLink :to="`post/${post.id}`">
      <div class="w-52 cursor-pointer sm:w-32 lg:h-32 lg:w-52 mx-auto">
        <img
          :src="`https://dicho.s3-ap-southeast-1.amazonaws.com/pi/${post.thumbnail}.jpg`"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <!-- info -->
      <div class="mt-4 justify-items-start relative pl-3">
        <!-- text -->
        <div class="text-sm h-10">
          <span class="">{{ post.title }} </span>
        </div>
        <!-- rating-review -->
        <div class="flex items-center py-2">
          <div class="flex text-sm text-yellow-300">
            <i class="iconify" data-icon="ic:round-star-rate" data-inline="false"></i>
            <i class="iconify" data-icon="ic:round-star-rate" data-inline="false"></i>
            <i class="iconify" data-icon="ic:round-star-rate" data-inline="false"></i>
            <i class="iconify" data-icon="ic:round-star-rate" data-inline="false"></i>
            <i class="iconify" data-icon="ic:round-star-rate" data-inline="false"></i>
          </div>
          <div class="text-xs opacity-50">( 4 )</div>
        </div>
        <!-- Price -->
        <div class="flex text-center">
          <div class="text-base text-red-500">{{ formatMoney }} ₫</div>
          <div class="ml-2 text-xs rounded-base bg-red-500 pt-1 px-1 text-gray-200">
            NEW
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  mixins: [],
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    formatMoney() {
      return new Intl.NumberFormat('vi-VN', {
        maximumSignificantDigits: 3,
      }).format(this.post.price)
    },
  },
}
</script>

<style></style>
