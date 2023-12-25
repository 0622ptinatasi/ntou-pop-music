<template>
    <br>
    <br>
    <div class="container word">
        <div class="row">
            <div class="col-md-12 text-center">
              <h1 style="font-weight:bold">搶團功能</h1>
            </div>
        </div>
        <br>
        <br>
        <div class="d-flex justify-content-center">
            <div class="card" style="width: 760px;">
                <div class="card-header  text-center">
                    <h1 style="font-weight:bold">&#x1F4A1;搶團須知&#x1F4A1;</h1>
                </div>
                <img src="../assets/練團時間表.jpg" class="card-img-top mx-auto img-fluid" alt="Card Image" style="width:300px">
                <div class="card-body">
                    <h4 class="card-title text-center" style="font-weight:bold">&#x2B50;搶團請先看&#x2B50;</h4>
                    <p class="card-text text-center">
                        ⚠️留言格式：<br>
                        EX1:蘆筍汁津津有味 禮拜三AB<br>
                        EX2:雞塊剝皮吃有罪 禮拜一AB<br>
                        ⚠️注意事項<br>
                        ‼️一個樂團只能一位代表留言<br>
                        ‼️搶團時段規則：一次只能搶兩個時段（英文字母2個）<br>
                    </p>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="mb-4" style="font-weight:bold">搶團留言板</h2>
            </div>
        </div>
        <div v-for="(comment, index) in comments" :key="index" class="alert alert_color">
            <div class="row">
                <div class="col-md-4">
                    <div class="text-secondary">
                        {{ comment.content }}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-secondary">
                        發布者：{{ comment.user }}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-secondary">
                        發布時間：{{ comment.time }}
                    </div>
                </div>
            </div>
        </div>
        <div class="input-group mb-3">
            <div class="col-md-3">
                <textarea v-model="bandName" class="form-control" placeholder="留下你的團名！" style="height: 38px;"></textarea>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="col-md-3">
                <select v-model="day" id="selectDay" class="custom-select form-control" style="height: 38px;" required>
                    <option value="" disabled selected hidden>請選擇禮拜幾</option>
                    <option value="禮拜一">禮拜一</option>
                    <option value="禮拜二">禮拜二</option>
                    <option value="禮拜三">禮拜三</option>
                    <option value="禮拜四">禮拜四</option>
                    <option value="禮拜五">禮拜五</option>
                    <option value="禮拜六">禮拜六</option>
                    <option value="禮拜日">禮拜日</option>
                  </select>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="col-md-5">
                <div v-if="day && ['禮拜一', '禮拜二', '禮拜三', '禮拜四', '禮拜五'].includes(day)">
                    <label v-for="letter in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', '夜練1', '夜練2']" :key="letter">
                        <input type="checkbox" v-model="selectedOptions" :value="letter" @change="handleCheckboxChange"> {{ letter }}
                    </label>
                </div>
                <div v-else>
                    <label v-for="letter in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']" :key="letter">
                        <input type="checkbox" v-model="selectedOptions" :value="letter" @change="handleCheckboxChange"> {{ letter }}
                    </label>
                </div>
            </div>
            <button @click="btnClick" class="btn btn-primary">發送</button>
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                comments: [],
                newComment: "",
                bandName: "",
                day:"",
                period: "",
                user: "",
                time: "",
                id: "",
                comments_cnt: 0,
                selectedOptions: [],
            };
        },
        created() {
            this.loadComments();
        },
        methods: {
            handleCheckboxChange() {
                if (this.selectedOptions.length > 2) {
                    this.selectedOptions.pop();
                }
            },
            loadComments() {
                axios.get('https://websiteprogrammingteam31.000webhostapp.com/comment.php')
                    .then(response => {
                        this.comments = response.data;
                        this.comments_cnt = this.comments.length;
                        console.log(this.comments);
                        console.log(this.comments_cnt);
                    })
                    .catch(error => {
                        console.error('Error loading comments', error);
                    });
            },
            btnClick(){
                if (!this.bandName || !this.day || this.selectedOptions.length === 0) {
                    alert('請填寫所有必要欄位！');
                    return;
                }
                const selectedOptionsString = this.selectedOptions.join('');
                this.newComment=this.bandName+" "+this.day+" "+selectedOptionsString;
                console.log(this.newComment)
                this.addComment();
            },
            addComment() {
                if (this.newComment.trim() !== "") {
                    this.user = localStorage.getItem('user');
                    this.time = this.getCurrentTime();
                    this.id = this.comments_cnt + 1 ;
                    axios.post('https://websiteprogrammingteam31.000webhostapp.com/comment.php', {
                        comment_id: this.id,
                        content: this.newComment,
                        user: this.user,
                        time: this.time,
                    }, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })
                    .then(response => {
                        console.log(response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        if (error.response) {
                            console.error('伺服器回應錯誤', error.response.data);
                        } else if (error.request) {
                            console.error('沒有收到伺服器回應');
                        } else {
                            console.error('請求錯誤', error.message);
                        }
                    });
                }
            },
            getCurrentTime(){
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');
                const hours = String(currentDate.getHours()).padStart(2, '0');
                const minutes = String(currentDate.getMinutes()).padStart(2, '0');
                const seconds = String(currentDate.getSeconds()).padStart(2, '0');
                const milliseconds = String(currentDate.getMilliseconds()).padStart(3, '0');
                const microseconds = "000";
                const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}${microseconds}`;
                return formattedTime;
            }            
        }
    };
</script>
  
<style>
    @import '~bootstrap/dist/css/bootstrap.min.css';
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
    .word{
        font-family: 'Noto Sans TC';
    }
    .alert_color{
        background-color: rgb(246, 250, 177);
    }
</style>
  