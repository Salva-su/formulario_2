<template>
  <div class="container">
    <h1>Bienvenido</h1>
    <p>registrate o inica seccion </p>
    <div class="actions">
      <button @click="goToRegister" class="action-button">Ir a Registro</button>
      <button @click="logout" class="action-button">iniciar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    goToRegister() {
      alert('fuistes a registro.');
      this.$router.push('/register');
    },
    logout() {
      alert('vay kkku.');
      this.$router.push('/login'); 
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  justify-content: space-around;
}

.action-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
