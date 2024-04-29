<template>
  <v-container class="container mt-3">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-title class="text-h6 justify-center pt-5">Log In to Your Account</v-card-title>
          <v-card-text>
            <v-text-field v-model="username" label="Username" outlined dark class="input-field"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" outlined dark class="input-field"></v-text-field>
          </v-card-text>
          <v-card-actions class="login-btn">
            <v-btn color="success" class="login-btn-width" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
        <v-card-text class="signup-link">
          <p>Don't have an account? <v-btn color="primary" text @click="goToSignup">Sign Up</v-btn></p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      
    },
    goToSignup() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.input-field {
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: -5px;
}
.login-btn {
  justify-content: center;
  padding-bottom: 25px;
}
.login-btn-width {
  width: calc(100% - 50px); 
}
.signup-link {
  text-align: center;
  padding-top: 10px;
  font-size: 16px;
}
</style> 

