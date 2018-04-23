<template>
    <div>
        <Row>
            <Col span="18">
            <Card>
                <Form :label-width="80">
                    <FormItem label="文章标题" :error="articleError">
                        <Input v-model="articleTitle" @on-blur="handleArticletitleBlur" icon="android-list"/>
                    </FormItem>
                    <div class="article-link-con">
                        <transition name="fixed-link">
                            <FormItem v-show="showLink" label="固定链接">
                                    <span>
                                        <span key="pathfixedtext">{{ fixedLink }}</span><span key="pathText"
                                                                                              v-if="!editLink">{{ articlePath }}</span>
                                        <Input key="pathInput" v-model="articlePath"
                                               style="display:inline-block;width:auto" v-else/>
                                    </span>
                                <span style="float:right;">
                                        <Button :type="editPathButtonType" @click="editArticlePath">{{ editPathButtonText }}</Button>
                                    </span>
                            </FormItem>
                        </transition>
                    </div>
                </Form>
                <div class="margin-top-20">
                    <textarea id="articleEditor"></textarea>
                </div>
            </Card>
            </Col>
            <Col span="6" class="padding-left-10">
            <Card>
                <p slot="title">
                    <Icon type="paper-airplane"></Icon>
                    发布
                </p>
                <p class="margin-top-10">
                    <Icon type="android-time"></Icon>&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp; 态：
                    <Select size="small" style="width:90px" value="草稿">
                        <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{
                            item.value }}
                        </Option>
                    </Select>
                </p>
                <p class="margin-top-10">
                    <Icon type="eye"></Icon>&nbsp;&nbsp;公开度：&nbsp;<b>{{ Openness }}</b>
                    <Button v-show="!editOpenness" size="small" @click="handleEditOpenness" type="text">修改
                    </Button>
                    <transition name="openness-con">
                        <div v-show="editOpenness" class="openness-radio-con">
                            <RadioGroup v-model="currentOpenness" vertical>
                                <Radio label="公开">
                                    公开
                                    <Checkbox v-show="currentOpenness === '公开'" v-model="topArticle">在首页置顶这篇文章
                                    </Checkbox>
                                </Radio>
                                <Radio label="密码">
                                    密码
                                    <Input v-show="currentOpenness === '密码'" style="width:120px" size="small"
                                           placeholder="请输入密码"/>
                                </Radio>
                                <Radio label="私密"></Radio>
                            </RadioGroup>
                            <div>
                                <Button type="primary" @click="handleSaveOpenness">确认</Button>
                                <Button type="ghost" @click="cancelEditOpenness">取消</Button>
                            </div>
                        </div>
                    </transition>
                </p>
                <p class="margin-top-10">
                    <Icon type="ios-calendar-outline"></Icon>&nbsp;&nbsp;
                    <span v-if="publishTimeType === 'immediately'">立即发布</span><span
                        v-else>定时：{{ publishTime }}</span>
                    <Button v-show="!editPublishTime" size="small" @click="handleEditPublishTime" type="text">
                        修改
                    </Button>
                    <transition name="publish-time">
                        <div v-show="editPublishTime" class="publish-time-picker-con">
                            <div class="margin-top-10">
                                <DatePicker @on-change="setPublishTime" type="datetime" style="width:200px;"
                                            placeholder="选择日期和时间"></DatePicker>
                            </div>
                            <div class="margin-top-10">
                                <Button type="primary" @click="handleSavePublishTime">确认</Button>
                                <Button type="ghost" @click="cancelEditPublishTime">取消</Button>
                            </div>
                        </div>
                    </transition>
                </p>
                <Row class="margin-top-20 publish-button-con">
                    <span class="publish-button"><Button @click="handlePreview">预览</Button></span>
                    <span class="publish-button"><Button @click="handleSaveDraft">保存草稿</Button></span>
                    <span class="publish-button"><Button @click="handlePublish" :loading="publishLoading"
                                                         icon="ios-checkmark" style="width:90px;"
                                                         type="primary">发布</Button></span>
                </Row>
            </Card>
            <div class="margin-top-10">
                <Card>
                    <p slot="title">
                        <Icon type="navicon-round"></Icon>
                        分类目录
                    </p>
                    <Tabs type="card">
                        <TabPane label="所有分类目录">
                            <div class="classification-con">
                                <Tree :data="classificationList" @on-check-change="setClassificationInAll"
                                      show-checkbox></Tree>
                            </div>
                        </TabPane>
                        <TabPane label="常用目录">
                            <div class="classification-con">
                                <CheckboxGroup v-model="offenUsedClassSelected"
                                               @on-change="setClassificationInOffen">
                                    <p v-for="item in offenUsedClass" :key="item.title">
                                        <Checkbox :label="item.title">{{ item.title }}</Checkbox>
                                    </p>
                                </CheckboxGroup>
                            </div>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
            <div class="margin-top-10">
                <Card>
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        标签
                    </p>
                    <Row>
                        <Col span="18">
                        <Select v-model="articleTagSelected" multiple @on-change="handleSelectTag"
                                placeholder="请选择文章标签">
                            <Option v-for="item in articleTagList" :value="item.value" :key="item.value">{{
                                item.value }}
                            </Option>
                        </Select>
                        </Col>
                        <Col span="6" class="padding-left-10">
                        <Button v-show="!addingNewTag" @click="handleAddNewTag" long type="ghost">新建</Button>
                        </Col>
                    </Row>
                    <transition name="add-new-tag">
                        <div v-show="addingNewTag" class="add-new-tag-con">
                            <Col span="14">
                            <Input v-model="newTagName" placeholder="请输入标签名"/>
                            </Col>
                            <Col span="5" class="padding-left-10">
                            <Button @click="createNewTag" long type="primary">确定</Button>
                            </Col>
                            <Col span="5" class="padding-left-10">
                            <Button @click="cancelCreateNewTag" long type="ghost">取消</Button>
                            </Col>
                        </div>
                    </transition>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
</template>