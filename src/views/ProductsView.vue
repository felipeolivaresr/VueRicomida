<template>
  <div>
    <Navbar />
    
    <router-link to="/" class="main-link-centered">IR A LA PAGINA PRINCIPAL</router-link>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-12 px-5 mb-4" v-for="product in products" :key="product.id">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ product.detail1 }}</li>
              <li class="list-group-item">{{ product.detail2 }}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Ver más</a>
          
              <button @click="agregarAlCarrito(product)" class="card-link">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'ProductsView',
  components: {
    Navbar
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Desayuno', description: 'Un delicioso desayuno para empezar el día.', image: require('@/assets/img/desayunos.jpg'), precio: 4000, detail1: 'Precio: $4000', detail2: 'Cantidad: : Para dos personas' },
        { id: 2, name: 'Colaciones', description: 'Colaciones saludables para cualquier momento.', image: require('@/assets/img/colaciones.jpg'), precio: 4000, detail1: 'Precio: $4000', detail2: 'Cantidad: : Para dos personas' },
        { id: 3, name: 'Bebidas', description: 'Refrescantes bebidas para acompañar tus comidas.', image: require('@/assets/img/bebidas.jpg'), precio: 4000, detail1: 'Precio: $4000', detail2: 'Cantidad: : Para dos personas' },
        { id: 4, name: 'Dulces', description: 'Dulces deliciosos para satisfacer tu antojo.', image: require('@/assets/img/dulces.jpg'), precio: 4000, detail1: 'Precio: $4000', detail2: 'Cantidad: : Para dos personas' },
        { id: 5, name: 'Empanadas', description: 'Empanadas caseras con rellenos variados.', image: require('@/assets/img/empanadas.jpg'), precio: 4000, detail1: 'Precio: $4000', detail2: 'Cantidad: : Para dos personas' },
        { id: 6, name: 'Verduras', description: 'Verduras frescas y saludables.', image: require('@/assets/img/verduras.jpg'), precio: 4000, detail1: 'Precio: $4000', detail2: 'Cantidad: : Para dos personas' }
      ]
    }
  },
  methods: {
    agregarAlCarrito(product) {
      
      let carrito = JSON.parse(localStorage.getItem('carrito')) || []

      
      const index = carrito.findIndex(item => item.id === product.id)

      if (index === -1) {
        
        carrito.push({ ...product, cantidad: 1 })
      } else {
        
        carrito[index].cantidad++
      }

      
      localStorage.setItem('carrito', JSON.stringify(carrito))

      alert(`${product.name} ha sido agregado al carrito`)
    }
  }
}
</script>


<style scoped>
.container {
  margin-top: 20px;
}

.main-link-centered {
  display: inline-block;
  color: white;
  background-color: #ff69b4; 
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 20px auto; 
}

.main-link-centered {
  display: block;
  width: fit-content;
  margin: 20px auto;
}

.main-link-centered:hover {
  background-color: #ff4392; 
}

.card-link {
  background-color: #ff4392;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  padding: 8px 16px;
  margin: 4px 0;
  text-align: center;
}

.card-link:hover {
  background-color: #ff69b4;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
