<template>
    <div class="pages_flower_contain">
        <div class="pages_flower" >
            <svg-icon :icon-class="icon" :style="colorsome"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NormalFlower',
    props: {
        obj: {
            type: Object
        },
        icon: {
            type : String,
            default: 'clock'
        }
    },
    computed: {
        colorsome(){
            return this.obj
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pages_flower_contain{
    z-index: 1;
    position: absolute;
    opacity: 0.1;
    top: 0px;
    width: 100%;
    height: 100%;
    padding:30px;
}
.pages_flower{
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
}
.svg-icon {
    height:100%;
    width:100%;
}
</style>