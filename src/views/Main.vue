<style lang="less">
    @import "./main.less";
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <shrinkable-menu 
                :shrink="shrink"
                :menu-list="menuList">
                <div slot="top" class="logo-con">
                    <img v-show="!shrink"  src="../images/logo.jpg" key="max-logo" />
                    <img v-show="shrink" src="../images/logo-min.jpg" key="min-logo" />
                </div>
            </shrinkable-menu>
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="main-header">
                <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
				<div class="header-middle-con">
                    <div class="main-breadcrumb">
                        <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                    </div>
                </div>
                <div class="header-avator-con">
                    <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                <a href="javascript:void(0)">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Avatar icon="person" style="background: #619fe7;margin-left:10px;"></Avatar>
                        </Row>
                    </div>
                </div>
            </div>
			<!--
				<div class="tags-con">
					<tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
				</div>
			-->
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
import breadcrumbNav from './main-components/breadcrumb-nav.vue';
import tagsPageOpened from './main-components/tags-page-opened.vue';
import util from '@/libs/util.js';

export default {
    components: {
        shrinkableMenu,
		breadcrumbNav,
		tagsPageOpened
    },
    data () {
        return {
            shrink: false,
            userName: ''
        };
    },
    computed: {
        menuList () {
            return this.$store.state.app.menuList;
        },
		currentPath () {
           return this.$store.state.app.currentPath; // 当前面包屑数组
        },
		pageTagsList () {
                return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
        },
		cachePage () {
                return this.$store.state.app.cachePage;
        },
    },
    methods: {
        init () {
			let pathArr = util.setCurrentPath(this, this.$route.name);
            this.userName = Cookies.get('user');
			this.checkTag(this.$route.name);	
        },
        toggleClick () {
            this.shrink = !this.shrink;
        },
        handleClickUserDropdown (name) {
            this.$router.push({
                name: 'login'
            });
        },
		checkTag (name) {
				
                let openpageHasTag = this.pageTagsList.some(item => {
                    if (item.name === name) {
                        return true;
                    }
                });
				
                if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
                    util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
                }
            },
    },
	watch:{
		'$route' (to) {
			this.$store.commit('setCurrentPageName', to.name);
			let pathArr = util.setCurrentPath(this, to.name);
			this.checkTag(to.name);
			localStorage.currentPageName = to.name;
		},
	},
    mounted () {
        this.init();
    },
	created () {
            // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
    },
};
</script>
