<template>
  <el-menu class="ds-flex pack-between align-center navbar" mode="horizontal">
    <div class="ds-flex align-center nav-left">
      <div class="ds-flex navlogo">
        <img src="@/assets/images/logo-login.svg" class="navlogo_img">
      </div>
      <div class="ds-flex pack-center align-center lang" @click.stop="switch_lang('zh-HK')">
        <div class="ds-flex pack-center align-center lang_img">
          <img src="@/assets/images/china-ac.svg" class="lang_logo" v-show="this.$i18n.locale == 'zh-HK'">
          <img src="@/assets/images/china.svg" class="lang_logo" v-show="this.$i18n.locale == 'en'">
        </div>
        <div class="slip"></div>
        <div class="ds-flex pack-center align-center lang_img" @click.stop="switch_lang('en')">
          <img src="@/assets/images/english-ac.svg" class="lang_logo" v-show="this.$i18n.locale == 'en'">
          <img src="@/assets/images/english.svg" class="lang_logo" v-show="this.$i18n.locale == 'zh-HK'">
        </div>
      </div>
    </div>
    <div class="ds-flex nav-right align-center">
      <div class="ds-flex align-center">
        <img src="@/assets/images/user-2.svg" class="user_icon">
        <div class="user_name">AmyLada</div>
        <div class="slip"></div>
      </div>
      <router-link to="/login/index">
        <img src="@/assets/images/shut_down.svg" class="shut_down">
      </router-link>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex"
import Cookies from 'js-cookie'

export default {
  components: {},
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    },
    switch_lang(e) {
      this.$i18n.locale = e;
      Cookies.set('language', e);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu::before {
  content: none;
}
.el-menu::after {
  content: none;
}
.navbar {
  height: 60px;
  line-height: 60px;
  border-radius: 0px !important;
  box-shadow: 0px 3px 6px rgba(193, 193, 193, 0.16);
  .nav-left {
    .navlogo {
      width: 152px;
      height: 33px;
      .navlogo_img {
        margin-left: 13px;
        width: 152px;
        height: 34px;
      }
    }
    .lang {
      margin-left: 27px;
      width: 90px;
      .lang_logo {
        margin: 10px;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
      .slip {
        width: 0px;
        height: 14px;
        border: 0.5px solid rgba(236, 236, 236, 1);
        opacity: 1;
      }
    }
  }
  .nav-right {
    .user_icon {
      height: 34px;
      width: 34px;
    }
    .user_name {
      //font-family: Roboto-Regular;
      height: 15px;
      font-size: 15px;
      font-family: Bahnschrift;
      font-weight: normal;
      line-height: 20px;
      color: rgba(61, 81, 112, 1);
      margin: 0 17px 0 14px;
    }
    .slip {
      width: 0px;
      height: 28px;
      border: 1px solid rgba(236, 236, 236, 1);
      opacity: 1;
    }
  }

  .shut_down {
    margin: 0 20px;
    width: 14px;
    height: 14px;
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

