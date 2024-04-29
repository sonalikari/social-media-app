<template>
  <div class="sticky-header">
    <div class="page-title">{{ currentPageTitle }}</div>
    <div class="avatar" @click="toggleDropdown">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Avatar" />
      <div v-show="showDropdown" class="dropdown-menu">
        <div class="dropdown-item" @click="viewProfile">
          <v-icon>mdi-account-circle-outline</v-icon> View Profile
        </div>
        <div class="dropdown-item" @click="editProfile">
          <v-icon>mdi-pencil-outline</v-icon> Edit Profile
        </div>
        <div class="dropdown-item" @click="logout">
          <v-icon>mdi-logout</v-icon> Logout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  computed: {
    currentPageTitle() {
      if (this.$route.name === 'index') {
      return 'Home';
    }
    return this.$route.name || 'Profile';
  }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    viewProfile() {
      this.$router.push('/profile');
    },
    editProfile() {
      this.$router.push('/profile');
    },
    logout() {
      this.$router.push('/login');
    },
  }
};
</script>

<style scoped>
.sticky-header {
  top: 0;
  right: 0;
  height: 80px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  padding: 0 20px; 
  cursor: pointer;
}
.page-title {
  font-size: 25px; 
  font-weight: bold; 
  padding-left: 20%;
  text-transform: capitalize;
}
.avatar {
  position: relative;
}
.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #4CAF50;
  background-color: #555;
  margin-right: 20px;
}
.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 2px;
  background-color: #333;
  border-radius: 4px;
  padding: 5px;
  width: 120px; 
}
.dropdown-item {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  padding: 5px 5px;
  font-size: small;
}
.dropdown-item:hover {
  background-color: #555;
}
</style>