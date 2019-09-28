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
    background: #e1e1e1;
    padding: 15px 0;
    display: flex;
    justify-content: center;
  }

  .app_main > *:first-child {
    margin-right: 15px;
  }
</style>
