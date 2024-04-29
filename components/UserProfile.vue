<template>
  <div class="user-profile">
    <div class="profile-left">
      <div class="avatar-container">
        <img class="profile-avatar" :src="userData.avatar" :alt="userData.username" @click="toggleDropdown" />
        <div v-show="showDropdown" class="avatar-dropdown">
          <div class="dropdown-item" @click="uploadPhoto">Upload Photo</div>
          <div class="dropdown-item" @click="removePhoto">Remove Photo</div>
        </div>
      </div>
    </div>
    <div class="profile-right">
      <h2 class="profile-username">{{ userData.username }}</h2>
      <p class="profile-bio">{{ userData.bio }}</p>
      <div class="profile-stats">
        <div class="profile-stat">
          <div class="stat-label">Posts</div>
          <div class="stat-value">{{ userData.posts }}</div>
        </div>
        <div class="profile-stat">
          <div class="stat-label">Followers</div>
          <div class="stat-value">{{ userData.followers }}</div>
        </div>
        <div class="profile-stat">
          <div class="stat-label">Following</div>
          <div class="stat-value">{{ userData.following }}</div>
        </div>
      </div>
      <button class="edit-profile-btn">Edit Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userData: {},
      showDropdown: false
    };
  },
  created() {
    this.userData = { ...this.user };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    uploadPhoto() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.click();
      fileInput.addEventListener('change', () => {
        const selectedFile = fileInput.files[0];
        this.upload(selectedFile);
      });
    },
    removePhoto() {
      this.userData.avatar = 'path_to_default_avatar_image.jpg';
    },
    upload(file) {
      // console.log('Uploading file:', file);
    }
  }
};
</script>

<style scoped>
.user-profile {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.profile-left {
  flex: 1;
  text-align: center;
}
.avatar-container {
  position: relative;
}
.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #4CAF50;
  cursor: pointer;
}
.avatar-dropdown {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  border-radius: 4px;
  padding: 5px;
}
.dropdown-item {
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  color: #fff;
}
.dropdown-item:hover {
  background-color: #555;
}
.profile-right {
  flex: 2;
  padding-left: 15px;
  padding-right: 30px;
}
.profile-username {
  font-size: 24px;
  margin-bottom: 10px;
}
.profile-bio {
  margin-bottom: 20px;
}
.profile-stats {
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  margin-bottom: 20px;
}
.profile-stat {
  text-align: center;
}
.stat-label {
  font-weight: bold;
}
.edit-profile-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
