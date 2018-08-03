import Vue from 'vue'
import App from './App.vue'
import router from './router'



import '../lib/index.min.css'

// import '../lib/index.min.js'
// Vue.use(jdvue)

/*
    import {FullLoad, Loading, Toast} from './components/index.js'
    Vue.component(FullLoad.name, FullLoad)
    Vue.component(Loading.name, Loading)
    Vue.component(Toast.name, Toast)
*/

import jdvue from './components/index.js'
Vue.use(jdvue)




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
