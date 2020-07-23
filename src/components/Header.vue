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
                    <li><a href="#" @click="dialogVisible = true">关于</a></li>
                </ul>
            </div>
            <el-dialog
                    title="关于本项目"
                    class="dialog"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <p>作者：<span class="blue">MJ Huang</span></p>
                <p>源码：<a href="https://github.com/angmieee/vue-cnode" class="blue">✨ CnodeVue ✨</a></p>
                <p>技术栈：</p>
                <ul>
                    <li>Vue</li>
                    <li>Vue Router</li>
                    <li>Element UI</li>
                    <li>Axios</li>
                </ul>
                <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false"><span>确 定</span></el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                dialogVisible: false
            }
        },
        methods: {
            handleClose(done) {
                done()
            }
        }
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
            .dialog {
                p {
                    font-size: 16px;
                    margin-bottom: 4px;
                    a {
                        text-decoration: none;
                        cursor: pointer;
                    }
                    .blue {
                        color: #409EFF;
                        font-weight: bold;
                    }
                }
                ul {
                    padding-left: 30px;
                    padding-top: 10px;
                    li {
                        margin-bottom: 4px;
                    }
                }
                .dialog-footer {
                    font-size: 16px;
                }
            }
        }
    }
</style>
