<template>
  <div class="mb-16">
    <div
      v-for="post in posts"
      :key="post.id"
      class="category-shadow py-4 border-solid border-b border-gray-400"
    >
      <div class="hover:no-underline">
        <div class="flex flex-row items-center justify-between">
          <div class="w-96 h-36 flex mx-5">
            <NuxtLink
              :to="`${post.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')}/${post.id}`"
            >
              <img
                :src="`https://dicho.s3-ap-southeast-1.amazonaws.com/pi/${post.thumbnail}.jpg`"
                alt=""
                class="w-full h-full object-cover rounded-md"
              />
            </NuxtLink>
          </div>
          <div class="flex flex-col p-4 w-full">
            <NuxtLink
              class="hover:no-underline"
              :to="`${post.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')}/${post.id}`"
            >
              <h3 class="md:text-xl text-black hover:text-gray-600">
                {{ post.title }}
              </h3>
            </NuxtLink>
            <div class="md:text-md text-gray-500">
              <span>{{ post.category.title }}</span>
            </div>
            <div class="text-md text-red-500">
              <span>{{ post.price }}</span>
            </div>
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center">
                <!-- <div class="flex items-center">
                    <span class="iconify" data-icon="ls:bag" data-inline="false"></span>
                    <span class="ml-2">Công ty</span>
                  </div> -->
                <div class="ml-2">
                  <timeago :since="post.created"></timeago>
                </div>
                <div class="ml-2">
                  <span>{{ post.regionName }}</span>
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
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scopped>
.category-shadow:hover {
  box-shadow: 0 1px 20px 0 rgb(0 0 0 / 30%);
  z-index: 1;
}
</style>
