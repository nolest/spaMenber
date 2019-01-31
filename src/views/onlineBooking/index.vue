<template>
  <div class="ds-flex flex-1 app-container flex-v onlineBooking">
    <notice :text="onlineBooking.notice"/>
    <div class="title">{{ onlineBooking.title }}</div>
    <div class="tabs_contain">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(shop, index) in res.shopType"
          :key="shop.type"
          :label="onlineBooking[`tabs`+(index+1)]"
          :name="shop.name"
        >
          <div class="ds-flex panel-box">
            <div class="ds-flex flex-v flex-2 side left align-self-start">
              <nflower :icon="icon" :obj="{ color:'#9FCC43' }"/>
              <div class="ds-flex flex-v left_contain">
                <div class="ds-flex shop">
                  <img :src="shop.image">
                  <div class="ds-flex flex-v info">
                    <div>{{ onlineBooking.info1 }}{{ shop.location }}</div>
                    <div>{{ onlineBooking.info2 }}{{ shop.tel }}</div>
                    <div>{{ onlineBooking.info3 }}{{ shop.opening }}</div>
                  </div>
                </div>
                
                  <div class="ds-flex date">
                    <div class="flex-1" style="margin-right:10px;">
                      <div class="info-title">{{ onlineBooking.info4 }}</div>
                      <el-form-item prop="date">
                        <el-date-picker
                          type="date"
                          :placeholder="onlineBooking.pchold"
                          v-model="ruleForm.date"
                          clearable
                          style="width:100%"
                          value-format="yyyy-MM-dd"
                          :picker-options="pickerOptions"
                          @change="callBackChangeDate"
                        ></el-date-picker>
                      </el-form-item>
                    </div>
                    <div class="flex-1" style="margin-left:10px;"></div>
                  </div>
                  <div class="ds-flex flex-v group">
                    <div class="ds-flex top">
                      <div class="top_number flex-1" style="margin-right:10px;">
                        <div class="info-title">{{ onlineBooking.info5 }}</div>
                        <el-form-item prop="guest">
                          <el-select
                            v-model="ruleForm.guest"
                            :disabled="!ruleForm.date"
                            placeholder
                            style="width:100%;"
                          >
                            <el-option
                              v-for="item in shop.guest"
                              :key="item"
                              :label="item"
                              :value="item"
                              @change="callBackChangeGuest"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                      <div class="top_treatment flex-1" style="margin-left:10px;">
                        <div class="info-title">{{ onlineBooking.info6 }}</div>
                        <el-form-item prop="treatment">
                          <el-select
                            v-model="ruleForm.treatment"
                            :disabled="!ruleForm.date"
                            placeholder
                            style="width:100%;"
                          >
                            <el-option
                              v-for="item in shop.treatment"
                              :key="item.id"
                              :label="item.text"
                              :value="item.id"
                              @change="callBackChangeTreatment"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </div>
                  </div>
                  <el-form-item prop="timeList">
                    <div class="therapist" v-if="getTherapist">
                      <div class="info-title">{{ onlineBooking.info7 }}</div>
                      <!--div>
                        <el-checkbox label="index" border v-for="(pist ,index) in therapistList" :key="pist.id" :value="pist.id">{{ pist.name }}</el-checkbox>
                      </div-->
                      <el-tabs type="border-card" v-model="therapist">
                        <el-tab-pane
                          :label="pist.name"
                          v-for="(pist,index) in therapistList"
                          :key="pist.id"
                          :name="index+ ''"
                        >
                          <span slot="label">
                            {{ pist.name }}
                            <span class="nums" v-if="pist.num">{{ pist.num }}</span>
                          </span>
                          <div class="times_pane">
                            <div v-for="time in pist.time" :key="time.tag">
                              <div>{{ onlineBooking[`timeTag`+time.tag] }}</div>

                              <el-checkbox-group
                                v-model="ruleForm.timeList"
                                v-if="time.list.length !=0"
                                @change="checkboxGroupChange"
                              >
                                <el-checkbox
                                  :label="eachTime.id"
                                  v-for="eachTime in time.list"
                                  :key="eachTime.id"
                                  :value="eachTime.id"
                                  :disabled="eachTime.disable"
                                >{{ eachTime.text }}</el-checkbox>
                              </el-checkbox-group>
                            </div>
                          </div>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </el-form-item>
                  <div class="btn_con" v-if="getTherapist">
                    <el-form-item>
                      <el-button
                        class="btn"
                        type="success"
                        @click="submit('ruleForm')"
                      >{{ onlineBooking.btn }}</el-button>
                    </el-form-item>
                  </div>
              </div>
            </div>
            <div class="ds-flex flex-v flex-1 side right">
              <cardlayout>
                <template slot="header"><span>{{ onlineBooking.item }}</span></template>
                <template slot="body">
                  <div class="ds-flex flex-v">
                    <div class="info">{{ onlineBooking.itemInfo1 }}:Flagship Spa IMS</div>
                    <div class="info">{{ onlineBooking.itemInfo2 }}:Oct/11/2018(Tue)</div>
                    <div class="ds-flex flex-v tips">
                      <span>Purifying Treatment for the back</span>
                      <span>(Time: 30mins,Price: HK$240)</span>
                      <span>Therapist: Amy</span>
                      <span>Room: 4a(1)</span>
                      <span>Status: Pending</span>
                      <span>Time: 20:00-21:00</span>
                    </div>
                    <div class="price">
                      {{ onlineBooking.itemInfo3 }}: HK$6000
                    </div>
                    <div class="btn_con">
                      <el-form-item>
                        <el-button
                          class="btn"
                          type="success"
                          @click="confirm('ruleForm')"
                        >{{ onlineBooking.itemInfo4 }}</el-button>
                      </el-form-item>                      
                    </div>
                  </div>
                </template>
              </cardlayout>
              <cardlayout>
                <template slot="header"><span>{{ onlineBooking.loca }}</span></template>
              </cardlayout>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      </el-form>
    </div>
  </div>
</template>
<script>
import Notice from "../layout/components/Notice";
import Nflower from "@/components/NormalPagesFlower";
import axios from "@/utils/api";
import cardlayout from "@/components/CardLayout";

export default {
  data() {
    return {
      activeName: "shop",
      therapist: "",
      icon: "clock-or",
      therapistList: [],
      /**
       * @description
       * 首次异步请求渲染对象
       */
      res: {
        shopType: []
      },
      /**
       * @description 
       * 表单提交对象
       * 日期 date
       * 客人数量 guest
       * 理疗项目 treatment
       * 技师 therapist
       * 选择时间的列表 timeList
       */
      ruleForm: {
        date: "",
        guest: "",
        treatment: "",
        therapist: "",
        timeList: []
      },
      /**
       * @description
       * 关闭的时间，该函数会插入进每一个日期的钩子里，执行N次
       * 该处的运算不应过多，影响时间组件的打开速度
       */
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 86400000;
        }
      }
    };
  },
  name: "onlineBooking",
  components: {
    Notice,
    Nflower,
    cardlayout
  },
  computed: {
    /**
     * @description
     * i18n国际化
     */
    onlineBooking() {
      return this.$t("onlineBooking");
    },
    /**
     * @description
     * 获取技师列表
     * 当表单对象date/guest/treatment变化时调用
     */
    getTherapist() {
      let that = this.ruleForm;
      if (that.date && that.guest && that.treatment) {
        this.resetTreatpist();
        return true;
      } else return false;
    },
    /** 
     * @description
     * 配置校驗條件對象
    */
    rules() {
      var validatePass = (rule, value, callback) => {
        if (value.length == 0) {
          callback(new Error(this.onlineBooking.info1));
        } else {
          if (value.length > 0) {
            callback();
          }
        }
      };
      //校驗對象
      let rules_objs = {
        date: [{ required: true, trigger: "change" }],
        guest: [{ required: true, trigger: "change" }],
        treatment: [{ required: true, trigger: "change" }],
        timeList: [
          { required: true, validator: validatePass, trigger: "change" }
        ]
      };

      //循環增加message字段，默認為數組首個對象增加
      let i = 3;
      for(let item in rules_objs){
        console.log();
        rules_objs[item][0].message = this.onlineBooking[`info`+ ++i] + this.onlineBooking.inputRequired;
      }
      i = 3;

      return rules_objs;
    }
  },
  methods: {
    /**
     * @description
     * 更改门店种类时触发，重设表单提交对象
     */
    handleClick(tab, event) {
      this.resetRules();
    },
    /**
     * @description
     * 更改日期时触发，重设客人数量、理疗项目对象
     */
    callBackChangeDate() {
      this.ruleForm.guest = "";
      this.ruleForm.treatment = "";
    },
    /**
     * @description
     * 更改客人数量是触发，重设技师对象
     */
    callBackChangeGuest() {
      this.resetTreatpist();
    },
    /**
     * @description
     * 更改理疗项目时触发，重设技师对象
     */
    callBackChangeTreatment() {
      this.resetTreatpist();
    },
    /**
     * @description
     * 重设提交对象函数
     */
    resetRules() {
      this.ruleForm = {
        date: "",
        guest: "",
        treatment: "",
        therapist: "",
        timeList: []
      };
    },
    /**
     * @description
     * 异步请求获取技师信息
     */
    resetTreatpist() {
      axios.post("/getThetapistByShop", { try: 234 }).then(res => {
        this.ruleForm.timeList = [];
        this.$data.therapistList = [];
        this.$data.therapistList = res.data.therapist;
      });
    },
    /**
     * @description
     * 表单提交
     * 成功内应发起post请求
     */
    submit(formName) {
      console.log(formName);
      console.log(this.$refs);
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("book finish");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    checkboxGroupChange() {
      return
      for(let i =0; i <this.therapistList.length ;i++){
        this.therapistList[i].num = this.getNums(this.therapistList[i].time)
      }
    },
    getNums(timearr){
      let j = 0;
      console.log(timearr)
      for (let i = 0; i< timearr.length ; i++){
        console.log(timearr[i])
        for(let k in timearr[i].list){
          console.log(timearr[i].list[k].id.indexOf(this.ruleForm.timeList));
          for(let h = 0; h< this.ruleForm.timeList.length; h ++){
            if(timearr[i].list[k].id == this.ruleForm.timeList[h]){
              console.log(timearr[i].list[k].id);
              console.log(this.ruleForm.timeList[h]);
              debugger
              j = j + 1;
            }
          }
        }
      }
      return j
    }
  },
  /**
   * @description
   * 获取门店信息
   */
  mounted() {
    axios.post("/onlineBookingReady", { try: 123 }).then(res => {
      this.$data.res.shopType = [];
      this.$data.res = res.data;
      console.log(res);
    });
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-tabs {
  color: #b7d970;
}
.el-form-item{
  margin-bottom:0px;
}
.app-container {
  font-size: 14px;
  padding: 0;
  overflow-y: scroll;
  margin-right: -18px;
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
}
.onlineBooking {
  min-width: 540px;
}
.title {
  font-family: "Roboto-Black";
  font-size: 24px;
  font-weight: bold;
  color: #3d5170;
  padding: 17px 20px;
}
.tabs_contain {
  margin: 0px 20px;
  height: 50px;
  background: #fff;
  box-shadow: 0px 7px 70px rgba(90, 97, 105, 0.1);
  border-radius: 10px;
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
  .panel-box {
    .side {
      background: #fff;
      border-radius: 10px;
    }
    .left {
      margin-right: 20px;
      position: relative;
      margin-bottom:40px;
      .left_contain {
        z-index: 2;
        padding: 20px;
        .info-title {
          margin: 20px 0px 10px 0px;
          color: #495957;
        }
        .shop {
          img {
            width: 170px;
            height: 120px;
            border-radius: 6px;
          }
          .info {
            font-family: "Roboto-Regular";
            color: #7b8da8;
            margin-left: 15px;
            font-size: 14px;
            line-height: 1.8;
          }
        }
        .date {
          padding-bottom: 25px;
          border-bottom: 1px dashed #b9bbbe;
        }
        .therapist {
          .el-tabs {
            border: none;
            box-shadow: none;
            background: none;
            /deep/ .el-tabs__header {
              background: none;
              border-bottom: none;
            }
            /deep/ .el-tabs__nav {
              background: none;
              white-space: normal;
            }
            /deep/ .el-tabs__nav-wrap {
              padding: 0px;
              background: none;
            }
            /deep/ .el-tabs__item {
              border: 1px solid #becad6;
              margin: 0px 18px 14px 0px;
              border-radius: 4px;
              height: 38px;
              padding: 10px 23px;
              line-height: 1;
              color: #b9bbbe;
              background: #fff;
              /deep/ &.is-active {
                border: 1px solid #1989fa;
                color: #1989fa;
              }
              .nums {
                position: absolute;
                right: 5px;
                top: 12px;
                margin-left: 4px;
                background: #faf;
                border-radius: 50%;
                padding: 1px 4px;
                min-width: 8px;
                min-height: 14px;
                background: #9fcc43;
                color: #fff;
                font-size: 10px;
                line-height: 1;
              }
            }
          }
          /deep/ .el-tabs__content {
            padding: 0px;
          }
          .times_pane {
            background: #f5f7fa;
            padding: 15px 22px 5px 22px;
            color: #7b8da8;
            font-size: 12px;
            .el-checkbox {
              color: #3d5170;
              width: 140px;
              margin: 8px 0px 18px 0px;
              /deep/ .el-checkbox__inner {
                border-radius: 50%;
              }
              &.is-checked {
                /deep/ .el-checkbox__label {
                  color: #3d5170;
                }
              }
            }
          }
        }
        .btn_con{
          margin-top:25px;
        }
      }
    }
    .right {
      background: none;
      .info{
        color: #7B8DA8;
        margin-left:10px;
        font-family: 'Roboto-Regular';
        margin-bottom:5px;
      }
      .tips{
        padding: 10px;
        background: #F5F7FA;
        color: #3D5170;
        font-size:12px;
        line-height: 1.5;
      }
      .price{
        color: #7B8DA8;
        padding-left:10px;
        font-family: 'Roboto-Regular';
        margin:15px 0px 0px 0px;
          padding-bottom: 15px;
          border-bottom: 1px dashed #b9bbbe;
      }
      .btn_con{
        margin: 15px 0px 10px 10px;
      }
    }
        .btn_con {
          /deep/ button {
            background: #9fcc43;
            border-color: #9fcc43;
            font-size: 16px;
            font-family: Roboto-Regular;
            color: #fff;
            width: 120px;
            height: 42px;
          }
          /deep/ button:hover,
          button:focus {
            background: #c5e979;
            border-color: #c5e979;
          }
          /deep/ button:active {
            background: #aece6a;
            border-color: #aece6a;
          }
        }
  }
}
</style>
