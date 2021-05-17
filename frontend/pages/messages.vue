<template>
  <div class="flex h-screen bg-green-300">
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center bg-yellow-200 p-4">
        <div class="flex">Left</div>
        <div class="flex">Right</div>
      </header>
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto px-6 py-8">
          <div
            class="w-full h-96 text-gray-900 dark:text-gray-300 text-xl border-4 border-gray-900 border-dashed"
          >
            Content
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client',
}
</script>

<style></style>
