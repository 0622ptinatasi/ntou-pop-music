<template>
    <br>
    <div class="container word">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 style="font-weight:bold">活動介紹</h2>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-9 mx-auto" v-for="(card, index) in cards" :key="index">
          <div class="card" style="margin-bottom: 20px;height: 750px;">
            <div class="card-header  text-center">
              <h5 class="card-title" style="font-weight: bold;">&#x2728;{{ card.name }}&#x2728;</h5>
            </div>
            <br>
            <img :src="card.image" class="card-img-top card-img-small mx-auto img-fluid" alt="器材圖片">
            <div class="card-body mx-auto">
              <p class="card-text">{{ card.introduction }}</p>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
</template>
    
<script>
  //script
  export default {
    data() {
      return {
        cards: [
          {
            name: "期初迎新",
            image: require("../assets/activity/act01.jpg"),
            introduction: "由學長姐組團表演給對熱音有興趣的學弟妹參加，其中有熱音社介紹，各樂器介紹，使學弟妹評估自己是否想加入熱音社。",
          },
          {
            name: "社員大會",
            image: require("../assets/activity/act02.jpg"),
            introduction: "給已確定要加入熱音社的學弟妹參加，會由幹部們帶領進行團康，使同屆更了解彼此，以及社辦各器材使用方式講解，並進行組團。",
          },
          {
            name: "冬季小成",
            image: require("../assets/activity/act03.jpeg"),
            introduction: "主要由社員大會所組的新生團進行演出，給剛加入熱音社的學弟妹一個表演的舞台。",
          },
          {
            name: "春季小成",
            image: require("../assets/activity/act04.jpg"),
            introduction: "進行演出的團涵蓋了大一到大四的社員，能在驗團中脫穎而出，才有辦法在本次小成上台表演，也有機會跟別的社團合作演出噢。",
          },
          {
            name: "凰音祭",
            image: require("../assets/activity/act05.jpg"),
            introduction: "是海大熱音一年一度的盛事！會由外包PA幫我們控台，對於表演的團要求較為嚴格，也會邀請藝人來我們的舞台進行演出！活動當天也會有許多市集的擺攤噢。",
          },
          {
            name: "寒假社遊",
            image: require("../assets/activity/act06.jpg"),
            introduction: "使所有大一到大四的社員一同參與的出遊，是一個很好與其他社員認識的機會，能在熱音社認識更多厲害的人噢。",
          },
        ],
      };
    },
  };
</script>
    
<style>
    @import '~bootstrap/dist/css/bootstrap.min.css';
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
    .word{
      font-family: 'Noto Sans TC';
    }
    .card-img-small {
      width: auto;
      height: 600px
    }
</style>
    