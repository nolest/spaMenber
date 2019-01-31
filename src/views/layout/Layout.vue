<template>
  <div class="app-wrapper">
    <div class="main-container">
      <Navbar/>
      <div class="ds-flex">
        <Sidebar class="sidebar-container"/>
        <AppMain class="ds-flex flex-v flex-1"/>
      </div>
    </div>
  </div>
</template>

<script>

import { Navbar, Sidebar, AppMain} from './components'


export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    device() {
      return this.$store.state.app.device
    }
  },
  methods: {

  }
}
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
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
