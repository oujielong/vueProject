<template>
  <div class="appTrainBody">
    <!-- <mt-swipe auto=false> -->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <a :href="item.link" target="view_window"><img :src="item.imgSrc" :alt="item.alt"></a>
      </mt-swipe-item>
    </mt-swipe> -->
    <myswitch :imgsUrl="url"></myswitch>
  
    <div class="container-fluid section">
      <div class="row">
        <div class="col-xs-4	col-sm-4 ">
          <!-- 使用图片作为图标 -->
          <router-link  slot="icon" :to="{name:'news.list'}">
            <span class="gridBg gridformat clearfloat"></span>
            <div>新闻列表</div>
          </router-link>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <router-link slot="icon" :to="{name:'photo.share'}">
            <!-- 使用字体图标 -->
            <span class="icon iconfont icon-wodezhuye clearfloat" ></span>
            <span>图文分享</span>
          </router-link>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <router-link slot="icon" :to="{name:'goods.list'}">
              <!-- 使用字体图标 -->
              <span class="icon iconfont icon-wodezhuye clearfloat" ></span>
              <span>商品展示</span>
            </router-link>
        </div>
  
      </div>
      <div class="row">
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格四</span>
          </a>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格五</span>
          </a>
        </div>
        <div class="col-xs-4	col-sm-4 ">
          <a href="#">
            <i class="icon iconfont icon-wodezhuye clearfloat" slot="icon"></i>
            <span>九宫格六</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      // this.$ajax
      //   .get("")
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    data() {
      return {
        url:"home/getlunbotu"
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @sectionMargin: 25px;
  .appTrainBody {
    height: calc(100% - 60px);
    display: block;
    padding-top: 40px;
  }
  
  .row+.row {
    margin-top: @sectionMargin;
  }
  
  .section {
    margin-top: @sectionMargin;
  }

  // 九宫格使用图片置换
  .row {
    div {
      text-align: -webkit-center;
        .gridBg {
          background-image: url("../../../static/picture/greep.png");
          background-repeat: round;
        }
        .gridformat {
          display: block;
          width: 50px;
          height: 50px;
        }
      
    }
  }
</style>

