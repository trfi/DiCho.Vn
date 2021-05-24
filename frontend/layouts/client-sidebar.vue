<template>
  <div class="flex h-full">
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <div class="flex h-full">
        <nav class="flex w-72 h-full fixed bg-pink-500">
          <SideBar class="w-full mt-16" />
        </nav>
        <div class="w-72"></div>
        <main
          class="
            mt-16
            flex flex-col
            w-full
            h-full
            bg-white
            overflow-x-hidden overflow-y-auto
          "
        >
          <div class="flex justify-center w-full mb-6 px-6 py-8">
            <client-only><Nuxt /></client-only>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}
</style>
