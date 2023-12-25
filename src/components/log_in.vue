<template>
    <br>
    <br>
    <br>
    <section id="login" class="word">
      <div class="container">
        <div class="login-form">
          <div class="main-div border">
            <div class="panel">
              <h2 class="mb-2">登入</h2>
              <p class="mb-2">請輸入帳號密碼</p>
            </div>
            <br>
            <form @submit.prevent="login">
              <div class="form-group">
                <input v-model="account" type="text" class="form-control" id="inputEmail" placeholder="使用者帳號">
              </div>
              <div class="form-group">
                <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="密碼">
              </div>
              <button type="submit" class="btn btn-primary btn-block">登入</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        account: '',
        password: '',
      };
    },
    methods: {
      login() {
        axios.post('https://websiteprogrammingteam31.000webhostapp.com/log_in.php', {
            username: this.account,
            password: this.password,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => {
            console.log(response.data);
            const responseData = this.parseQueryString(response.data);

            if (responseData.success === '1') {
                console.log('Message:', responseData.message);
                localStorage.setItem('isLogin', 'true');
                localStorage.setItem('user', this.account);
                window.location.href = 'index.html';
            } else {
                console.log('Message:', responseData.message);
                window.alert('帳號or密碼輸入錯誤');
            }
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
      },
      parseQueryString(queryString) {
        const params = {};
        const pairs = queryString.split('&');

        for (const pair of pairs) {
        const [key, value] = pair.split('=');
        params[key] = decodeURIComponent(value || '');
        }

        return params;
      },
    },
  };
  </script>
  
  <style>
    @import '~bootstrap/dist/css/bootstrap.min.css';
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
  
    .word {
      font-family: 'Noto Sans TC';
    }
    body {
      background-color: #f8f9fa;
    }
    .login-form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .main-div {
      text-align: center;
      padding: 15px;
    }
    .panel {
      background-color: #ffffff;
      color: #0d0000;
      padding: 10px;
      border-radius: 5px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-control {
      border-radius: 4px;
    }
    button.btn-primary {
      background-color: #024287;
    }
    button.btn-primary:hover {
      background-color: #0056b3;
    }
  </style>
  