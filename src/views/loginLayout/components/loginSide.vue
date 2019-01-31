<template>
  <div class="ds-flex flex-v flex-1 login-box">
    <img class="logo" src="@/assets/images/logo-login.svg">
    <div class="tips">{{ login.tip1 }}</div>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" :placeholder="login.inp1" clearable></el-input>
      </el-form-item>
      <div class="tips">{{ login.tip2 }}</div>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" :placeholder="login.inp2" clearable type="password"></el-input>
      </el-form-item>
      <div class="ds-flex pack-between control">
        <div class="rem">
          <el-checkbox v-model="checked">{{ $t("login.rem") }}</el-checkbox>
        </div>
        <div class="forgot">
          <router-link to="forgot">{{ $t("login.fog") }}</router-link>
        </div>
      </div>
      <div class="btn_con">
          <el-form-item>
              <el-button class="btn" type="success" @click="submit('ruleForm')">{{ $t("login.btn") }}</el-button>
            </el-form-item>
      </div>
      <div class="ds-flex sign">
        <div>{{ $t("login.signTip") }}</div>
        <div class="spe">
          <router-link to="/register">{{ $t("login.toSign") }}</router-link>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      ruleForm: {
          username : '',
          password : '',
      },
      rules:{
          username: [
              { required:true, message:this.$t("login.message1"), trigger: 'change' },
              { min: 2, max: 50, message: this.$t("login.message2"), trigger: 'change' }
          ],
          password: [
              { required:true, message:this.$t("login.message3"), trigger: 'change' },
              { min:6, max: 20, message:this.$t("login.message4"), trigger: 'change'}
          ]
      }
    };
  },
  computed: {
    login() {
      return this.$t("login");
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
      }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$mainColor:#b7d970;
.logo {
  margin-bottom: 16px;
}
.login-box {
  padding: 86px 49px 0px 45px;
  .tips {
    color: #495057;
    margin-top: 24px;
    margin-bottom: 10px;
    font-family: Roboto-Regular;
  }
}
img {
  width: 177px;
  height: 41px;
}
.el-input {
  /deep/ input {
    height: 36px;
    width: 100%;
  }
  /deep/ input:focus {
    //border-color:$mainColor;
  }
}
.control {
  margin-top: 20px;
  color: #9ca8bb;
  /deep/ span {
    color: #9ca8bb;
  }
  .forgot {
    font-family: Roboto-Regular;
    font-size: 14px;
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
.sign {
  margin-top: 14px;
  font-size: 14px;
  font-family: Roboto-Regular;
  color: #9ca8bb;
  margin-bottom: 20px; 
  .spe {
    color: $mainColor;
    margin: 0px 4px;
  }
}
</style>
