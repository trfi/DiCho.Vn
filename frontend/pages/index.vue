<template>
  <main>
    <Banner></Banner>
    <Category></Category>
    <PostNew></PostNew>
    <Common></Common>
  </main>
</template>

<script lang="ts">
export default {
  components: {
    Banner: () => import('@/components/Main/Banner.vue'),
    Category: () => import('@/components/Main/Category/Index.vue'),
    PostNew: () => import('@/components/Main/Posts/Index.vue'),
    // Common: () => import('@/components/Main/Common.vue'),
  },
}
</script>

<style></style>
