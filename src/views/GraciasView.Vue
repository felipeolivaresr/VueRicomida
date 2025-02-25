<template>
  <div class="container text-center gracias-container">
    <h1 class="gracias-title">¡Gracias por tu compra!</h1>
    <p class="gracias-text">Tu pedido ha sido procesado correctamente.</p>
  </div>
</template>

<script>
export default {
  name: 'GraciasView'
}
</script>

<style scoped>
.gracias-container {
padding-top: 250px;
  background-color: #f8f9fa;
  border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 100px;
}


.gracias-title {
  font-size: 2rem;
  color: #ff69b4;
  margin-bottom: 20px;
}

.gracias-text {
  font-size: 1.2rem;
  color: #333;
}

@media (max-width: 768px) {
  .gracias-container {
    margin-top: 200px; /* Ajusta el margen superior para pantallas más pequeñas */
    padding: 15px;
  }

  .gracias-title {
    font-size: 1.5rem;
  }

  .gracias-text {
    font-size: 1rem;
  }
}
</style>