<template>
    <Swiper>
        <swiper-item class="swiper-item"
                     v-for="item in itemImg">
                <img :src="item" alt="">
        </swiper-item>
    </Swiper>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    props:{
      itemImg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.swiper-item {
    height: 250px;
    overflow: hidden;
}
</style>