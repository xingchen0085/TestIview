<template>
    <div>
        <Card v-show="articleList">
            <p slot="title">
                <Icon type="compose"></Icon>
                文章列表
            </p>
            <Form ref="article" :model="article" inline>
                <FormItem prop="title">
                    <Input type="text" v-model="article.title" placeholder="标题"></Input>
                </FormItem>
                <FormItem prop="url">
                    <Input type="text" v-model="article.url" placeholder="页面地址"></Input>
                </FormItem>
                <FormItem prop="status">
                    <Select v-model="article.status" style="width:200px">
                        <Option v-for="item in status" :value="item.value" :key="item.value">{{ item.text }}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('article')">查询</Button>
                    <Button type="ghost" @click="reset('article')">清除</Button>
                    <Button type="info" @click="addShow()">添加</Button>
                </FormItem>
            </Form>
            <can-edit-table refs="articleListTable" @on-delete="handleDel" v-model="tableData"
                            :columns-list="columnsList"></can-edit-table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1"></Page>
                </div>
            </div>
        </Card>

        <Card v-show="!articleList">
            <p slot="title">
                <Icon type="compose"></Icon>
                添加文章
            </p>
            <article-add></article-add>
        </Card>
    </div>
</template>

<script>

    import ArticleAdd from './add/article-add.vue'
    import CanEditTable from '../../my-components/table/can-edit-table.vue'

    export default {
        name: 'articleList',
        data: function () {
            return {
                articleList: true,
                article: {
                    user: '',
                    password: ''
                },
                status: [
                    {
                        value: '1',
                        text: '已创建'
                    },
                    {
                        value: '2',
                        text: '已确认'
                    },
                    {
                        value: '3',
                        text: '已发布'
                    }
                ],
                columnsList: [
                    {title: "编号", key: "id"},
                    {title: "标题", key: "title", editable: true},
                    {title: "主题", key: "subject",editable: true},
                    {title: "页面地址", key: "url",editable: true},
                    {title: "开始时间", key: "createTime"},
                    {title: "操作", key: "handle", handle: ['edit', 'delete']}],
                tableData: [
                    {
                        id: "1",
                        title: "测试文章1",
                        subject: "测试1",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                    {
                        id: "2",
                        title: "测试文章2",
                        subject: "测试2",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                    {
                        id: "3",
                        title: "测试文章3",
                        subject: "测试3",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                    {
                        id: "4",
                        title: "测试文章4",
                        subject: "测试4",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                    {
                        id: "5",
                        title: "测试文章5",
                        subject: "测试5",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                    {
                        id: "6",
                        title: "测试文章6",
                        subject: "测试6",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                    {
                        id: "7",
                        title: "测试文章7",
                        subject: "测试7",
                        url: "/20180421/1.html",
                        createTime: "2018-04-21",
                    },
                ]
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
            ,

            reset: function (name) {
                this.$Message.info(name)
                this.$refs[name].resetFields();
            },
            addShow: function () {
                this.articleList = false;
            },
            handleDel(val, index) {
                this.$Message.success('删除了第' + (index + 1) + '行数据');
            },
        },
        components: {
            ArticleAdd,
            CanEditTable
        }
    }
    ;
</script>
