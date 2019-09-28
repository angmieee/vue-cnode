<template>
    <div class="main_panel">
        <div class="loading" v-if="isLoading">
            <Loader></Loader>
        </div>
        <div class="topic_panel" v-else>
            <ul>
                <li  class="topic_tab">
                        <span>全部</span>
                        <span>精华</span>
                        <span>分享</span>
                        <span>问答</span>
                        <span>招聘</span>
                </li>
                <li class="topic_list" v-for="post in posts" :key="post.id">
                    <img :src="post.author.avatar_url" alt="">
                    <span class="reply_count_wrapper">
                        <span class="reply_count">{{ post.reply_count }}</span>/<span class="count_of_visits">{{ post.visit_count }}</span>
                    </span>
                    <span :class="[{put_good:(post.good == true),put_top:(post.top == true),topic_list_tab:(post.good != true && post.top != true)}]">
                        <span>
                            {{ post | tabFormatter }}
                        </span>
                    </span>
                    <router-link :to="{
                        name: 'post_content',
                        params: {
                            id: post.id,
                            name: post.author.loginname
                        }
                    }">
                        <span>{{ post.title }}</span>
                    </router-link>
                    <span class="last_reply">
                        {{ post.last_reply_at | formatDate }}
                    </span>
                </li>
                <li>
                    <Pagination @handleList="renderList" :current="this.currentPage"></Pagination>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Pagination from "../components/Pagination"
    export default {
        name: "MainPanel",
        data(){
            return  {
                isLoading:true,
                posts: [],
                currentPage: 1
            }
        },
        components:{
            Pagination
        },
        methods:{
            getPostsData(){
                this.$http.get('https://cnodejs.org/api/v1/topics',{
                    params:{
                        page: this.currentPage,
                        limit: 20
                    }
                }).then((res)=>{
                    this.posts = res.data.data
                    this.isLoading = false
                }).catch((err)=>{
                    console.log(err)
                })
            },
            renderList(page){
                this.currentPage = page
                this.isLoading = true
                this.getPostsData()
            }
        },
        mounted() {
            this.getPostsData()
        }
    }
</script>

<style scoped>
    .main_panel{
        width: 90%;
        min-width: 960px;
    }

    .main_panel img {
        height: 30px;
        width: 30px;
        vertical-align: middle;
    }

    .topic_tab {
        padding: 0 10px;
    }

    ul {
        list-style: none;
        width: 100%;
        max-width: 1344px;
        margin: 0 auto;
    }

    ul li:not(:first-child) {
        padding: 9px;
        font-size: 15px;
        font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
        font-weight: 400;
        background-color: white;
        color: #333;
        border-top: 1px solid #f0f0f0;
    }

    li:not(:first-child):hover {
        background: #f5f5f5;;
    }

    li:last-child:hover {
        background: white;
    }

    li span {
        line-height: 30px;
    }

    .allcount {
        width: 70px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
    }

    .reply_count_wrapper{
        width: 70px;
        display: inline-block;
        text-align: center;
    }

    .reply_count {
        display: inline-block;
        color: #9e78c0;
        font-size: 14px;
    }

    .count_of_visits{
        color: #b4b4b4;
        font-size: 10px;
    }

    .put_good, .put_top {
        background: #80bd01;
        padding: 2px 4px;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -o-border-radius: 3px;
        color: #fff;
        font-size: 12px;
        margin-right: 10px;
    }

    .topic_list_tab {
        background-color: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -o-border-radius: 3px;
        font-size: 12px;
        margin-right: 10px;
    }

    .last_reply {
        text-align: right;
        min-width: 50px;
        display: inline-block;
        white-space: nowrap;
        float: right;
        color: #778087;
        font-size: 12px;
    }

    .topic_tab {
        height: 40px;
        background-color: #f5f5f5;
        border-radius: 3px 3px 0 0;
    }

    .topic_tab span {
        font-size: 14px;
        color: #80bd01;
        line-height: 40px;
        margin: 0 10px;
        cursor: pointer;
    }

    .topic_tab span:hover {
        color: #005580;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }
</style>