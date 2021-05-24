<template>
  <div>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="absolute top-0 w-full h-full x bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg2}');`"
          style="background-color: rgba(30, 41, 59)"
        ></div>
        <Nuxt />
        <FooterSmall absolute />
      </section>
    </main>
  </div>
</template>
<script>
import FooterSmall from '@/components/Footers/FooterSmall.vue'

import registerBg2 from '@/assets/img/register_bg_2.png'

export default {
  components: {
    FooterSmall,
  },
  data() {
    return {
      registerBg2,
    }
  },
}
</script>
