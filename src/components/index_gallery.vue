<template>
  <div class="home">
    <img src="@/assets/arrow_left.jpg" @click="prevImage" class="arrow"/>
    <div class="slideshow-container">
      <img :src="currentImage" alt="Slideshow" class="slideshow-image"/>
    </div>
    <img src="@/assets/arrow_right.jpg" @click="nextImage" class="arrow"/>
  </div>
</template>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.arrow {
  height: 50px; /* Adjust the height as needed */
  cursor: pointer;
}

.slideshow-container {
  width: 800px;
  height: 500px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  background-color: white;
}

.slideshow-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #ccc;
  border-radius: 8px;
}
</style>
<script>
  export default {
    data() {
      return {
        images: [
          'pic01.jpg',
          'pic02.jpg',
          'pic03.jpg',
          'pic04.jpg',
          'pic05.jpg',
          'pic06.jpg',
          'pic07.jpg',
          'pic08.jpg',
          'pic09.jpg',
          'pic10.jpg',
        ],
        currentIndex: 0
      };
    },
    computed: {
      currentImage() {
        return require(`@/assets/main_photo/${this.images[this.currentIndex]}`);
      }
    },
    methods: {
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      goToAbout() {
        location.href = 'about_us.html';
      },
    },
    mounted() {
      // 定期更換照片
      setInterval(this.nextImage, 5000);
    }
  };
</script>