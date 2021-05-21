<template>
  <div class="flex h-screen bg-green-300">
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center bg-blue-300">
        <Header />
      </header>
      <div class="flex h-full">
        <main
          class="flex w-full h-full bg-white overflow-x-hidden overflow-y-hidden mb-14"
        >
          <div class="flex h-full w-full mx-auto px-6 py-8">
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
