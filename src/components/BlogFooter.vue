<template>
    <div id="blog-footer">
        <footer class="footer">
            <div class="contact">
                <aside class="box">
                    <h1>友情链接</h1>
                    <a href="">人类早就可以坐太空船去月球，但永远无法探索别人的内心宇宙</a>
                </aside>
                <aside class="box">
                    <h1>联系我们</h1>
                    <p>长沙 中南大学</p>
                </aside>
            </div>
            <div class="copy">
                <p>copyright @2019-2020 版权所有为</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "BlogFooter"
    }
</script>

<style scoped>
    .footer{
        clear: both;
        /*background: white;*/
    }

    .footer .contact{
        background:#444444;
        border-radius: 5px;
        overflow: hidden;
        padding: 20px;
    }
    .footer .contact .box{
        float: left;
        width: 50%;
        color:white;
        box-sizing: border-box;
    }

    .footer .contact .box a{
        color: white;
    }


    .footer .contact .box:last-child{
        border-left: 1px solid #ffffff;
        padding-left: 20px;
    }
    .copy{
        border-top: 1px solid #cccccc;
        margin: 40px 0px;
        text-align: right;
        padding-bottom: 10px;
    }
</style>