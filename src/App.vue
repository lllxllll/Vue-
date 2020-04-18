<template>
  <div id="app">
      <div id="container">
        <blog-header></blog-header>
        <!--      <ShowBlog></ShowBlog>-->
        <router-view></router-view>
        <!--      <AddBlog></AddBlog>-->
        <!--      <MyTrace></MyTrace>-->
        <BlogFooter></BlogFooter>
<!--        <d-puzzle img="./assets/images/1.jpg">-->
      </div>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import ShowBlog from "./components/ShowBlog";
import AddBlog from "./components/AddBlog";
import MyTrace from "./components/MyTrace";
import BlogFooter from "./components/BlogFooter";
import MyProject from "./components/MyProject";
import DPuzzle from  "./components/Puzzle"

export default {
  name: 'App',
  components: {
    BlogHeader,ShowBlog,AddBlog,MyTrace,BlogFooter,MyProject,
      DPuzzle

  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    /*background: #444444;*/
  }
  #container{
    /*background:black;*/
    width:1260px;
    height: 100%;
    /*常用的居中办法*/
    margin: 0 auto;
  }
</style>
