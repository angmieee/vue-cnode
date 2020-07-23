<template>
    <div class="user_info">
        <div class="user_information">
            <section>
                <div class="avatar_wrapper">
                    <img :src="userinfo.avatar_url" alt="">
                    <span>{{userinfo.loginname}}</span>
                </div>
                <p>{{userinfo.score}}积分</p>
                <p>注册时间：{{userinfo.create_at | formatDate}}</p>
            </section>
            <div class="replies">
                <p>最近参与的话题</p>
                <ul>
                    <li v-for="item in userinfo.recent_replies">
                        <router-link :to="{
                        name:'post_content',
                        params:{
                            id:item.id
                        }
                        }">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="topics">
                <p>最近创建的话题</p>
                <ul>
                    <li v-for="item in userinfo.recent_topics">
                        <router-link :to="{
                        name:'post_content',
                        params:{
                            id:item.id
                        }
                        }">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data(){
            return {
                userinfo:{}
            }
        },
        methods:{
            getData(){
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`
                ).then(res=>{
                    this.userinfo = res.data.data
                    this.$hideLoading()
                }).catch(function(){
                    console.log('err')
                })
            }
        },
        beforeCreate() {
            this.$showLoading()
        },
        beforeMount() {
            this.getData()
        }
    }
</script>

<style lang="less" scoped>
    .user_info{
        padding-top: 10px;
        padding-bottom: 20px;
        width: 70%;
        margin: 0 auto;
        box-shadow: 0 2px 12px 2px rgba(0,0,0,.1);
        .user_information {
            background: white;
            margin: 0 auto;
            & > div {
                & > ul {
                    & > li {
                        padding: 4px 0 4px 12px;
                        white-space: nowrap;
                        font-size: 0.72rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        line-height: 30px;
                        vertical-align: middle;
                        & > a {
                            color: #094E99;
                            text-decoration: none;
                        }
                    }
                }
                & > p {
                    padding: 12px 0 12px 12px;
                    background-color: rgba(212, 205, 205, 0.17);
                    font-size: 0.75rem;
                    margin: 0;
                }
            }

            li {
                list-style:none;
            }
            section {
                padding: 12px;
                color: #778087;
                p {
                    margin-top: 10px;
                    font-size: 14px;
                }
                .avatar_wrapper{
                    display: flex;
                    align-items: flex-start;
                    img {
                        width: 30px;
                        border-radius: 50%;
                    }
                    span {
                        margin-left: 10px;
                    }
                }
            }
            .replies,
            .topics {
                font-size: 0.72rem;
                border-top: 10px #DDDDDD solid;
            }
        }
    }
</style>
