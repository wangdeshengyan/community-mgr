<template>
    
        <div class="basic-layout">
<div class="app-header">
<div class="left">
    <img src="https://img.88tph.com/tphc.1/production/20180523/12528590.jpg" alt="">
    <div class="title">社区团购系统</div>
</div>
<div class="right">
    <div class="hello-msg">
你好 XX,
    </div>
    <div class="logout">退出</div>
</div>
</div>
<div class="app-header-placeholder">

</div>
<div class="app-content">
    <div class="left">
<app-nav/>
    </div>
    <div class="right">
        <router-view/>
    </div>
</div>
        </div>
    
</template>

<script src='./index.js'>

</script>

<style lang="scss" scoped>
@import './index.scss'
</style>