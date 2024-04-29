<template>
  <v-container>
    <Login />
  </v-container>
</template>

<script>
import Login from '~/components/Auth/Login.vue'

export default {
  components: {
    Login
  },
  layout: 'auth', 
}
</script>

<style scoped>

</style> 

