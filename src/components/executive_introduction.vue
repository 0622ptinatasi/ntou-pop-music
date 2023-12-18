<template>
  <div class="container word">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 style="font-weight:bold">幹部介紹</h2>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-4  mx-auto" v-for="(card, index) in cards" :key="index">
        <div class="card" style="margin-bottom: 20px;height: 350px;">
          <div class="card-header  text-center">
            <h5 class="card-title" style="font-weight: bold;">{{ card.position }}</h5>
          </div>
          <img :src="card.image" class="card-img-top card-img-small mx-auto" alt="幹部圖片">
          <div class="card-body mx-auto">
            <p class="card-text">{{ card.jobDescription }}</p>
          </div>
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
          position: "社長",
          jobDescription: "負責社團對外接洽事務與行政事務，對內為主要向社員公告社團事項。",
          image: require("../assets/human/human01.jpg"),
        },
        {
          position: "副社長",
          jobDescription: "處理社團評鑑以及驗團搶團，器材申請事宜。",
          image: require("../assets/human/human06.jpg"),
        },
        {
          position: "教學",
          jobDescription: "負責每週一到五的社課時間，與負責教學樂器的學長姐接洽，以及每個禮拜的社辦使用時間公告。",
          image: require("../assets/human/human07.jpg"),
        },
        {
          position: "副教學",
          jobDescription: "與 IF Music Studio 洽談每個月的大社課事宜。",
          image: require("../assets/human/human08.jpg"),
        },
        {
          position: "小編",
          jobDescription: "負責管理Instagram帳號，進行宣傳活動，製作報名、回饋表單。",
          image: require("../assets/human/human09.jpg"),
        },
        {
          position: "總務",
          jobDescription: "管理社團財物。",
          image: require("../assets/human/human10.jpg"),
        },
        {
          position: "器材",
          jobDescription: "協助社辦內器材維護、對外租借，與工程組接洽，架場撤場的指揮。",
          image: require("../assets/human/human03.jpg"),
        },
        {
          position: "活動",
          jobDescription: "協助活動內容。",
          image: require("../assets/human/human04.jpg"),
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
    width: 150px;
    height: 200px
  }
  .word{
    font-family: 'Noto Sans TC';
  }
  </style>
  