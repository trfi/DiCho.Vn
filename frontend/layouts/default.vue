<template>
  <div class="Home bg-gray-200" style="height: 2000px">
    <Header></Header>

    <Nuxt />

    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Main/Header.vue'),
    // Footer: () => import('@/components/Main/Footer.vue'),
  },
}
</script>

<style>
body {
  color: #333;
}
a:hover {
  text-decoration: none;
}
</style>
