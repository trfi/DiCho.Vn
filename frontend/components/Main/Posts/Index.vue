<template>
  <div class="max-w-screen-xl xl:m-auto lg:px-10">
    <div class="block">
      <div class="bg-white">
        <p class="text-base font-semibold p-3">Tin đăng mới</p>
        <!-- Content -->
        <div
          class="grid grid-cols-2 flex-wrap sm:grid-cols-4 xl:grid-cols-5 border-t border-gray-100 cursor-pointer"
        >
          <template v-for="(post, index) in posts">
            <Sub-Post :key="index" :post="post"></Sub-Post>
          </template>
        </div>
        <!-- see more -->
        <!-- <div class="flex items-center justify-center pt-8 pb-8">
          <button
            class="text-blue-800 text-xs rounded-md border hover:bg-blue-700 hover:text-gray-100 border-blue-900 py-2 px-20 font-bold"
          >
            Xem Thêm
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import queryPosts from '@/apollo/queries/posts'

export default {
  apollo: {
    posts: {
      prefetch: true,
      query: queryPosts,
    },
  },
  components: {
    SubPost: () => import('@/components/Main/Posts/SubPost.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
