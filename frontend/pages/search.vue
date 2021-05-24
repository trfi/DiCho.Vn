<template>
  <div class="w-full h-full mx-auto xl:w-3/4">
    <div class="w-full flex items-center justify-between pt-4">
      <p class="text-left text-lg">
        Kết quả tìm kiếm cho: <b>{{ $route.query.q }}</b>
      </p>
      <a
        href=""
        class="
          rounded-lg
          p-1.5
          border-blue-400 border-solid border
          hover:bg-blue-300
          hover:no-underline
        "
      >
        <span>Xem tất cả</span>
      </a>
    </div>
    <div class="py-8 max-w-5xl flex flex-col p-0">
      <Posts :posts.sync="posts" />
      <!-- Phan trang -->
      <div class="items-center justify-center pt-6 flex-wrap hidden">
        <a
          href=""
          class="
            rounded-md
            bg-blue
            border border-solid border-gray-800
            p-1.5
            inline
            mr-1.5
          "
        >
          <span class="iconify" data-icon="dashicons:arrow-left-alt2" data-inline="false">
          </span>
        </a>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">1</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">2</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">3</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">4</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">5</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">6</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">7</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">8</span>
          </a>
        </div>
        <div class="inline m-2">
          <a
            href="/toan-quoc/viec-lam?page=1"
            class="
              rounded-md
              bg-blue
              border border-solid
              px-3
              py-1
              border-gray-800
              hover:no-underline
              hover:bg-blue-300
              hover:text-gray-900
            "
          >
            <span class="text-">9</span>
          </a>
        </div>
        <a
          href=""
          class="
            rounded-md
            bg-blue
            border border-solid border-gray-800
            p-1.5
            inline
            ml-1.5
          "
        >
          <span
            class="iconify"
            data-icon="dashicons:arrow-right-alt2"
            data-inline="false"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import searchPost from '~/apollo/queries/searchPost'
export default {
  layout: 'client-sidebar',
  data() {
    return {
      posts: [],
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: searchPost,
      variables() {
        return {
          keyword: this.$route.query.q,
        }
      },
      update: (data) => data.posts,
    },
  },
}
</script>
