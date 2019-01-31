<template>
    <div class="background_flower"></div>
</template>
<script>
export default {
    name: 'BackgroundFlower'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$backgroundWidth1200: 720px;
$backgroundWidth1920: 980px;
  .background_flower {
    background-image: url("../../assets/images/background-pic.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    position: absolute;
    right: -($backgroundWidth1200/2);
    top: -($backgroundWidth1200/2);
    width: $backgroundWidth1200;
    height: $backgroundWidth1200;
    z-index: 1;
    opacity: 0.1;
  }
  @media screen and (min-width: 1920px) {
    .background_flower {
      background-image: url("../../assets/images/background-pic.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      position: absolute;
      right: -($backgroundWidth1920/2);
      top: -($backgroundWidth1920/2);
      width: $backgroundWidth1920;
      height: $backgroundWidth1920;
      z-index: 1;
      opacity: 0.1;
    }
  }
</style>


