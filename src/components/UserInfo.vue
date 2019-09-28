<template>
    <div class="user_info">
        <div class="loading" v-if="isLoading">
            <Loader></Loader>
        </div>
        <div class="user_information" v-else>
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
                isLoading:false,
                userinfo:{}
            }
        },
        methods:{
            getData(){
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`
                ).then(res=>{
                    this.isLoading = false
                    this.userinfo = res.data.data
                }).catch(function(){
                    console.log('err')
                })
            }
        },
        beforeMount() {
            this.isLoading = true
            this.getData()
        }
    }
</script>

<style scoped>
    .user_info{
        background-color: #e1e1e1;
        padding-top: 10px;
        padding-bottom: 20px;
        width: 70%;
        min-width: 960px;
    }
    
    .user_information {
        background: white;
        margin: 0 auto;
    }
    .user_information section {
        padding: 12px;
    }
    .user_information img {
        width: 30px;
    }
    .user_information li {
        list-style:none;
    }
    .user_information .replies,
    .user_information .topics {
        font-size: 0.72rem;
        border-top: 10px #DDDDDD solid;
    }
    .user_information > div > p {
        padding: 12px 0 12px 12px;
        background-color: rgba(212, 205, 205, 0.17);
        font-size: 0.75rem;
        margin: 0;
    }
    .user_information > div >ul > li {
        padding: 4px 0 4px 12px;
        white-space: nowrap;
        font-size: 0.72rem;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
        vertical-align: middle;
    }
    .user_information > div >ul > li > a {
        color: #094E99;
        text-decoration: none;
    }

    .avatar_wrapper{
        display: flex;
        align-items: flex-start;
    }

    .avatar_wrapper span {
        margin-left: 10px;
    }

    .user_information section{
        color: #778087;
    }

    .user_information section p {
        margin-top: 10px;
        font-size: 14px;
    }
</style>