<template>
    <div id="detail">
        <DetailNavBar class="nav-bar" ></DetailNavBar>
        <Scroll class="center"
                ref="scroll"
                @showtop="showtop"
                :probe-type="3">
            <DetailSwiper :item-img="topImgs"></DetailSwiper>
            <DetailBaseInfo :goods="goods"></DetailBaseInfo>
            <DetailShopInfo :shop="shop"></DetailShopInfo>
            <DetailGoodsInfo :detail-info="detailInfo" :goodImgLoad="goodImgLoad"></DetailGoodsInfo>
            <DetailParamInfo :itemParams="paramInfo"></DetailParamInfo>
            <detail-ping-jia :rate="rate"></detail-ping-jia>
            <detail-tui-jian></detail-tui-jian>
        </Scroll>
        <BackTop :bottom="50" @click.native="backtop" v-show="showTopBar"></BackTop>
    </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailPingJia from "./childComps/DetailPingJia";
  import DetailTuiJian from "./childComps/DetailTuiJian";

  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";

  import {getDetail,Goods,Shop,itemParams,Rate} from "network/detail";
  import {debounce} from "../../common/utils";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      BackTop,
      DetailParamInfo,
      DetailPingJia,
      DetailTuiJian
    },
    data (){
      return {
        iid:null,
        showTopBar:false,
        topImgs:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        rate:{}
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    mounted() {
      //1.图片加载完成的事件监听
      // const refresh = debounce(this.$refs.scroll.refresh,50)
      // this.$bus.$on('goodImgLoad' ,() =>{
      //   refresh()
      // })
      console.log(this.$refs.scroll.scroll.y);
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2。请求数据
      getDetail(this.iid).then(res =>{
        console.log(res);
        //1.获取顶部的图片
        const data  = res.result
        this.topImgs = res.result.itemInfo.topImages
        // console.log(this.topImgs);
        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goods);
        //3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
        //4.保存商品详情穿着效果等信息
        this.detailInfo = data.detailInfo
        //5\保存尺码，图案等信息
        this.paramInfo = new itemParams(data.itemParams.info,data.itemParams.rule)
        //6.保存评论信息
        if(data.rate.cRate!==0){
        this.rate = new Rate(data.rate.list[0].content,
          data.rate.list[0].extraInfo,
          data.rate.list[0].images,
          data.rate.list[0].style,
          data.rate.list[0].user,
          )
        }
      })
    },
    methods:{
      backtop(){  //回到顶部
        this.$refs.scroll.scrollTo(0,0,500)  //500毫秒内回到
      },
      goodImgLoad(){
        this.$refs.scroll.refresh()
      },
      showtop(p){
        if(p<-1500){
          this.showTopBar = true
        }else{
          this.showTopBar = false
        }
      }
    }
  }
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 10;
        background-color: #fff;
        height: 100vh;
    }
    .center{
        height: calc(100% - 46px); /*计算高度*/
    }
    .nav-bar{
        position: relative;
        z-index: 10;
        background-color: #fff;
    }
</style>