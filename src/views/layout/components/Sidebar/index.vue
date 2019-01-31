<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      @click.native="getff"
      :default-active="$route.path"
      mode="vertical"
      text-color="#3D5170"
      active-text-color="#9FCC43"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
      <!--el-menu-item v-for="(index, item) in sitem" :key="index" :index="index">
        <span>{{ item }} {{ index }}</span>
      </el-menu-item-->
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  methods: {
    getff() {
      console.log(this.$router);
      console.log(this.$router.options.routes);
    }
  }
};
</script>
<style>
.el-menu-item.is-active {
   background-color: #F9F9F9 !important;
}
.el-menu-item:hover {
  background: #F9F9F9 !important;
}
</style>
