<template>
  <!-- Banner -->
  <div class="h-gray-200 mb-4">
    <div class="max-w-screen-xl lg:px-10 lg:m-auto pt-4">
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-height-medium"
        tabindex="-1"
        uk-slideshow=" animation: push; autoplay: true"
      >
        <ul class="uk-slideshow-items uk-height-medium">
          <li class="uk-height-medium">
            <img
              class="object-cover"
              src="@/assets/img/banner4.jpg"
              alt=""
              uk-cover
            />
          </li>
          <li class="uk-height-medium">
            <img
              class="object-cover"
              src="@/assets/img/banner2.jpg"
              alt=""
              uk-cover
            />
          </li>
          <li class="uk-height-medium">
            <img
              class="object-cover"
              src="@/assets/img/banner3.jpg"
              alt=""
              uk-cover
            />
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style scoped>
.slideshow {
  width: 200px !important;
  height: 200px !important;
}
</style>
