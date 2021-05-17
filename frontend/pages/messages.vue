<template>
  <div class="flex h-screen bg-green-300">
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center bg-yellow-200 p-4">
        <div class="flex">Left</div>
        <div class="flex">Right</div>
      </header>
      <div class="flex h-full">
        <nav class="flex w-72 h-full bg-pink-400">
          <div class="w-full mx-auto px-6 py-8">
            <div
              class="w-full h-full text-gray-900 dark:text-gray-300 text-xl border-4 border-gray-900 border-dashed"
            >
              Sidebar
            </div>
          </div>
        </nav>
        <main class="flex flex-1 bg-white overflow-x-hidden overflow-y-auto">
          <div class="flex w-full mx-auto px-6 py-8">
            <div
              class="flex w-full h-full text-gray-900 dark:text-gray-300 text-xl border-4 border-gray-900 border-dashed"
            >
              <div class="flex flex-1 max-w-xl h-96 mx-auto bg-green-400">
                Post
              </div>
            </div>
          </div>
        </main>
        <nav class="flex w-72 h-full bg-pink-400">
          <div class="w-full mx-auto px-6 py-8">
            <div
              class="w-full h-full text-gray-900 dark:text-gray-300 text-xl border-4 border-gray-900 border-dashed"
            >
              Rightbar
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
}
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
