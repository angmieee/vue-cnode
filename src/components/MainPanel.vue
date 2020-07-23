<template>
    <div class="main_panel">
        <div class="topic_panel">
            <ul>
                <li  class="topic_tab">
                        <span @click="getData('all')" :class="{active: isActive == 'all'}">全部</span>
                        <span @click="getData('good')" :class="{active: isActive == 'good'}">精华</span>
                        <span @click="getData('share')" :class="{active: isActive == 'share'}">分享</span>
                        <span @click="getData('ask')" :class="{active: isActive == 'ask'}">问答</span>
                        <span @click="getData('job')" :class="{active: isActive == 'job'}">招聘</span>
                </li>
                <li class="topic_list" v-for="post in posts" :key="post.id">
                    <img :src="post.author.avatar_url" :alt="post.author.loginname">
                    <span class="reply_count_wrapper">
                        <span class="reply_count">{{ post.reply_count }}</span>/<span class="count_of_visits">{{ post.visit_count }}</span>
                    </span>
                    <span :class="{put_good:(post.good == true),put_top:(post.top == true),topic_list_tab:(post.good != true && post.top != true)}">
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
                        <span class="topic_title">{{ post.title }}</span>
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
    import Pagination from "../components/Pagination";

    export default {
        name: "MainPanel",
        data(){
            return  {
                posts: [],
                currentPage: 1,
                isActive: 'all'
            }
        },
        components:{
            Pagination
        },
        methods:{
            getPostsData(type){
                this.$http.get('https://cnodejs.org/api/v1/topics',{
                    params:{
                        page: this.currentPage,
                        limit: 20,
                        tab: type
                    }
                }).then((res)=>{
                    this.posts = res.data.data
                    this.$hideLoading()
                }).catch((err)=>{
                    console.log(err)
                })
            },
            getData(type) {
                // 切换选项卡
                this.isActive = type

                this.$showLoading()
                this.getPostsData(type)
            },
            toggle(tab) {
                this.isActive = tab
            },
            renderList(page){
                this.currentPage = page
                this.$showLoading()
                this.getPostsData()
            },
            // getAvatarsUrl(url) {
            //     const num = Math.floor(Math.random() * (4 - 1 + 1)) + 1
            //     return  url.includes('github') ? `/src/assets/avatars${num}.png` : url
            // }
        },
        beforeCreate() {
          this.$showLoading()
        },
        beforeMount() {
            this.getPostsData()
        }
    }
</script>

<style lang="less" scoped>
    .main_panel{
        width: 90%;
        margin: 0 auto 40px;
        a {
            text-decoration: none;
            color: black;
            &:hover {
                text-decoration: underline;
            }
        }
        .topic_panel {
            ul {
                list-style: none;
                margin: 0 auto;
                box-shadow: 0 2px 12px 2px rgba(0,0,0,.1);
                li {
                    &:not(:first-child) {
                        padding: 9px;
                        font-size: 15px;
                        font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
                        font-weight: 400;
                        background-color: white;
                        color: #333;
                        border-top: 1px solid #f0f0f0;
                        &:hover {
                            background: #f5f5f5;;
                        }
                    }
                    &:last-child:hover {
                        background: white;
                    }
                    span {
                        line-height: 30px;
                    }
                }
                .topic_tab {
                    height: 40px;
                    background-color: #f5f5f5;
                    border-radius: 3px 3px 0 0;
                    padding: 0 10px;
                    span {
                        font-size: 14px;
                        color: #80bd01;
                        line-height: 40px;
                        margin: 0 10px;
                        cursor: pointer;
                        transition: all .3s;
                        &:hover {
                            color: #005580;
                        }
                        &.active {
                            background-color: #80bd01;
                            color: #fff;
                            padding: 3px 4px;
                            border-radius: 3px;
                        }
                    }
                }
                .topic_list {
                    img {
                        height: 30px;
                        width: 30px;
                        vertical-align: middle;
                        border-radius: 50%;
                    }
                    .reply_count_wrapper {
                        width: 70px;
                        display: inline-block;
                        text-align: center;
                        .reply_count {
                            display: inline-block;
                            color: #9e78c0;
                            font-size: 14px;
                        }
                        .count_of_visits{
                            color: #b4b4b4;
                            font-size: 10px;
                        }
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
                    .topic_title {
                        display: inline-block;
                        width: 60%;
                        vertical-align: middle;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
