<template>
  <v-container class="container mt-5">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-title class="text-h6 justify-center pt-5">SignUp to See Photos and Videos from Your Friends</v-card-title>
          <v-card-text>
            <v-text-field v-model="username" label="Username" outlined dark class="input-field"></v-text-field>
            <v-text-field v-model="email" label="Email" type="email" outlined dark class="input-field"></v-text-field>
            <v-text-field v-model="phone" label="Phone No." outlined dark class="input-field"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" outlined dark class="input-field"></v-text-field>
          </v-card-text>
          <v-card-actions class="signup-btn">
            <v-btn color="success" class="signup-btn-width" @click="signup">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
        <v-card-text class="login-link">
          <p>Already have an account? <v-btn color="primary" text @click="goToLogin">Log In</v-btn></p>
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
      email: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    signup() {
     
    },
    goToLogin() {
      this.$router.push('/login');
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
margin-bottom: -10px;
}
.signup-btn {
justify-content: center;
padding-bottom: 25px;
}
.signup-btn-width {
width: calc(100% - 50px); 
}
.login-link {
  text-align: center;
  padding-top: 10px;
  font-size: 16px;
}
</style> 


 