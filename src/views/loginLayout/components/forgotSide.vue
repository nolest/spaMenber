<template>
  <div class="ds-flex flex-v flex-1 forgot-box">
    <img class="logo" src="@/assets/images/logo-login.svg">
    <div class="tips_big">{{ forgot.tip1 }}</div>
    <div class="tips">{{ forgot.tip2 }}</div>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-form-item prop="email">
        <el-input v-model="ruleForm.email" :placeholder="forgot.inp" clearable></el-input>
      </el-form-item>
    <div class="btn_con">
      <el-form-item>
        <el-button class="btn" type="success" @click="submit('ruleForm')">{{ $t("forgot.btn") }}</el-button>
      </el-form-item>
    </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
          email: ''
      },
      rules:{
          email: [
              { required:true, message:this.$t("forgot.message1"), trigger: 'change' },
              { type:'email', message: this.$t("forgot.message2"), trigger: 'change' }
            ]
      }
    };
  },
  computed: {
    forgot() {
      return this.$t("forgot");
    }
  },
  methods: {
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({ path:'/login/index' })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$mainColor:#b7d970;
.logo {
  margin-bottom: 16px;
  width: 177px;
  height: 41px;
}
.forgot-box {
  padding: 86px 49px 0px 45px;
  .tips_big {
    color: #3d5170;
    font-size: 18px;
    font-weight: bold;
    font-family: Roboto-Regular;
    margin-top: 36px;
  }
  .tips {
    color: #495057;
    font-size: 14px;
    font-family: Roboto-Regular;
    margin-top: 24px;
    margin-bottom: 10px;
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
.btn_con {
  margin-top: 55px;
  /deep/ button {
    background: $mainColor;
    border-color: $mainColor;
    font-size: 16px;
    font-family: Roboto-Regular;
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
</style>
