<template>
  <div class="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
    <div
      class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8"
    >
      <h1 class="font-bold text-center text-4xl text-yellow-500">
        Your<span class="text-blue-500">App</span>
      </h1>
      <form action="#">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
          <h1 class="font-bold text-xl text-center">Sign in to your account</h1>

          <div class="flex flex-col space-y-1">
            <input
              type="text"
              name="username"
              id="username"
              class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
              placeholder="Username"
            />
          </div>

          <div class="flex flex-col space-y-1">
            <input
              type="password"
              name="password"
              id="password"
              class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
              placeholder="Password"
            />
          </div>

          <div class="relative">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked
              class="inline-block align-middle"
            />
            <label class="inline-block align-middle ml-1" for="remember"
              >Remember me</label
            >
          </div>

          <div
            class="flex flex-col-reverse sm:flex-row sm:justify-between items-center"
          >
            <a
              href="#"
              class="inline-block text-blue-500 hover:text-blue-800 hover:underline"
              >Forgot your password?</a
            >
            <button
              type="submit"
              class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
          </div>
          <div class="flex flex-col mt-8">
            <div class="flex items-center">
              <h5 class="w-full text-center text-sm text-gray-400">
                Or signin with
              </h5>
            </div>
          </div>
          <div class="flex flex-col mt-8">
            <div class="flex items-center">
              <div
                class="hover:bg-blue-50 flex items-center justify-center w-full flex-grow px-4 py-2 border border-solid border-blue-300 rounded-md mr-2.5 cursor-pointer"
              >
                <span
                  class="iconify text-xl text-blue-300"
                  data-icon="bi:facebook"
                  data-inline="false"
                ></span>
                <span class="ml-1">Facebook</span>
              </div>
              <div
                class="hover:bg-blue-50 flex items-center justify-center w-full flex-grow px-4 py-2 border border-solid border-blue-300 rounded-md cursor-pointer"
              >
                <span
                  class="iconify text-xl"
                  data-icon="flat-color-icons:google"
                  data-inline="false"
                ></span>
                <span class="ml-1">Google</span>
              </div>
            </div>
          </div>
          <div class="text-center">
            <h5 class="text-sm">
              Bạn chưa có tài khoản ?
              <span class="text-sm text-blue-500">Đăng ký</span>
            </h5>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>