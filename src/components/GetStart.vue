<template>
    <div class="get_start">
        <div class="header">
            <router-link :to="{ name: 'root' }">
                <span class="main">主页</span>
            </router-link>
            &frasl;<span>Node.js 新手入门</span>
        </div>
        <div class="inner">
            <h2>Node.js 入门</h2>
            <ul>
                <li>
                    <span>《快速搭建 Node.js 开发环境以及加速 npm》</span>
                    <span><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></span>
                </li>
                <li>
                    <span>《Node.js 包教不包会》</span>
                    <span><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></span>
                </li>
                <li>
                    <span>《ECMAScript 6入门》</span>
                    <span><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></span>
                </li>
                <li>
                    <span>《七天学会NodeJS》</span>
                    <span><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></span>
                </li>
            </ul>
            <h2>Node.js 资源</h2>
            <ul>
                <li>
                    <span>《前端资源教程》</span>
                    <span><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></span>
                </li>
                <li>
                    <span>《国内的 npm 镜像源》</span>
                    <span><a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a></span>
                </li>
                <li>
                    <span>《node weekly》</span>
                    <span><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></span>
                </li>
                <li>
                    <span>《node123-node.js中文资料导航》</span>
                    <span><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></span>
                </li>
                <li>
                    <span>《A curated list of delightful Node.js packages and resources》</span>
                    <span><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></span>
                </li>
                <li>
                    <span>《Node.js Books》</span>
                    <span><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></span>
                </li>
            </ul>
            <h2>Node.js 名人</h2>
            <ul>
                <li>
                    <span>《名人堂》</span>
                    <span><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></span>
                </li>
            </ul>
            <h2>Node.js 服务器</h2>
            <span>新手搭建 Node.js 服务器，推荐使用无需备案的</span>&nbsp;<span><a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GetStart"
    }
</script>

<style lang="less" scoped>
    .get_start {
        background: white;
        width: 70%;
        min-width: 960px;
        margin: 0 auto 40px;
        font-size: 15px;
        border-radius: 3px;
        box-shadow: 0 2px 12px 2px rgba(0,0,0,.1);
        a {
            color: #08c;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }

        }
        span {
            margin: 10px 10px;
        }
        .header {
            background: #f6f6f6;
            padding: 10px;
            color: #999;
            border-radius: 3px 3px 0 0;
            .main {
                color: #80bd01;
            }
        }
        .inner {
            padding: 10px 10px 30px 10px;
            h2 {
                margin-bottom: 15px;
                border-bottom: 1px solid #eee;
                line-height: 40px;
            }
            ul {
                list-style: none;
                li {
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
</style>
