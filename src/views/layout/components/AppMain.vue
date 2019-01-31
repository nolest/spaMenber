<template>
  <section class="app-main">
    <router-view/>
  </section>
</template>

<script>

export default {
  name: 'AppMain',
  data(){
    return{
      a : 123
    }
  },

  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<style scoped>
.app-main {
  /*60 = navbar  */
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
  background: #F5F6F8;
}
</style>
