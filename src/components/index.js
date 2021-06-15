import '../assets/components.less'

import FullLoad from './full-load/index.vue';
import Loading from './loading/index.vue';
import Toast from './toast/index.vue';

const components = [
    FullLoad,
    Loading,
    Toast,
]



const install = (Vue, opts = {}) => {
    if (install.installed) return;

    components.forEach(key => {
        Vue.use(key)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}



const version = '0.0.8'

export {
    install,
    version,
    FullLoad,
    Loading,
    Toast,
}

export default {
    install,
    version
};
