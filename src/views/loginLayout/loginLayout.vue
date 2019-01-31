<template>
  <div class="app-wrapper">
    <div class="ds-flex flex-v pack-center align-center main-container">
      <div class="ds-flex login_center">
        <flower/>
        <div class="ds-flex flex-1 left">
          <img src="@/assets/images/login_pic.png">
        </div>
        <div class="ds-flex flex-1 right">
          <router-view/>
        </div>
      </div>
      <copyright/>
    </div>
  </div>
</template>

<script>
import { LoginSide, ForgotSide } from "./components";
import Copyright from "@/components/Copyright";
import Flower from "@/components/BackgroundFlower";

export default {
  name: "Layout",
  components: {
    default: LoginSide,
    forgot:ForgotSide,
    Copyright,
    Flower
  },
  computed: {
    device() {
      return this.$store.state.app.device;
    }
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/ds-flex.scss";
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  height: 100%;
  overflow-x: hidden;
  background:#F5F6F8;
}
.login_center {
  margin-top:30px;
  width: 860px;
  height: 560px;
  box-shadow: 0px 7px 70px rgba(90, 97, 105, 0.1);
  border-radius: 10px;
  position: relative;
  .left {
    position: relative;
    top: 0;
    z-index: 2;
  }
  .right {
    overflow-x:hidden;
    overflow-y:auto;
    border-radius: 10px;
    background: #fff;
    position: relative;
    top: 0;
    z-index: 2;
  }
}
</style>
