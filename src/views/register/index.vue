<template>
  <div class="ds-flex flex-1 pack-center align-center app-container flex-v reg">
    <div class="app-wrapper">
      <div class="ds-flex flex-v pack-center align-center main-container">
        <div class="ds-flex reg_center">
          <flower/>
          <div class="ds-flex flex-v flex-1 content">
            <img class="logo" src="@/assets/images/logo-login.svg">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
              <div class="title">{{ register.title }}</div>
              <div class="ds-flex wrap-wp pack-between">
                <el-form-item :label="register.firstName" prop="firstName">
                  <el-input v-model="ruleForm.firstName" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.lastName" prop="lastName">
                  <el-input v-model="ruleForm.lastName" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.gender" prop="gender">
                  <el-select v-model="ruleForm.gender" placeholder="" style="width:100%;">
                    <el-option
                      v-for="item in register.genderList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="register.birth" prop="birth">
                  <el-date-picker 
                    type="date"
                    :placeholder="register.datePicker"
                    v-model="ruleForm.birth"
                    clearable
                    style="width:100%"
                    value-format="yyyy-MM-dd"
                    :picker-options="pickerOptions">
                  </el-date-picker>
                </el-form-item>
                <el-form-item :label="register.email" prop="email">
                  <el-input v-model="ruleForm.email" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.address" prop="address">
                  <el-input v-model="ruleForm.address" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.mobile" prop="mobile">
                  <el-input v-model="ruleForm.mobile" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.home" prop="home">
                  <el-input v-model="ruleForm.home" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.shop" prop="shop">
                  <el-input v-model="ruleForm.shop" clearable></el-input>
                </el-form-item>
                <el-form-item :label="register.psw" prop="psw">
                  <el-input v-model="ruleForm.psw" clearable type="password"></el-input>
                </el-form-item>
                <el-form-item :label="register.cpsw" prop="cpsw">
                  <el-input v-model="ruleForm.cpsw" clearable type="password"></el-input>
                </el-form-item>
                <el-form-item :label="register.notification" prop="notification">
                  <el-checkbox v-model="ruleForm.notification" style="width:100%;margin-top: 0px;">{{ register.notificationCheck }}</el-checkbox>
                </el-form-item>
                <el-form-item :label="register.news" class="news" prop="news">
                  <el-checkbox v-model="ruleForm.news" style="width:100%;margin-top:10px;">{{ register.newsCheck }}</el-checkbox>
                </el-form-item>
              </div>
              <div class="ds-flex btns">
                <el-form-item class="sub-btn">
                  <el-button class="btn" type="success" @click="submit('ruleForm')" style="margin-right:26px;">{{ $t("register.btn1") }}</el-button>
                </el-form-item>
                <el-form-item class="res-btn">
                  <el-button class="btn" type="info" @click="reset('ruleForm')">{{ $t("register.btn2") }}</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
        <copyright/>
      </div>
    </div>
  </div>
</template>

<script>
//版權信息組件、背景圖大花組件
import Copyright from "@/components/Copyright";
import Flower from "@/components/BackgroundFlower";
export default {
  data() {
    return {
      ruleForm: {
        firstName: "",
        lastName: "",
        gender: "",
        birth: "",
        email: "",
        address: "",
        mobile: "",
        home: "",
        shop: "",
        psw: "",
        cpsw: "",
        notification: true,
        news: true
      },
      /**
       * @description 关闭的时间
       */
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  components: {
    Copyright,
    Flower
  },
  computed: {
    //從i18n計算當前語言庫，生成register
    register() {
      return this.$t("register");
    },
    //配置校驗條件對象，每個input對應一個對象
    rules() {
      //密碼校驗
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error( this.register.pswError1 ));
        } else {
          if (this.ruleForm.cpsw !== '') {
            this.$refs.ruleForm.validateField('cpsw');
          }
          callback();
        }
      };
      //密碼確認校驗
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error( this.register.cpswError2 ));
        } else if (value !== this.ruleForm.psw) {
          callback(new Error( this.register.cpswError1 ));
        } else {
          callback();
        }
      };
      //校驗對象
      let rules_objs = {
        firstName: [
          { required: true,trigger: "change" },
          { min: 2,max: 50,trigger: "change"}
        ],
        lastName: [
          { required: true,trigger: "change" },
          { min: 6,max: 20,trigger: "change"}
        ],
        gender: [
          { required:true,trigger:"change" }
        ],
        birth: [
          { required:true,trigger:"change" }
        ],
        email: [
          { required:true,trigger:"change" },
          { type:'email',trigger:"change" }
        ],
        address: [
          { required:false,trigger:"change" }
        ],
        mobile: [
          { required:true,trigger:"change" }
        ],
        home: [
          { required:false,trigger:"change" }
        ],
        shop: [
          { required:true,trigger:"change" }
        ],
        psw: [
          { required:true,validator:validatePass,trigger:"change" }
        ],
        cpsw: [
          { required:true,validator:validatePass2,trigger:"change" }
        ]
      };
      //循環增加message字段，默認為數組首個對象增加
      for(let item in rules_objs){
        rules_objs[item][0].message = this.register[item] + this.register.inputRequired;
      }
      return rules_objs
    }
  },
  methods: {
    submit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path:'/home' })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    reset(formName){
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

@import "src/styles/ds-flex.scss";
@import "src/styles/mixin.scss";
$mainColor:#b7d970;
.app-container {
  font-family: "Roboto-Regular";
  font-size: 14px;
  padding: 0;
  height: 100%;
}
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  height: 100%;
  overflow-x: hidden;
  background: #f5f6f8;
}
.reg_center {
  margin-top:30px;
  width: 860px;
  height: 853px;
  box-shadow: 0px 7px 70px rgba(90, 97, 105, 0.1);
  border-radius: 10px;
  position: relative;
  .content {
    overflow-x: hidden;
    overflow-y: auto;  
    padding: 30px 45px 30px 45px;
    background: #fff;
    border-radius: inherit;
    position: relative;
    top: 0;
    z-index: 2;
    .logo {
      width: 177px;
      height: 41px;
    }
    .title {
      font-size: 17px;
      font-weight: bold;
      line-height: 18px;
      color: #3d5170;
      margin-top: 36px;
    }
    .el-form-item {
      width: 48%;
      margin-bottom: 0px;
      margin-top:3px;
      /deep/ label {
        line-height: 30px;
        margin-top: 14px;
        font-size: 14px;
        font-weight: normal;
        color: #495057;
      }
      &.is-success {
        /deep/ input {
        //border-color: $mainColor;
        }
      }
    }
    .btns{
      margin-top:20px;
      width: 48%;
      .el-form-item {
        width:auto;
        .el-button {
          font-family: "Roboto-Regular";
          width:120px;
          height:42px;
        }
      }
      .sub-btn{
        /deep/ button {
          background: $mainColor;
          border-color: $mainColor;
          font-size: 16px;
          color: #fff;
          width: 150px;
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
      .res-btn{
        /deep/ button {
          background: #7B8DA8;
          border-color: #7B8DA8;
          font-size: 16px;
          font-family: Roboto-Regular;
          color: #fff;
          width: 150px;
          height: 42px;
        }
        /deep/ button:hover,
        button:focus {
          background: #92a7c7;
          border-color: #92a7c7;
        }
        /deep/ button:active {
          background: #5f6d81;
          border-color: #5f6d81;
        }
      }
    }
  }
}
.el-input {
  /deep/ input {
    height: 36px;
    width: 100%;
  }
  /deep/ input:focus {
    //border-color: $mainColor;
  }
}

//性別選擇框樣式
.el-select {
  /deep/ input {
    height: 36px;
  }
}
/*
//性別下拉樣式
.el-select-dropdown {
  ul {
    .selected {
      color:$mainColor;
    }
  }
}
//日期組件樣式
/deep/ .el-picker-panel {
  background-color: $mainColor !important;
  table {
    background-color: $mainColor;
    tr {
      background-color: $mainColor;
      .current {
        background-color: $mainColor;
        /deep/ span {
          background-color: $mainColor;
          
        }
      }
    }
  }
}
*/
.news {
  .el-checkbox {
    /deep/ span {
      white-space: normal;
      vertical-align: middle;
    }
  }
}

</style>
