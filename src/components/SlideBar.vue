<template>
    <div class="slide_bar">
        <div class="author_info">
            <div class="author_summary">
                <div class="topbar">个人信息</div>
                <div class="inner">
                    <div class="user_avatar">
                        <router-link :to="{
                            name:'user_info',
                            params:{
                                name: this.userinfo.loginname
                            }
                        }">
                            <img :src="this.userinfo.avatar_url" alt="">
                        </router-link>
                        <router-link :to="{
                                name:'user_info',
                                params:{
                                    name: this.userinfo.loginname
                                }
                            }">
                            <span>{{ this.userinfo.loginname }}</span>
                        </router-link>
                    </div>
                    <div class="floor">
                        <span>积分:&nbsp;{{ this.userinfo.score }}</span>
                    </div>
                    <span class="signature">账号创建于:&nbsp;{{ this.userinfo.create_at | formatDate }}</span>
                </div>
            </div>
            <div class="recent_topics">
                <div class="topbar">作者最近主题</div>
                <ul>
                    <li v-for="list in topcilimitby5">
                        <router-link :to="{
                            name:'post_content',
                            params:{
                                id:list.id,
                                name:list.author.loginname
                            }
                        }">
                            {{ list.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="recent_replies">
                <div class="topbar">作者最近回复</div>
                <ul>
                    <li v-for="list in replylimitby5">
                        <router-link :to="{
                            name:'post_content',
                            params:{
                                id:list.id,
                                name:list.author.loginname
                            }
                        }">
                            {{ list.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlideBar",
        data() {
            return {
                isLoading: false,
                userinfo: {}
            }
        },
        methods: {
            getData() {
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then(res => {
                        this.isLoading = false //加载成功，去除动画
                        this.userinfo = res.data.data
                    })
                    .catch(function (err) {
                        //处理返回失败后的问题
                        console.log(err)
                    })
            }
        },
        computed: {
            topcilimitby5() {
                if (this.userinfo.recent_topics) {
                    return this.userinfo.recent_topics.slice(0, 5)
                }
            },
            replylimitby5() {
                if (this.userinfo.recent_replies) {
                    return this.userinfo.recent_replies.slice(0, 5)
                }
            }
        },
        beforeMount() {
            this.isLoading = true//加载成功之前显示加载动画
            this.getData()//在页面加载之前获取数据
        }
    }
</script>

<style scoped>
    .author_summary, .recent_replies, .recent_topics {
        background-color: #fff;
    }

    .slide_bar {
        width: 20%;
    }

    li {
        padding: 3px 0;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .recent_replies ul, .recent_topics ul {
        margin-top: 0px;
        margin-bottom: 0px;
        list-style: none;
        padding-left: 14px;
    }

    ul a {
        font-size: 14px;
    }

    ul{
        padding: 10px 0;
    }

    .topbar {
        padding: 10px;
        background-color: #f6f6f6;
        height: 16px;
        font-size: 12px;
        margin-top: 10px;
    }

    img {
        height: 48px;
        width: 48px;
        border-radius: 3px;
    }

    .inner {
        padding: 10px;
        font-size: 13px;
        color: #778087;
    }

    .loginname {
        width: 100px;
        float: right;
        margin-top: 22px;
        margin-right: 159px;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: #778087;
    }

    .author_summary .topbar {
        margin-top: 0px;
    }

    .user_avatar {
        display: flex;
        align-items: center;
    }

    .user_avatar span {
        margin-left: 10px;
    }

    .floor,
    .signature {
        padding: 7px 0;
    }
</style>