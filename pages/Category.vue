<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <Card-Category color="dark" />
    </div>
  </div>
</template>
<script>
import CardCategory from '@/components/Cards/CardCategory.vue'

export default {
  //  apollo: {
  //     Categorys: {

  //     }
  //  },
  components: {
    CardCategory,
  },
}
</script>
