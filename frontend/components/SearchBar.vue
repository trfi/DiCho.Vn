<template>
  <div class="w-64 relative ml-14">
    <input
      v-model="searchInput"
      type="text"
      placeholder="Tìm kiếm"
      class="
        hidden
        lg:block
        bg-gray-100
        rounded-md
        text-base
        pl-4
        py-2
        text-gray-900
        outline-none
        w-full
      "
      @keyup.enter="search"
    />
    <button type="submit" class="absolute -right-1 -top-2 mt-3 mr-2 w-8 h-8">
      <span class="iconify" data-icon="akar-icons:search" data-inline="false"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    search() {
      console.log(this.searchInput)
      this.$router.push(`/search?q=${this.searchInput}`)
    },
  },
}
</script>

<style></style>
