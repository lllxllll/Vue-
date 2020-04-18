<template>
    <div id="my-trace">
        <input type="button" @click="flag=!flag" value="我的足迹">
<!--        <transition>-->
<!--            <div id="box1" v-if="flag">-->
<!--            </div>-->
<!--        </transition>-->

        <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter">

            <div id="box1" v-show="flag">
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "MyTrace",
        data(){
            return{
                flag:false,
            }
        },
        methods:{
            //动画钩子函数
            beforeEnter(el){
            //    动画入场之前的起始样式
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
            //    动画开始之后的样式
                el.offsetWidth
                el.style.transform="translate(400px,400px)"
                el.style.transition="all 1s ease"

                done()
            },
            afterEnter(el){
            //动画完成之后
                console.log('ok')
                this.flag=!this.flag
            },
        }
    }
</script>

<style scoped>
    #my-trace{
        background:#444444;
        margin-bottom: 20px;
        margin-top: 20px;
        height:500px;
        box-shadow: 10px 10px 20px #aaaaaa;
        opacity:80%;
        overflow: hidden;
        position: relative;
    }

    #my-trace #box1 {
        width: 100px;
        height: 100px;
        /*margin: 150px auto;*/
        background: #3333aa;
        /*left:400px;*/

    }

    #my-trace:hover{
        /*transform: rotate(360deg);*/
        /*transition: transform 5s;*/
    }

    input{

    }
    /*.v-enter,*/
    /*.v-leave-to{*/
    /*    opacity: 0;*/
    /*    transform: translateX(500px);*/
    /*}*/

    /*.v-enter-active,*/
    /*.v-leave-active{*/
    /*    transition: all 2s ease;*/
    /*}*/

</style>