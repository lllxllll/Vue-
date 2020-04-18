<template>
    <div id="add-blog">
        <div class="content" style="width: 100%; border: none">
            <!--                <div class="add-blog" >-->
            <h2>添加日志</h2>
            <form v-if="!submitted">
                <label for="">日志标题</label>
                <input type="text" v-model="blog.title">

                <label for="">日志内容</label><br>
                <textarea v-model="blog.content"></textarea>

                <div id="checkboxes">
                    <label for="">Vue</label>
                    <input type="checkbox" value="vue.js" v-model="blog.categories">
                    <label for="">HTML</label>
                    <input type="checkbox" value="HTML" v-model="blog.categories">
                    <label for="">CSS</label>
                    <input type="checkbox" value="CSS" v-model="blog.categories">
                    <label for="">JavaScript</label>
                    <input type="checkbox" value="JaveScript" v-model="blog.categories">
                </div>
                <label for="">作者：</label>
                <select v-model="blog.name">
                    <option v-for="name in authors">{{name}}</option>
                </select>
            </form>
            <div v-if="submitted">
                <h2>您的日志发送成功！</h2>
            </div>
            <div id="preview">
                <h2>日志总览</h2>
                <p>日志标题：{{blog.title}}</p><br>
                <p>日志内容:</p>
                <p>{{blog.content}}</p>
                <p>日志分类:</p>
                <ul>
                    <li v-for="item in blog.categories">
                        {{item}}
                    </li>
                </ul>
                <p>作者：{{blog.name}}</p>
                <button v-on:click.prevent="post">添加日志</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'add-blog',
        data(){
            return{
                blog:{
                    title:'',
                    content:'',
                    categories:[],
                    name:'',
                },
                authors:["张三","里斯","王五"],
                submitted:false,
            }
        },
        methods:{
            post:function(){
                this.$http.post("http://jsonplaceholder.typicode.com/posts",{
                    title:this.blog.title,
                    body:this.blog.content,
                    userId:1,
                })
                    .then(function (data) {
                        console.log(data);
                        this.submitted=true;
                    })
            },
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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


    #add-blog .content  h2{
        text-align: center;
    }
    #add-blog .content  form{
        text-align: center;
    }



    #add-blog *{
        box-sizing: border-box;
    }

    #add-blog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }

    label{
        display: block;
        margin:20px 0px 10px;

    }

    input[type='text'],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }

    textarea{
        height: 200px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top:20px;
    }

    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }

    button{
        display: block;
        margin: 20px 0px;
        color: #444444;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        cursor: pointer;
    }

    /*#preview{*/
    /*    text-align: center;*/
    /*    padding-top: 40px;*/
    /*}*/
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }

</style>
