<template>
  <div class="word">
    <div class="location box">
      <div v-for="(category, index) in categories" :key="index">
        {{ category.name }}
        <ul v-if="shouldDisplayLinks(category)">
          <li v-for="(link, linkIndex) in category.links" :key="linkIndex">
            <a href="#" @click="handleLinkClick(link)">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: '關於我們',
          links: [
            { label: '社團介紹', url: 'about_us.html' },
            { label: '幹部介紹', url: 'about_executive.html' },
            { label: '器材介紹', url: 'about_equipment.html' }
          ]
        },
        {
          name: '公告',
          links: [
            { label: '所有公告', url: 'all_announcement.html' }
          ]
        },
        {
          name: '活動',
          links: [
            { label: '活動介紹', url: 'activity_introduction.html' },
            { label: '活動日程', url: 'my_calendar.html' }
          ]
        },
        { name: '加入我們', links: [] } // Initially empty, will be populated dynamically
      ]
    };
  },
  methods: {
    shouldDisplayLinks(category) {
      if (category.name === '加入我們') {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === 'true') {
          const user = localStorage.getItem('user');
          if (user) {
            // 動態填充用戶名稱
            category.name = user;
            category.links = [
              { label: '登出', url: 'index.html' },
            ];
          }
        } else {
          category.links = [
            { label: '登入', url: 'log_in.html' },
          ];
        }
      }
      return category.links.length > 0;
    },
    handleLinkClick(link) {
      if (link.label === '登出') {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('user');
      }
      window.location.href = link.url;
    }
  }
};
</script>
  
<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
  .word {
    font-family: 'Noto Sans TC';
  }
  body {
    font-family: 'Perpetua';
  }
  a {
    text-decoration: none;
  }
  
  .location div {
    font-weight: bold;
    font-size: 20px;
    color: white;
    border: 2px solid rgb(101, 104, 112);
    text-align: center;
    width: 10em;
    background-color: rgb(101, 104, 112);
    width: calc(100% / 4);
  }
  
  .location div ul {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: inherit;
    z-index: 100;
    color:black;
  }
  
  .location div:hover ul {
    display: block;
  }
  
  .location div ul li {
    border: 2px solid rgb(101, 104, 112);
    border-style: solid;
    border-width: thin;
    background-color: white;
    width: 100%;
    color: black;
  }
  .location div ul li a {
    color: rgb(101, 104, 112);
  }
  .location div ul li a:hover {
    color: rgb(27, 6, 132);
  }
  
  .location div ul li:hover {
    background-color: rgb(208, 214, 215);
  }
  
  .location {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .box {
    box-sizing: border-box;
  }
  
  @media (max-width: 600px) {
    .location {
      flex-wrap: wrap;
      width: 100%;
    }
  
    .location > div {
      width: 100%;
    }
  
    .location > div ul {
      width: 100%;
      position: relative;
    }
  }
</style>