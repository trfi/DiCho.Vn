<template>
  <div class="w-full h-full mx-auto xl:w-3/4">
    <div class="w-full flex items-center">
      <div
        class="
          flex
          items-center
          p-1.5
          border border-gray-900 border-solid
          rounded-md
          mr-2
        "
      >
        <span class="iconify" data-icon="clarity:filter-line" data-inline="false"></span>
        <span class="ml-1">Lọc</span>
      </div>
      <div
        class="
          flex
          items-center
          p-1.5
          border border-gray-900 border-solid
          rounded-md
          mr-2
        "
      >
        <span
          class="iconify"
          data-icon="clarity:map-marker-line"
          data-inline="false"
        ></span>
        <span class="mx-1">Toàn quốc</span>
        <span
          class="iconify text-xs"
          data-icon="bx:bxs-down-arrow"
          data-inline="false"
        ></span>
      </div>
      <div class="flex items-center p-1.5 border border-gray-900 border-solid rounded-md">
        <span class="mx-1">Việc làm</span>
        <span
          class="iconify text-xs"
          data-icon="bx:bxs-down-arrow"
          data-inline="false"
        ></span>
      </div>
    </div>
    <div class="w-full flex items-center justify-between pt-4">
      <ol class="text-left whitespace-nowrap flex">
        <li class="mr-2 inline-flex items-center text-blue-400 md:text-base text-xs">
          <a href="">
            <span class="mr-2">Chợ tốt </span>
          </a>
          <span
            class="iconify text-xs"
            data-icon="si-glyph:two-arrow-right"
            data-inline="false"
          ></span>
        </li>
        <li class="mr-2 inline-flex items-center text-blue-400 md:text-base text-xs">
          <a href="">
            <span class="mr-2">Toàn quốc </span>
          </a>
          <span
            class="iconify text-xs"
            data-icon="si-glyph:two-arrow-right"
            data-inline="false"
          ></span>
        </li>
        <li class="inline-flex items-center md:text-base text-xs">
          <a href="">
            <span>Việc làm </span>
          </a>
        </li>
      </ol>
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
    <div class="py-8 flex flex-col p-0">
      <template v-for="(cate, index) in category.posts">
        <Sub-Cate :key="index" :cate="cate" />
      </template>
      <div class="flex items-center justify-center pt-6 flex-wrap">
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
// import SubCate from '~/components/Category/SubCate.vue'
import cateQuery from '~/apollo/queries/category'

export default {
  name: 'CategoryId',
  components: {},
  layout: 'client-sidebar',
  data() {
    return {}
  },
  apollo: {
    category: {
      prefetch: true,
      query: cateQuery,
      variables() {
        return { id: this.$route.params.id }
      },
    },
    // update: (data) => data.category,
  },
}
</script>

<style></style>
