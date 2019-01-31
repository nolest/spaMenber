<template>
  <div class="ds-flex flex-1 app-container flex-v home">
    <notice/>
    我是一个forgot
  </div>
</template>

<script>
import Notice from '../layout/components/Notice'
export default {
  name: 'Forgot',
  components: {
    Notice
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container{
  font-family: 'Roboto-Regular';
  font-size:14px;
  padding: 0;
}
</style>
