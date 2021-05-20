<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <Card-User color="dark" />
    </div>
  </div>
</template>
<script>
import CardUser from '@/components/Cards/CardUser.vue'

export default {
  //  apollo: {
  //     users: {

  //     }
  //  },
  components: {
    CardUser,
  },
}
</script>
