<template>
    <div>
        <h1>这是主页</h1>
        <Button type="primary" @click="showMsg">测试</Button>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{
            showMsg:function(){
                this.$Message.error("错误信息");
            }
        }
    }
</script>

<style scoped>

</style>