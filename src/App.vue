<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Registrarse</router-link>
    </nav>
    <router-view></router-view> 
  </div>
</template>


<script>
export default {
  name: 'App',
};
</script>
