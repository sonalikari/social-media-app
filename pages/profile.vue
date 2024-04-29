<template>
  <div class="profile-page">
    <user-profile :user="user" />
  </div>
</template>

<script>
import UserProfile from '~/components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  data() {
    return {
      user: {
        username: "Sonali Rai",
        bio: "This is bio section.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        posts: 4,
        followers: 200,
        following: 205
      }
    };
  }
};
</script>

<style scoped>
.profile-page {
  padding: 20px;
}
</style>

  