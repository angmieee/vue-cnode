<template>
  <div id="app">
    <Header></Header>
    <div class="app_main">
      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
    </div>
<!--    <PostList></PostList>-->
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: "App",
    components:{
      Header
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .app_main {
    width: 1200px;
    margin: 40px auto auto;
    display: flex;
  }
</style>
