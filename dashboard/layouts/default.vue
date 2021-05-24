<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <Admin-Navbar />
      <Header-Stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <Nuxt />
        <Footer-Admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from '@/components/Navbars/AdminNavbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import HeaderStats from '@/components/Headers/HeaderStats.vue'
import FooterAdmin from '@/components/Footers/FooterAdmin.vue'
export default {
  name: 'AdminLayout',
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
}
</script>
