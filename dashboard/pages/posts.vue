<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <Card-Post color="dark" />
    </div>
  </div>
</template>
<script>
import CardPost from '@/components/Cards/CardPost.vue'

export default {
  //  apollo: {
  //     users: {

  //     }
  //  },
  components: {
    CardPost,
  },
}
</script>
