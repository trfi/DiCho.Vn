<template>
  <main class="pt-16">
    <Banner />
    <Category />
    <PostNew />
    <Common />
  </main>
</template>

<script lang="ts">
import Banner from '../components/Main/Banner.vue'
import PostNew from '../components/Main/Posts/Index.vue'
import Category from '../components/Main/Category/index.vue'
import Common from '../components/Main/Common.vue'
export default {
  components: { Banner, Category, PostNew, Common },
  layout: 'home',
}
</script>

<style></style>
