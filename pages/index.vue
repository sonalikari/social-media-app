<template>
  <v-container>
    <div class="post-list">
      <Post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </v-container>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          user: {
            name: 'Sonali Rai',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
          },
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
          likes: 10,
          comments: 5,
          shares: 3
        },
        {
          id: 2,
          user: {
            name: 'Saurabh Rai',
            avatar: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
          },
          image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
          likes: 20,
          comments: 15,
          shares: 5
        },
      ]
    }
  }
}
</script>

<style scoped>
.post-list {
  margin-top: 10px;
}
</style>
