<template>
    <br>
    <br>
    <div class="container word">
        <div class="row">
            <div class="col-md-12 text-center">
              <h1 style="font-weight:bold">社辦使用</h1>
            </div>
        </div>
        <br>
        <br>
        <div class="d-flex justify-content-center">
            <div class="card" style="width: 760px;">
                <div class="card-header  text-center">
                    <h1 style="font-weight:bold">&#x1F4A1;登記使用須知&#x1F4A1;</h1>
                </div>
                <img src="../assets/練團時間表.jpg" class="card-img-top mx-auto img-fluid" alt="Card Image" style="width:300px">
                <div class="card-body">
                    <h4 class="card-title text-center" style="font-weight:bold">&#x2B50;搶團請先看&#x2B50;</h4>
                    <p class="card-text text-center">
                        ⚠️留言格式：<br>
                        EX1：蘆筍汁津津有味 禮拜三AB<br>
                        EX2：雞塊剝皮吃有罪 禮拜一AB<br>
                        ⚠️注意事項<br>
                        ‼️一個樂團只能一位代表留言<br>
                        系統會自行記錄時間<br>
                        撞時段以越早登記的人優先<br>
                        搶輸的團請自行重新留言謝謝!!<br>
                        ‼️搶團時段規則：一次只能搶兩個時段（英文字母2個）<br>
                    </p>
                    <h4 class="card-title text-center" style="font-weight:bold">&#x2B50;個練請先看&#x2B50;</h4>
                    <p class="card-text text-center">
                        ⚠️留言格式：<br>
                        EX1：林大明 禮拜三AB<br>
                        EX2：蔡阿佩 禮拜一AB<br>
                        ⚠️注意事項<br>
                        搶團完剩餘的空檔時間才能當作個練時間<br>
                        請自行避開有練團的時間<br>
                        系統會自行記錄時間<br>
                        撞時段以越早登記的人優先<br>
                        ‼️個練時段規則：一次只能搶兩個時段（英文字母2個）<br>
                    </p>
                </div>
                <div class="card-footer">
                    <h5 class="text text-center" >
                        ⚠️若有使用上爭議請洽社長進行協商⚠️
                    </h5>
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
            <button @click="btnClick" class="btn my_btn1">發送</button>
        </div>
        <br>
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="mb-4" style="font-weight:bold">個練留言板</h2>
            </div>
        </div>
        <div v-for="(comment, index) in person_comments" :key="index" class="alert alert_color_v2">
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
                <textarea v-model="personName" class="form-control" placeholder="留下你的大名！" style="height: 38px;"></textarea>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="col-md-3">
                <VueDatePicker v-model="selectedDate" @update:modelValue="handleDateCal"></VueDatePicker>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="col-md-5">
                <div v-if="dayOfWeek && ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(dayOfWeek)">
                    <label v-for="letter in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', '夜練1', '夜練2']" :key="letter">
                        <input type="checkbox" v-model="selectedOptions2" :value="letter" @change="handleCheckboxChange"> {{ letter }}
                    </label>
                </div>
                <div v-else>
                    <label v-for="letter in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']" :key="letter">
                        <input type="checkbox" v-model="selectedOptions2" :value="letter" @change="handleCheckboxChange"> {{ letter }}
                    </label>
                </div>
            </div>
            <button @click="btnClick2" class="btn my_btn2">發送</button>
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios';
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    export default {
        components: {
            VueDatePicker,
        },
        data() {
            return {
                comments: [],
                person_comments: [],
                newComment: "",
                newPersonComment: "",
                bandName: "",
                personName: "",
                day:"",
                period: "",
                user: "",
                time: "",
                id: "",
                id2: "",
                comments_cnt: 0,
                person_comments_cnt: 0,
                selectedOptions: [],
                selectedOptions2: [],
                selectedDate: null,
                chooseDate: "",
                dayOfWeek: "",
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
                if (this.selectedOptions2.length > 2) {
                    this.selectedOptions2.pop();
                }
            },
            loadComments() {
                axios.get('https://websiteprogrammingteam31.000webhostapp.com/comment.php')
                    .then(response => {
                        this.comments = response.data;
                        this.comments_cnt = this.comments.length;
                    })
                    .catch(error => {
                        console.error('Error loading comments', error);
                    });
                axios.get('https://websiteprogrammingteam31.000webhostapp.com/personComment.php')
                    .then(response => {
                        this.person_comments = response.data;
                        this.person_comments_cnt = this.person_comments.length;
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
            btnClick2(){
                if (!this.personName || !this.selectedDate || this.selectedOptions2.length === 0) {
                    alert('請填寫所有必要欄位！');
                    return;
                }
                const selectedOptionsString = this.selectedOptions2.join('');
                this.newPersonComment = this.personName + " " + this.chooseDate + " " + selectedOptionsString;
                this.addPersonComment();
            },
            handleDateCal(){
                const dateObject = new Date(this.selectedDate);
                const year = dateObject.getFullYear();
                const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
                const day = dateObject.getDate().toString().padStart(2, "0");
                const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                this.dayOfWeek = daysOfWeek[dateObject.getDay()];
                this.chooseDate = `${year}-${month}-${day}`;
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
            addPersonComment() {
                if (this.newPersonComment.trim() !== "") {
                    this.user = localStorage.getItem('user');
                    this.time = this.getCurrentTime();
                    this.id2 = this.person_comments_cnt + 1 ;
                    axios.post('https://websiteprogrammingteam31.000webhostapp.com/personComment.php', {
                        comment_id: this.id2,
                        content: this.newPersonComment,
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
    .alert_color_v2{
        background-color: rgb(250, 221, 177);
    }
    .my_btn1{
        background-color: rgb(246, 250, 177);
    }
    .my_btn2{
        background-color: rgb(250, 221, 177);
    }
</style>
  