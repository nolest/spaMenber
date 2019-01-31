<template>
  <div class="ds-flex flex-1 app-container flex-v home">
    <flower :bgurl='furl'/>
    <div class="ds-flex wrap-wp pack-center align-center wrap-pack-center container">
      <div class="ds-flex pack-center align-center block" v-for="route in routes"
        :key="route.path"
        v-if="!route.hidden&&route.children.length==1&&route.path!='/'">
      <router-link
        class="ds-flex pack-center align-center flex-1"
        style="height:100%"
        :to="route.path"
        >
          <item :iconac="route.children[0].meta.icon+'-or'"/>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Notice from "../layout/components/Notice";
import Item from "./components/Item";
import Flower from "@/components/PagesFlower";

export default {
  //传入图片路径
  data(){
    return {
      furl:'url('+ require('@/assets/images/background-pic.png')+')'
    }
  },
  name: "Home",
  components: {
    Notice,
    Item,
    Flower
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
  font-family: "Roboto-Regular";
  font-size: 14px;
  padding: 0;
}
.container {
  height: 100%;
  position: relative;
  top: 0px;
  z-index: 2;
  min-width:550px;
}
.block {
  margin:calc(((100vw - 1200px)/720*15) + 10px);
  //屏幕宽度 - sidebar宽度 - 5个空隙
  width: calc((100vw - 220px - 50px*5)/4);
  height: calc((100vw - 220px  - 50px*5)/4/9*8);
  min-width: 220px;
  min-height: 182px;
  background: #9fcc43;
  box-shadow: 0px 7px 30px rgba(161, 161, 161, 0.2);
  //最小值时1200与1920相差720，720变化对相应最小圆角40~60差值为20，40加上比值乘以40
  border-radius: calc(((100vw - 1200px)/720*20) + 40px) ;
  transition: border-color .3s,background-color .3s,color .3s,border .3s;
  svg {
    height: calc(((100vw - 1200px)/720*47) + 84px);
    width: calc(((100vw - 1200px)/720*47) + 84px);
    transition: width .3s,height .3s;
    /deep/ use {
    background: #fff;
      fill: #fff;
    }
  }
  cursor: pointer;
  &:hover {
    background: #c5e979;
  }
}
@media screen and ( min-width:1920px) {
  .block {
    margin:25px;
    width: 360px;
    height: 320px;
    background: #9fcc43;
    box-shadow: 0px 7px 30px rgba(161, 161, 161, 0.2);
    border-radius: 60px;
    svg {
      height: 131px;
      width: 131px;
      /deep/ use {
        fill: #fff;
      }
    }
  } 
}
@media screen and (max-width:1200px) {
  .block {
    margin:10px;
    width: 220px;
    height: 182px;
    background: #9fcc43;
    box-shadow: 0px 7px 30px rgba(161, 161, 161, 0.2);
    border-radius: 40px;
    svg {
      height: 84px;
      width: 84px;
      /deep/ use {
        fill: #fff;
      }
    }
  }  
}
</style>
