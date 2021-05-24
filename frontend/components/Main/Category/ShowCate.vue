<template>
  <li style="width: 120px; height: 84px">
    <a
      :href="'/category/' + category.id"
      class="uk-panel flex flex-col"
      style="width: 120px; height: 120px"
    >
      <img
        :src="category.path"
        alt=""
        class="object-cover rounded-md"
        style="width: 80px; height: 80px; margin: 0 auto"
      />
      <span class="text-center text-sm xl:text-sm text-black">{{
        category.title
      }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style></style>
