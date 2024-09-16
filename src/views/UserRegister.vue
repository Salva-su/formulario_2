<template>
  <div class="container">
    <h1>Registro</h1>
    <form @submit.prevent="registerUser" class="form-container">
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="dob">Fecha de nacimiento:</label>
        <input type="date" id="dob" v-model="dob" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmar Contraseña:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <div class="form-group">
        <input type="checkbox" id="terms" v-model="termsAccepted" required />
        <label for="terms">Acepto los términos y condiciones</label>
      </div>
      <button type="submit" class="submit-button">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      username: '',
      fullName: '',
      email: '',
      dob: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false
    };
  },
  methods: {
    registerUser() {
      if (this.password !== this.confirmPassword) {
        alert('pusistes mal tu contraseña we');
        return;
      }
      if (!this.termsAccepted) {
        alert('dale al cuadro ');
        return;
      }
      
      this.$router.push('/'); 
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.submit-button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
