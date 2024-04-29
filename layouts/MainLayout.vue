<template>
  <v-app dark>
    <div class="main-layout">
      <StickyHeader />
      <div class="main-container">
        <Sidebar />
        <div class="content">
          <Nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import StickyHeader from '~/components/StickyHeader.vue';
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    StickyHeader,
    Sidebar
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main-container {
  display: flex;
  flex: 1;
}

.content {
  flex-grow: 1;
  padding-left: 20%;
  padding-top: 2px;
}
</style>