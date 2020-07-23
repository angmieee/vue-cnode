<template>
    <div class="pagination">
<!--        <button @click="changeBtn">首页</button>-->
<!--        <button @click="changeBtn">上一页</button>-->
<!--        <button v-if="jduge" class="pagebtn">......</button>-->
<!--        <button v-for="btn in pagebtns"-->
<!--                @click="changeBtn(btn)"-->
<!--                :class="[{currentPage:btn == currentPage},'pagebtn']">-->
<!--            {{btn}}-->
<!--        </button>-->
<!--        <button @click="changeBtn">下一页</button>-->
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page.sync="current"
                :page-size="20"
                :page-count="51">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: [ 'current' ],
        data(){
            return {

            }
        },
        methods:{
            handleCurrentChange(page){
                this.$emit('handleList',page)
            }
        }
    }
</script>

<style scoped>
    .pagination {
        margin-top: 5px;
        margin-bottom: 20px;
        min-width: 960px;
        background-color: white;
        padding: 6px 20px;
        border-radius: 5px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    }
</style>
