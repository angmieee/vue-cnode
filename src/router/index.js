import Vue from 'vue'
import Router from 'vue-router'
import Article from "../components/Article"
import MainPanel from "../components/MainPanel"
import UserInfo from "../components/UserInfo"
import SlideBar from "../components/SlideBar"
import GetStart from "../components/GetStart"

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'root',
            path: '/',
            components:{
                main: MainPanel
            }
        },
        {
            name: 'post_content',
            path: '/topic/:id&:name',
            components:{
                main: Article,
                slidebar: SlideBar
            }
        },
        {
            name: 'user_info',
            path: '/user_info/:name',
            components:{
                main: UserInfo
            }
        },
        {
            name: 'get_start',
            path: '/getstart/',
            components:{
                main: GetStart
            }
        }
    ]
})
