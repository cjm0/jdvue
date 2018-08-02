import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.js'
import jdvue from './components'
Vue.use(jdvue)

// 移动端修复点击延迟
import FastClick from 'fastclick' 
if ('addEventListener' in document) {
    document.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);
}

// 路由跳转前拦截
router.beforeEach((to, from, next) => {
    next()
    window.scrollTo(0, 0)
})

// 兼容ie支持promise
window.Promise = Promise

// 关闭提示
Vue.config.productionTip = false

// new 创建对象实例后需要赋值给变量
const vue = new Vue({ 
    el: '#app',
    router,
    render: h => h(App) // App 组件并不是根组件
})
Vue.use({
    vue
})
