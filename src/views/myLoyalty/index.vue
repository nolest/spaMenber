<template>
  <div class="ds-flex flex-1 app-container flex-v loyalty">
    <div class="title">{{ loyalty.title }}</div>
    <div class="contain">
      <cardlayout>
        <template slot="header">
          <span>{{ loyalty.title2 }}</span>
        </template>
        <template slot="body">
          <div class="ds-flex wrap-wp item-con">
            <div class="item">{{ loyalty.item1 }}Mn Ivy</div>
            <div class="item">{{ loyalty.item2 }}2016-04-20</div>
            <div class="item">{{ loyalty.item3 }}Fabulous Diva</div>
            <div class="item">{{ loyalty.item4 }}1,553.00</div>
            <div class="item">{{ loyalty.item5 }}2018-03-31</div>
          </div>
        </template>
      </cardlayout>
      <div class="tabs_contain">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            :label="loyalty[`tabs`+(index+1)]"
            :name="(index + '')"
            v-for="(item,index) in list"
            :key="index"
          >
            <div class="bel">
              <div class="ds-flex pack-center align-center col">
                <div
                  class="ds-flex pack-center flex-1"
                  v-for="(item_inner,idx) in item.col"
                  :key="idx"
                >{{ item_inner }}</div>
              </div>
              <div class="ds-flex flex-v row">
                <nflower :icon="icon" :obj="{ color:'#9FCC43' }"/>
                <div
                  class="ds-flex pack-center align-center each_row"
                  v-for="(item_sec,idx) in item.object"
                  :key="idx"
                >
                  <div
                    class="ds-flex pack-center flex-1"
                    v-for="(item_thr,idxx) in item_sec.obj"
                    :key="idxx"
                    v-html="item_thr"
                  ></div>
                </div>
              </div>
            </div>
            <div class="ds-flex pack-end align-center page">
              <el-pagination
                current-page.sync="2"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000"
              ></el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import cardlayout from "@/components/CardLayout";
import Nflower from "@/components/NormalPagesFlower";
import axios from "@/utils/api";

export default {
  data() {
    return {
      activeList: [],
      activeName: "0",
      list: [],
      icon: "loyalty-or"
    };
  },
  name: "myLoyalty",
  components: {
    cardlayout,
    Nflower
  },
  computed: {
    /**
     * @description
     * i18n国际化
     */
    loyalty() {
      return this.$t("loyalty");
    }
  },
  methods: {
    handleClick() {
      console.log(123);
    }
  },
  /**
   * @description
   * 获取门店信息
   */
  mounted() {
    axios
      .get("/loyalty")
      .then(res => {
        this.$data.list = res.data.list;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
  font-family: "Roboto-Regular";
  font-size: 14px;
  padding: 0;
  overflow-y: scroll;
  margin-right: -18px;
  //min-width: 998px;
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
}
.loyalty {
  .title {
    font-family: "Roboto-Black";
    font-size: 24px;
    font-weight: bold;
    color: #3d5170;
    padding: 17px 20px;
  }
  .contain {
    margin: 0px 20px 20px 20px;
    .item-con {
      .item {
        font-size: 14px;
        color: #7b8da8;
        width: 33%;
        padding: 5px 10px;
      }
    }
    .tabs_contain {
      height: 50px;
      background: #fff;
      box-shadow: 0px 7px 70px rgba(90, 97, 105, 0.1);
      border-radius: 10px;
      .bel {
        background: #fff;
        border-radius: 10px;
        .col {
          border-radius: 10px 10px 0px 0px;
          background: #f9f9f9;
          color: #3d5170;
          font-size: 14px;
          height: 42px;
        }
        .row {
          position: relative;
          :last-child {
            border-radius: 0px 0px 10px 10px;
          }
          .each_row {
            color: #7b8da8;
            font-size: 12px;
            min-height: 42px;
            padding: 10px 5px;
            background: #f9f9f9;
            &:nth-of-type(2n) {
              background: #ffffff;
            }
          }
        }
      }
      .page{
        background: #fff;
        height: 42px;
        margin: 15px 0px 30px 0px;
        border-radius: 10px;
        padding-right: 30px;
      }
      .el-tabs {
        font-family: "Roboto";
        /deep/ .el-tabs__item {
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 17px;
          color: #9ca8bb;
          &.is-active {
            color: #9fcc43;
          }
          &:hover {
            color: #9fcc43;
          }
        }
        /deep/ .el-tabs__nav {
        }
        /deep/ .el-tabs__nav-wrap {
          padding: 0px 20px;
        }
        /deep/ .el-tabs__nav-wrap::after {
          background: none;
        }
        /deep/ .el-tabs__active-bar {
          background-color: #9fcc43;
          height: 3px;
        }
      }
    }
  }
}
</style>
