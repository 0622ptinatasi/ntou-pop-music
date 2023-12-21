<script>
  import axios from 'axios';
  // Import Bootstrap JavaScript
  import 'bootstrap/dist/js/bootstrap.bundle.min';
  export default ({
    data: function () {
        return {
            bulletin_info: [],
            totBulletin: 0,
            pageSize: 10,
            curPage: 1,
            cut: [],
            totPage: 1,
            authorization: 0
        }
    },
    created: function () {
        axios.get("http://localhost:3000/bulletin")
            .then((res) => {
                this.bulletin_info=res.data;
                for (let item of this.bulletin_info) {
                    item.headid="head"+item.bulletin_ID;
                    item.bodyid="body"+item.bulletin_ID;
                    item.actbody="#"+item.bodyid;
                    this.totBulletin+=1;
                }
                this.slice(1);
                this.totPage=Math.ceil(this.totBulletin/this.pageSize);
                console.log(this.totPage);
                this.authorization=window.sessionStorage.getItem('authorization');
                console.log(this.authorization);
            })
    },
    methods: {
      slice :function(cur){
            window.scrollTo(0, 0);
            console.log(cur);
            this.curPage=cur;
            this.cut=this.bulletin_info.slice((this.curPage*this.pageSize)-this.pageSize,(this.curPage*this.pageSize))
        }
    },
    mounted: function () {
    },
});
</script>

<template>
  <br>
  <br>
  <div class="container word">
    <div class="row">
        <div class="col-md-12 text-center">
          <h2 style="font-weight:bold">最新公告</h2>
        </div>
      </div>
      <br>
    <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="accordion" id="bulletinAccordion">
                <div v-for="info in cut" v-bind:key="info.bulletin_ID">
                    <div class="accordion-item">
                        <div class="accordion-header" v-bind:id="info.headid">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                v-bind:data-bs-target="info.actbody" aria-expanded="true" v-bind:aria-controls="info.bodyid">
                                <strong>{{ info.title }}</strong>
                            </button>
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="text-secondary">
                                        &nbsp;&nbsp;&nbsp;
                                        {{ info.name }}
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="text-secondary">
                                        發布者：{{ info.sender }}
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="text-secondary">
                                        對象：{{ info.receiver }}
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="text-secondary">
                                        {{ info.time }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-bind:id="info.bodyid" class="accordion-collapse collapse" v-bind:aria-labelledby="info.headid"
                            data-bs-parent="#bulletin">
                            <div class="accordion-body"  style="white-space: pre-line;">
                                {{ info.content }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-10 text-end">
            <a href="../all_announcement.html" class="more-link">more...</a>
        </div>
    </div>
  </div>
</template>

    
<style>
    @import '~bootstrap/dist/css/bootstrap.min.css';
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
    .word{
      font-family: 'Noto Sans TC';
    }
    .accordion-item {
        background-color: #ffffff;
        color: #000000;
    }
    .accordion-button {
        background-color: #cecdce;
        color: #040404;
    }
    .accordion-header{
        background-color: #ffffff;
        color: #ffffff;
    }
    .accordion-button:not(.collapsed) {
        background-color: #464545;
        color: #ffffff;
    }
    .more-link {
        color: #989797;
    }
    .more-link:hover {
        color: #000080;
    }
</style>