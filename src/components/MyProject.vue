<template>
    <div id="my-project">
        <div class="project">
            <h3><a href="JS/zns_demo.html" target="_blank">轮播效果</a></h3>
            <div class="mini">
                <img src="sl1.png" alt="">
            </div>
            <div class="describe">
                <p>简介：面向对象的轮播插件，代码清晰，实现可复用性，不依赖CSS</p>
                <p>主要运用技术：原生JavaScript</p>
            </div>
        </div>
        <div class="project">
            <h3><a href="jQuery/index.html" target="_blank">表单验证</a></h3>
            <div class="mini">
                <img src="sl1.png" alt="">
            </div>
            <div class="describe">
                <div class="describe">
                    <p>简介：验证并告知用户表单输入的正确性，代码简单，实现可复用性</p>
                    <p>主要运用技术：jQuery</p>
                </div>
            </div>
        </div>
        <div class="project">
            <h3>
                <router-link to="/game">拼图小游戏</router-link>
            </h3>
            <div class="mini">这里是缩略图</div>
            <div class="describe">
                <div class="describe">
                    <p>简介：利用Vue实现拼图小游戏，有通关功能</p>
                    <p>主要运用技术：Vue</p>
                </div>
            </div>
        </div>
        <div class="project">
            <h3>轮播效果</h3>
            <div class="mini">这里是缩略图</div>
            <div class="describe">
                <div class="describe">
                    <p>简介：面向对象的轮播插件，代码清晰，实现可复用性，不依赖CSS</p>
                    <p>主要运用技术：原生JavaScript</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyProject"
    }
</script>

<style scoped>
    #my-project .project{
        width: 315px;
        height: 300px;
        /*background-color: #444444;*/
        /*border: 1px solid black;*/
        float: left;
        /*padding: 10px;*/
    }

    #my-project .project h3{
        text-align: center;
        margin: 5px;
    }

    #my-project .project .mini{
        /*float: left;*/
        /*margin: 0 auto;*/
        text-align: center;
        margin: 5px;
    }

    .project .mini img{
        width:150px;
        margin: 5px;
        border: 8px solid black;
    }

    /*.project .mini{*/
    /*   background: #444444;*/
    /*    width: 160px;*/
    /*}*/

</style>