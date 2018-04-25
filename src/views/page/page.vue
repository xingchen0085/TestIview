<template>
    <div>
        <Card>
            <p slot="title">
                <Icon type="compose"></Icon>
                测试网络请求
            </p>
            <Button type="info" @click="showMsg">当前环境请求地址</Button>
            <Button type="info" @click="testGet">TestGet</Button>
            <Button type="info" @click="testPost">TestPost</Button>
        </Card>
    </div>
</template>

<script>
    import util from "../../libs/util";

    export default {
        name: 'page',
        methods: {
            showMsg: function () {
                this.$Message.info(util.testUrl());
            },
            testGet: function () {
                util.get("/testGet");
            },
            testPost: function () {
                util.post("/testPost", {msg: 'hello!!'})
            }
        }
    };
</script>


