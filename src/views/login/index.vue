<template>
  <div class="ds-flex flex-1 pack-center align-center app-container flex-v home">
    <layout/>
  </div>
</template>

<script>
import layout from '@/views/loginLayout/loginLayout'
export default {
  name: 'Login',
  components: {
    layout
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container{
  font-family: 'Roboto-Regular';
  font-size:14px;
  padding: 0;
  height: 100%;
}
</style>
