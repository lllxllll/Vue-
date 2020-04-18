<template>
    <header class="header">
        <a href="">
            <img src="logo1.png" alt="" class="logo">
        </a>
        <div class="title">
            <h1>我的space</h1>
            <h2>你好，宇航员！欢迎来到我的space</h2>
        </div>

        <nav class="nav">
            <ul>
                <li>
                    <router-link to="/" exact>首页</router-link>
                </li>
                <li>
                    <router-link to="/trace">足迹</router-link>
                </li>
                <li>
                    <router-link to="/add" exact>日志</router-link>
                </li>
                <li>
                    <router-link to="/pro" exact>项目</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default {
        name:'BlogHeader',
    }
</script>

<style scoped>
    /*.header *{*/
    /*    background: white;*/
    /*}*/
    .header{
        background: white;
        overflow: hidden;
        padding: 20px 0px;
        border-bottom: 1px solid #cccccc;
    }
    .logo{
        float: left;
        width:70px;
    }
    /*旋转图片的语法*/
    .logo:hover{
        transform: rotate(360deg);
        transition: transform 2s;
    }
    .title{
        float: left;
        /*添加阴影效果*/
        box-shadow: 5px 5px 2px #aaaaaa ;
    }
    .title h1{
        font-size: 26px;
        margin: 0 10px;
    }
    .title h2{
        font-size: 18px;
        margin: 0 10px;
        font-style: italic;
        font-weight: normal;
    }
    .nav ul{
        float: right;
        padding: 0;
        margin: 10px;
    }

    .nav ul li{
        display: inline;
    }

    .nav ul li a{
        padding: 5px 15px;
    }
    .nav ul li a:last-child{
        padding-right: 0;
    }

    .router-link-active{
        background: rgba(255,255,255,0.8);
        color: #444444;
    }
</style>