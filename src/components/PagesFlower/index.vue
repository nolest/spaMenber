<template>
    <div class="pages_flower_contain">
        <div class="pages_flower" :style="bgurl"></div>
        <!--  :style="bgurls" -->
    </div>
</template>
<script>
export default {
    name: 'PagesFlower',
    props: {
        bgurl: {
            type: String,
            default: require("@/assets/images/background-pic.png")
        }
    },
    computed: {
        bgurls(){
            return {
                backgroundImage : bgurl
            }
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pages_flower_contain{
    z-index: 1;
    position: absolute;
    opacity: 0.2;
    top: 0px;
    width: 100%;
    height: 100%;
    padding: calc(((100vw - 1200px)/720*80) + 30px);
    min-width:550px;
}
.pages_flower{
    background-image: url("../../assets/images/background-pic.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
}
@media screen and (min-width:1920px) {
    //.pages_flower_contain {padding:110px;}
}
@media screen and (min-width:1200px) { 
    .pages_flower_contain{padding: 30px;}
}
</style>