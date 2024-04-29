<template>
  <div class="post">
    <div class="post-header">
      <div class="user-info">
        <img class="avatar" :src="post.user.avatar" :alt="post.user.name" />
        <p class="user-name">{{ post.user.name }}</p>
      </div>
      <div class="dropdown" @click="toggleDropdown">
        <button class="dropdown-btn"><v-icon>mdi-dots-vertical</v-icon></button> 
        <div v-show="showDropdown" class="dropdown-content">
          <div class="dropdown-item" @click="editPost">Edit</div>
          <div class="dropdown-item" @click="deletePost">Delete</div>
        </div>
      </div>
      </div>
      <div class="post-image">
      <img :src="post.image" :alt="post.user.name" />
    </div>

    <div class="post-actions">
      <button class="action-btn" @click="likePost"><v-icon>mdi-thumb-up-outline</v-icon> {{ post.likes }}</button>
      <button class="action-btn" @click="commentPost"><v-icon>mdi-comment-outline</v-icon> {{ post.comments }}</button>
      <button class="action-btn" @click="sharePost"><v-icon>mdi-share-variant-outline</v-icon> {{ post.shares }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    editPost() {
      
    },
    deletePost() {
      
    },
  }
};
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px;
  width: 500px;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
}
.user-info {
  display: flex;
  align-items: center;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 10px;
  border: 2px solid #4CAF50;
}
.user-name {
  font-weight: bold;
  margin: 0;
}
.dropdown-content {
  position: absolute;
  background-color: #333;
  border-radius: 4px;
  padding: 5px;
  width: 80px; 
}
.dropdown-item {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  font-size: small;
}
.dropdown-item:hover {
  background-color: #555;
}
.post-image {
  margin-top: 6px;
  margin-left: auto;
  margin-right: auto;
}

.post-image img {
  width: 430px;
  margin-left: 25px;
  height: 430px;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.post-actions button {
  margin-right: 10px;
  padding: 2px 16px;
  cursor: pointer;
}
</style>
 
