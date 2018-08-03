import '../assets/lib.less'

import FullLoad from './full-load/index.vue';
import Loading from './loading/index.vue';
import Toast from './toast/index.vue';

const components = {
    FullLoad,
    Loading,
    Toast,
}

let ua = navigator.userAgent.toLowerCase()
window.config = {
    load: null,
    system: {
        isWeixin: ua.indexOf('micromessenger') > -1,
        isApp: ua.indexOf('jindanlicai') > -1,
        isIos: ua.indexOf('iphone') > -1,
        isAndroid: ua.indexOf('android') > -1,
        isIphoneX: /iphone/gi.test(navigator.userAgent) && (screen.height === 812 && screen.width === 375)
    }
}

const version = '1.0.1'
const install = (Vue, opts = {}) => {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// 可以全局 也可以单个引用
export {
    install,
    version,
    FullLoad,
    Loading,
    Toast,
}

export default {
    install,
    version,
}




