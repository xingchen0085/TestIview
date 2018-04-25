import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => {
        require(['@/views/login.vue'], resolve);
    }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => {
        require(['@/views/error-page/404.vue'], resolve);
    }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => {
        require(['@//views/error-page/403.vue'], resolve);
    }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => {
        require(['@/views/error-page/500.vue'], resolve);
    }
};

export const articlePreviewRouter = {
    path: 'preview',
    meta: {
        title: '文章预览'
    },
    name: 'preview',
    component: resolve => {
        require(['@/views/data/article/add/article-preview.vue'], resolve);
    }
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        {
            path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => {
                require(['@/views/home/home.vue'], resolve);
            }
        },
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/system',
        icon: 'ios-folder',
        name: 'system',
        title: '系统管理',
        component: Main,
        children: [
            {
                path: 'user',
                icon: 'compose',
                name: 'user',
                title: '管理员管理',
                component: resolve => {
                    require(['@/views/system/user/userList.vue'], resolve);
                }
            },
            {
                path: 'role',
                icon: 'ios-list-outline',
                name: 'role',
                title: '角色管理',
                component: resolve => {
                    require(['@/views/system/role/roleList.vue'], resolve);
                }
            },
            {
                path: 'menu',
                icon: 'ios-list-outline',
                name: 'menu',
                title: '菜单管理',
                component: resolve => {
                    require(['@/views/system/menu/menuList.vue'], resolve);
                }
            },
            {
                path: 'sql',
                icon: 'ios-list-outline',
                name: 'sql',
                title: 'SQL监控',
                component: resolve => {
                    require(['@/views/system/sql_manager/sqlList.vue'], resolve);
                }
            },
            {
                path: 'task',
                icon: 'ios-list-outline',
                name: 'task',
                title: '定时任务',
                component: resolve => {
                    require(['@/views/system/task/taskList.vue'], resolve);
                }
            }
            ,
            {
                path: 'param',
                icon: 'ios-list-outline',
                name: 'param',
                title: '参数管理',
                component: resolve => {
                    require(['@/views/system/param/paramList.vue'], resolve);
                }
            }
            ,
            {
                path: 'log',
                icon: 'ios-list-outline',
                name: 'lod',
                title: '系统日志',
                component: resolve => {
                    require(['@/views/system/log/logList.vue'], resolve);
                }
            }
            ,
            {
                path: 'file',
                icon: 'ios-list-outline',
                name: 'file',
                title: '文件管理',
                component: resolve => {
                    require(['@/views/system/file/fileList.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/data',
        icon: 'ios-folder',
        name: 'data',
        title: '数据管理',
        component: Main,
        children: [
            {
                path: 'article',
                icon: 'compose',
                name: 'article',
                title: '文章管理',
                component: resolve => {
                    require(['@/views/data/article/articleList.vue'], resolve);
                }
            },
            {
                path: 'message',
                icon: 'ios-list-outline',
                name: 'message',
                title: '留言管理',
                component: resolve => {
                    require(['@/views/data/message/messageList.vue'], resolve);
                }
            },
            {
                path: 'comment',
                icon: 'ios-list-outline',
                name: 'comment',
                title: '评论管理',
                component: resolve => {
                    require(['@/views/data/comment/commentList.vue'], resolve);
                }
            }
        ]
    },
    {
        path: '/page',
        icon: 'ios-paper',
        title: '测试页面',
        name: 'page',
        component: Main,
        children: [
            {
                path: 'index', title: 'Page', name: 'page_index', component: resolve => {
                    require(['@/views/page/page.vue'], resolve);
                }
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404,
    articlePreviewRouter
];
