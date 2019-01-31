<template>
    <div class="ds-flex align-center pack-between main-notice">
        <div class="line">{{ text }}</div>
        <div class="ds-flex box align-self-stretch align-center"><svg-icon icon-class="del"/></div>
    </div>
</template>

<script>
export default {
  name : 'Notice',
  props :{
    text : {
      required:false,
      default: 'notice default text'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main-notice{
    padding-left:20px; 
    background:#B7D970;
    color: #fff;
    min-height: 40px; 
    .line{
      margin:10px 0px;
      line-height: 1.5;
    }
    .box{
      transition: color .3s;
      padding: 10px 14px;
      cursor: pointer;
      &:hover{
        color: #3d5170;
      }
    }
}
</style>