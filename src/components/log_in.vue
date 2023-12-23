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
/* eslint-disable */

export default {
    data() {
        return {
            account: '',
            password: '',
        };
    },
    methods: {
        login() {
            //to be implement
            // 发送 GET 请求到 PHP 后端
            axios.get('https://websiteprogrammingteam31.000webhostapp.com/login.php')
            .then(response => {
                console.log("YES");
            })
            .catch(error => {
                console.error('请求失败：', error);
            });
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
