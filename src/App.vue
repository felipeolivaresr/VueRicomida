<template>
  <Navbar />
  
  <router-view/>
  
  <medios-pago/>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    MediosPago
  }
}
</script>

<style>
body {
  padding-top: 80px; /* Ajusta según la altura real de tu navbar */
}
</style>
