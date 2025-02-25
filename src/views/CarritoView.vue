<template>
  <div class="container">
    <h1>Carrito de Compras</h1>
    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in carrito" :key="item.id">
            {{ item.name }} x {{ item.cantidad }} - ${{ item.precio * item.cantidad }}
            <button class="btn btn-danger float-end" @click="eliminarItem(item.id)">Eliminar</button>
          </li>
        </ul>
      </div>
      <div class="col-12 mt-3">
        <p class="text-end">Total: ${{ total }}</p>
        <button class="btn btn-success float-end" @click="finalizarCompra">Finalizar Compra</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrito: []
    }
  },
  computed: {
    total() {
      return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    }
  },
  methods: {
    eliminarItem(id) {
      // Obtener carrito desde localStorage
      let carrito = JSON.parse(localStorage.getItem('carrito')) || []

      // Eliminar item del carrito
      const index = carrito.findIndex(item => item.id === id)
      if (index !== -1) {
        carrito.splice(index, 1)
      }

      // Actualizar carrito en localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito))

      // Actualizar la vista
      this.carrito = carrito
    },
    finalizarCompra() {
      // Vaciar el carrito en localStorage
      localStorage.removeItem('carrito')

      // Redirigir a la página de gracias
      this.$router.push('/gracias')
    }
  },
  mounted() {
    // Cargar el carrito desde localStorage al montar el componente
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || []
  }
}
</script>
