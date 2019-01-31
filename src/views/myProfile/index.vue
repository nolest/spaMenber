<template>
  <div class="ds-flex flex-1 app-container flex-v profile">
    <div class="contain">
      <cardlayout>
        <template slot="header">
          <span>{{ profile.title }}</span>
        </template>
        <template slot="body">
          <div class="ds-flex flex-v flex-1 content" style="position:relative;">
            <nflower :icon="icon" :obj="{ color:'#9FCC43' }"/>
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" style="padding:0px 10px 20px 10px;z-index:2">
              <div class="ds-flex wrap-wp pack-between">
                <el-form-item :label="profile.firstName" prop="firstName">
                  <el-input v-model="ruleForm.firstName" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.lastName" prop="lastName">
                  <el-input v-model="ruleForm.lastName" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.gender" prop="gender">
                  <el-select v-model="ruleForm.gender" placeholder style="width:100%;">
                    <el-option
                      v-for="item in profile.genderList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="profile.birth" prop="birth">
                  <el-date-picker
                    type="date"
                    :placeholder="profile.datePicker"
                    v-model="ruleForm.birth"
                    clearable
                    style="width:100%"
                    value-format="yyyy-MM-dd"
                    :picker-options="pickerOptions"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item :label="profile.email" prop="email">
                  <el-input v-model="ruleForm.email" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.address" prop="address">
                  <el-input v-model="ruleForm.address" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.mobile" prop="mobile">
                  <el-input v-model="ruleForm.mobile" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.home" prop="home">
                  <el-input v-model="ruleForm.home" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.shop" prop="shop">
                  <el-input v-model="ruleForm.shop" clearable></el-input>
                </el-form-item>
                <el-form-item :label="profile.psw" prop="psw">
                  <el-input v-model="ruleForm.psw" clearable type="password"></el-input>
                </el-form-item>
                <el-form-item :label="profile.cpsw" prop="cpsw">
                  <el-input v-model="ruleForm.cpsw" clearable type="password"></el-input>
                </el-form-item>
              </div>
              <div class="ds-flex btns">
                <el-form-item class="sub-btn">
                  <el-button
                    class="btn"
                    type="success"
                    @click="submit('ruleForm')"
                    style="margin-right:26px;"
                  >{{ $t("profile.btn1") }}</el-button>
                </el-form-item>
                <el-form-item class="res-btn">
                  <el-button
                    class="btn"
                    type="info"
                    @click="reset('ruleForm')"
                  >{{ $t("profile.btn2") }}</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </template>
      </cardlayout>
    </div>
  </div>
</template>

<script>
import cardlayout from "@/components/CardLayout";
import Nflower from "@/components/NormalPagesFlower";
export default {
  data() {
    return {
      icon: "profile-or",
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
        cpsw: ""
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
  name: "myProfile",
  components: {
    cardlayout,
    Nflower
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ path: "/home" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    /**
     * @description
     * i18n国际化
     */
    profile() {
      return this.$t("profile");
    },
    //配置校驗條件對象，每個input對應一個對象
    rules() {
      //密碼校驗
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error(this.profile.pswError1));
        } else {
          if (this.ruleForm.cpsw !== "") {
            this.$refs.ruleForm.validateField("cpsw");
          }
          callback();
        }
      };
      //密碼確認校驗
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error(this.profile.cpswError2));
        } else if (value !== this.ruleForm.psw) {
          callback(new Error(this.profile.cpswError1));
        } else {
          callback();
        }
      };
      //校驗對象
      let rules_objs = {
        firstName: [
          { required: true, trigger: "change" },
          { min: 2, max: 50, trigger: "change" }
        ],
        lastName: [
          { required: true, trigger: "change" },
          { min: 6, max: 20, trigger: "change" }
        ],
        gender: [{ required: true, trigger: "change" }],
        birth: [{ required: true, trigger: "change" }],
        email: [
          { required: true, trigger: "change" },
          { type: "email", trigger: "change" }
        ],
        address: [{ required: false, trigger: "change" }],
        mobile: [{ required: true, trigger: "change" }],
        home: [{ required: false, trigger: "change" }],
        shop: [{ required: true, trigger: "change" }],
        psw: [{ required: true, validator: validatePass, trigger: "change" }],
        cpsw: [{ required: true, validator: validatePass2, trigger: "change" }]
      };
      //循環增加message字段，默認為數組首個對象增加
      for (let item in rules_objs) {
        rules_objs[item][0].message =
          this.profile[item] + this.profile.inputRequired;
      }
      return rules_objs;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$mainColor:#b7d970;
.app-container {
  font-family: "Roboto-Regular";
  font-size: 14px;
  padding: 0;
}
.profile {
  .contain {
    margin: 20px;
    .el-form-item {
      width: 48%;
      margin-bottom: 0px;
      margin-top: 3px;
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
</style>
