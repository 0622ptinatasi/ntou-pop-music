<template>
    <div class="image-container">
      <div class="centered-image">
        <img src="@/assets/banner.jpg" alt="橫幅圖片" @click="goToMainPage"/>
      </div>
      <div class="image-overlay"></div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
        goToMainPage() {
          window.location.href = 'index.html';
        }
    }
  };
  </script>
  
  <style scoped>
  @import '~bootstrap/dist/css/bootstrap.min.css';
  .image-container {
    position: relative;
    width: 100%;
    height: auto;
  }
  
  .centered-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .centered-image img {
    width: 70%;
    cursor: pointer;
  }
  
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: 	#E0E0E0;
    z-index: -1;
  }
  </style>
