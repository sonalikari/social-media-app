<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-title">L<span>OG</span>O</div>
      <div v-for="item in sidebarItems" :key="item.title" class="sidebar-item" :class="{ 'selected': selectedItem === item.title, 'active': isActive(item) }" @click="handleItemClick(item)">
        <nuxt-link :to="item.route" class="sidebar-link" :class="{ 'selected': selectedItem === item.title }">
  <v-icon class="sidebar-icon">{{ item.icon }}</v-icon>
  <span class="sidebar-text">{{ item.title }}</span>
</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 'Home',
      sidebarItems: [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'Search', icon: 'mdi-magnify', route: '/search' },
        { title: 'Messages', icon: 'mdi-chat-processing-outline', route: '/message' },
        { title: 'Notifications', icon: 'mdi-bell-outline', route: '/notification' },
        { title: 'Create', icon: 'mdi-plus-circle-outline', route: '/create' },
        { title: 'Logout', icon: 'mdi-logout', route: '/login' }
      ]
    };
  },
  computed: {
    activeClass() {
      return this.selectedItem;
    }
  },
  methods: {
    handleItemClick(item) {
      this.selectedItem = item.title;
    },
    isActive(item) {
      return this.selectedItem === item.title || item.route === this.$route.path;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.sidebar-content {
  padding-top: 20px;
}
.sidebar-title {
  font-size: xx-large;
  font-weight: bolder;
  padding-left: 30px;
  padding-bottom: 30px;
  font-style: italic;
}
.sidebar-title span {
  color: #4CAF50;
}
.sidebar-item .sidebar-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px 30px;
  text-decoration: none;
  color: inherit;
}
.sidebar-item .sidebar-link:hover {
  background-color: #555;
}
.sidebar-icon {
  margin-right: 10px;
}
.sidebar-text {
  margin-left: 10px;
}
.selected {
  background-color: #555;
}
</style>
