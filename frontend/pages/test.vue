<template>
  <div>
    <h1>123123123</h1>
    <div class="max-w-xl">
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slideshow="ratio: false"
      >
        <ul
          class="uk-slideshow-items"
          uk-height-viewport="offset-top: true; offset-bottom: 30"
        >
          <li>
            <img src="@/assets/img/banner1.png" alt="" uk-cover />
          </li>
          <li>
            <img src="@/assets/img/banner2.jpg" alt="" uk-cover />
          </li>
          <li>
            <img src="@/assets/img/banner3.jpg" alt="" uk-cover />
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
export default {}
</script>

<style></style>
