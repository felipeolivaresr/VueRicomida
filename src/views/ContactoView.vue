<template>
  <div>
      <h1>Contacto</h1>
      <p> Nombre: {{ nombre }} - Email: {{ email }}</p>
  </div>
  <router-link to="/" class="main-link-centered">IR A LA PAGINA PRINCIPAL</router-link>

</template>

<script>
export default {
    props: {
       
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
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


</style>