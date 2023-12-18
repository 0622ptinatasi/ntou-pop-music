<template>
    <div class="container word">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 style="font-weight:bold">器材介紹</h2>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-5 mx-auto" v-for="(card, index) in cards" :key="index">
          <div class="card" style="margin-bottom: 20px;height: 400px;">
            <div class="card-header  text-center">
              <h5 class="card-title" style="font-weight: bold;">{{ card.name }}</h5>
            </div>
            <br>
            <img :src="card.image" class="card-img-top card-img-small mx-auto img-fluid" alt="器材圖片">
          </div>
        </div>
      </div>
    </div>
</template>
    
<script>
  export default {
    data() {
      return {
        cards: [
          {
            name: "Marshall DSL100H",
            image: require("../assets/equipment/eq_01.jpg"),
          },
          {
            name: "VOX AC30",
            image: require("../assets/equipment/eq_02.jpg"),
          },
          {
            name: "Fender Frontman 212R",
            image: require("../assets/equipment/eq_03.jpg"),
          },
          {
            name: "Marshall MG102CFX",
            image: require("../assets/equipment/eq_04.jpg"),
          },
          {
            name: "WARWICK WA600",
            image: require("../assets/equipment/eq_05.jpg"),
          },
          {
            name: "Albion ABH300",
            image: require("../assets/equipment/eq_06.jpg"),
          },
          {
            name: "Roland VR-09",
            image: require("../assets/equipment/eq_07.jpg"),
          },
          {
            name: "YAMAHA CP-4",
            image: require("../assets/equipment/eq_0809.jpg"),
          },
          {
            name: "KORG KROSS",
            image: require("../assets/equipment/eq_0809.jpg"),
          },
          {
            name: "Roland KC-400",
            image: require("../assets/equipment/eq_10.jpg"),
          },
          {
            name: "TAMA 5pcs套鼓",
            image: require("../assets/equipment/eq_11.jpg"),
          },
          {
            name: "YAMAHA 5pcs套鼓",
            image: require("../assets/equipment/eq_12.jpg"),
          },
          {
            name: "YAMAHA EMX5016CF",
            image: require("../assets/equipment/eq_13.jpg"),
          },
          {
            name: "YAMAHA P7000S",
            image: require("../assets/equipment/eq_1415.jpg"),
          },
          {
            name: "B52 US-3000",
            image: require("../assets/equipment/eq_1415.jpg"),
          },
          {
            name: "SHURE SM57",
            image: require("../assets/equipment/eq_16.jpg"),
          },
          {
            name: "SHURE SM58",
            image: require("../assets/equipment/eq_17.jpg"),
          },
        ],
      };
    },
  };
</script>
    
<style>
    @import '~bootstrap/dist/css/bootstrap.min.css';
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
    .card-img-small {
      width: 400px;
      height: 300px
    }
    .word{
      font-family: 'Noto Sans TC';
    }
</style>
    