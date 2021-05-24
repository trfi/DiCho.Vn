<template>
  <div class="mb-4">
    <div class="max-w-screen-xl lg:m-auto lg:px-10">
      <div
        class="uk-position-relative uk-visible-toggle uk-light bg-white"
        tabindex="-1"
        uk-slider
      >
        <ul
          class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid"
          style="height: 150px; padding: 0 120px; padding-top: 20px"
        >
          <template v-for="(category, index) in categories">
            <ShowCate :key="index" :category="category"></ShowCate>
          </template>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          style="color: red"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          style="color: red"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import queryCategories from '@/apollo/queries/categories'

export default {
  apollo: {
    categories: {
      prefetch: true,
      query: queryCategories,
    },
  },
  components: {
    ShowCate: () => import('@/components/Main/Category/ShowCate.vue'),
  },
}
</script>

<style lang="scss" scoped></style>
