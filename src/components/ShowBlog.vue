<template>
    <div id="show-blog">
        <div class="content">
            <article class="article">
                <!--    内容文字区            -->
                <section class="text">
                    <h1>我的太空简介</h1>

                    <small class="meta">
                        <time>2020-02-26</time>
                        <address>
                            by<a href="">  西里</a>
                        </address>
                    </small>
                    <p>
                       运用Vue脚手架搭建了个人博客项目，使用v-router实现路由请求，使用v-resource实现数据get/post请求。
                        页面结构采用HTML5搭建，页面样式使用了CSS3。
                    </p>
                </section>
                <!--    内容评论区            -->
                <section class="comments">
                    <h1>{{list.length}} 条评论</h1>
                    <transition-group appear>
                        <div class="comment" v-for="item in list" :key="item.id" >
                            <div class="meta">
                                <img src="logo3.png" :alt="item.id" class="avatar">
                                <!--                            <a href="">{{item.name}}</a>-->
                                <time>{{item.time|dataFormt}}</time>
                            </div>
                            <div class="message">
                                <p>{{item.msg}}</p>

                            </div>
                        </div>

                    </transition-group>

                    <textarea name="评论" id="txt" cols="10" rows="5" v-model="com"></textarea>
                    <button @click="addCom">发布评论</button>
                </section>
            </article>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'show-blog',
        data(){
            return{
                list:[
                    {id:1,name:'lxl',msg:'写的真好',time:new Date()},
                    {id:2,name:'lxr',msg:'哈哈哈有趣',time:new Date()},
                    {id:3,name:'rxl',msg:'有意思',time:new Date()},
                ],
                id:'',
                name:'',
                com:'',
            }
        },
        methods:{
            addCom(){
                var str={id:'',
                    name:'',
                    time:new Date(),
                    msg:this.com
                };
                this.list.push(str);
                this.com='';
            },

            del(){
                this.list.splice(i,1);

            },
        },


    }
</script>

<style>
    #show-blog{
        width:1000px;
        height: 100%;
        background:white;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #3333aa;
    }

    /*.content *{*/
    /*    background: white;*/
    /*}*/
    .content{
        width:1000px;
        float: left;
        /*background: white;*/
        /*border-right: 1px solid #cccccc;*/
    }

    .content .meta{
        font-size: 14px;
    }

    .content .meta address{
        display: inline;
    }

    .content .article{
        padding: 20px;
    }

    .content .article .text{
        margin-bottom: 15px;
        /*margin-top: 20px;*/
    }

    .comments .comment{
        background: #eeeeee;
        overflow: hidden;
        padding: 10px;
        margin: 20px 0px;
        border-radius: 15px;
    }
    .comment .meta{
        font-size: 12px;
    }


    .comment .avatar{
        width: 50px;
        height: 50px;
        float: left;
        padding: 5px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid #cccccc;
        margin: 0 10px 10px 0;
    }
    textarea{
        width: 100%;
        border-radius: 10px;
        border: 1px dotted black;
    }

    .comments button{
        font-size:13px;
        padding: 3px;
        float: right;
        margin-bottom: 10px;
        margin-top: 5px;
        background-color: #ffffff;
    }

    .v-enter,
    .v-leave-to{
        opacity: 0;
        transform: translateY(100px);
    }

    .v-enter-active,
    .v-leave-active{
        transition: all 1s ease;
    }
</style>
