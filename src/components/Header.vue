<template>
    <div class="header">
        <div class="navbar_wrapper">
            <div class="navbar">
                <div class="brand">
                    <router-link :to="{ name: 'root' }">
                        <img src="../assets/cnodejs_light.svg" alt="">
                    </router-link>
                </div>
                <ul class="nav">
                    <li>
                        <router-link :to="{ name: 'root' }">
                            <span>首页</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'get_start' }">
                            <span>新手入门</span>
                        </router-link>
                    </li>
                    <li><a href="#">关于</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less" scoped>
    .header {
        background: #444444;
        height: 50px;
        .navbar_wrapper {
            width: 75%;
            min-width: 960px;
            margin: 0 auto;
            padding: 5px;
            .navbar {
                width: 100%;
                min-width: 960px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .brand {
                    width: 120px;
                    padding: 3px 20px;
                    height: 34px;
                    line-height: 34px;
                    color: #ccc;
                    font-weight: 700;
                }
                .nav {
                    list-style: none;
                    li {
                        display: inline-block;
                        padding: 10px 15px;
                    }
                    a {
                        text-decoration: none;
                        color: #cccccc;
                        font-size: 13px;
                        text-shadow: none;
                        &:hover {
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>
