import {createRouter, createWebHistory} from "vue-router"

//需要安装nprogress--->初始化项目并未安装,视业务选择自行安装
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
//禁用进度环
// NProgress.configure({ showSpinner: false })


let resultComps = [] // 路由集合

// 1. 获取到 @/basic/components 目录下的组件名称
let requireComponent = require.context(
    '@/basic/components', // 在当前目录下查找
    false, // 不遍历子文件夹
    /\.vue$/ // 正则匹配 以 .vue结尾的文件
)

// 2. 循环定义路由配置
requireComponent.keys().forEach(fileName => {
    let name = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')  //正则匹配出组件名
    resultComps.push(
        {
            path: '/' + (name == 'Home' ? '' : name.toLowerCase()), //这个判断是等于home首页，路径就默认为/ ，toLowerCase是转小写函数
            name: name.toLowerCase(),
            component: () => import('@/basic/components/' + name)  //这是引入组件函数 等于import Login from './components/Login'
        }
    )
})

// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式 需要在头部加载导入 createWebHashHistory 方法
    // history: createWebHashHistory(),
    // 采用 history 模式 需要在头部加载导入 createWebHistory 方法
    history: createWebHistory(),
    routes: resultComps, // short for `routes: routes`
})

// 配置路由白名单
const whiteList = ['/login']

// 5. 创建路由前置守卫(跳转前)
router.beforeEach((to, from, next) => {
    // 开启进度环
    // NProgress.start()
    console.log(to, 1)
    console.log(from, 2)

    if (to.path == '/login') {
        return
    }

    //路由白名单直接跳过
    if (whiteList.indexOf(to.path) !== -1) {
        next()
        return
    }

    // 鉴权拦截操作
    let token = '123123'
    if (token) {
        next()
    } else {
        // 没有token,跳转回登录页
        next('/login')
    }
})

router.afterEach(() => {
    // 关闭进度环
    // NProgress.done()
})

export default router