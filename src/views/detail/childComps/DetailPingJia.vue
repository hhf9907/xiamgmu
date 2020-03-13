<template>
    <div class="pingjia" v-if="Object.keys(rate).length!==0">
        <div class="navbar">
            <div >用户评价</div>
            <span>更多 ></span>
        </div>
        <div class="user">
            <img :src="rate.user.avatar" alt="">
            <div>{{rate.user.uname}}</div>
        </div>
        <div class="discuss">
            {{rate.content}}
        </div>
        <div class="xinghao">
            2020/03/12 {{rate.style}}
        </div>
        <div class="tupian">
            <div class="tupian-item" v-for="item in rate.images">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailPingJia",
    props:{
      rate:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .tupian{
        display: flex;
        padding-left: 30px;
    }
    .tupian-item{
        margin-left: 5px;
    }
    .tupian img{
        width: 70px;
        height: 70px;
    }
    .xinghao{
        font-size: 13px;
        padding: 5px;
        padding-left: 30px;

    }
    .navbar {
        display: flex;
        height: 50px;
        padding-top: 15px;
        border-top: 2px solid #f2f5f8;
        border-bottom: 1px solid #6f6d65;
    }
    .navbar div {
        flex: 1;
        padding-left: 20px;
    }
    .navbar span {
        flex: 1;
        padding-left: 60%;
        font-size: 13px;
    }
    .discuss {
        padding: 10px;
        padding-left: 30px;
        font-size: 14px;
        color: #222;
    }
    .user {
        padding: 15px;
        padding-left: 30px;
        display: flex;
    }
    .user img {
        height: 42px;
        width: 42px;
        border-radius:50%;
        overflow: hidden;
    }
    .user div {
        padding-left: 10px;
        padding-top: 3%;
        color: #222222;
    }
</style>