<template>
    <div class="puzzle" :style="{width:width+'px', height:height+'px'}">
        <div class="puzzle__block" v-for="item in blockPoints"
             :key="item.id"
             :style="{width:blockWidth+'px',
             height:blockHeight+'px',
             left:item.x+'px',
             top:item.y+'px',
             backgroundImage:`url(${img})`
             }">

        </div>
    </div>
</template>

<script>
    export default {
        props:{
            width:{
                type:Number,
                default:500,
            },
            height:{
                type: Number,
                default: 500,
            },
            row:{
                type:Number,
                default:3,
            },
            col:{
                type:Number,
                default:3,
            },
            img:{
                type:String,
                required:true,
            },
        },
        computed:{
            blockWidth(){
              return this.width/this.col;
            },
            blockHeight(){
                return this.height/this.row;
            },
            blockPoints(){
                const {row,col,blockWidth,blockHeight}=this;
                const arr=[]
                for (let i=0;i<row;i++){
                    for (let j=0;j<row;j++){
                        arr.push({
                            x:j*blockWidth,
                            y:i*blockHeight,
                            id:new Date().getTime()+Math.random()*100,
                        })
                    }
                }

                return arr;
            },
        }

    }
</script>

<style>
    .puzzle{
        position: relative;
        border: 2px solid #cccccc;
    }
    .puzzle__block{
        box-sizing: border-box;
        position: absolute;
        border: 1px solid #ffffff;
        background-color: red;
    }
</style>