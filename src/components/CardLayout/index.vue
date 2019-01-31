<template>
    <div class="card">
        <div class="head">
            <slot name="header"></slot>
        </div>  
        <div class="body">
            <slot name="body"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardLayout'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.card{
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    .head{
        border-bottom: 1px solid #E0E2E8;
        font-family: 'Roboto-Bold';
        font-size: 17px;
        padding:15px 20px;
        color: #3D5170;
    }
    .body{
        padding: 10px;
    }
}
</style>


