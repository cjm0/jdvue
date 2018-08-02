import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../pages/index/index.vue'], resolve)
        },
        {
            path: '/temp',
            component: resolve => require(['../pages/temp/index.vue'], resolve)
        }
    ]
})
