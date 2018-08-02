
import FullLoad from './full-load/index.vue';
import Loading from './loading/index.vue';
import Toast from './toast/index.vue';

const version = '1.0.1'
const components = {
    FullLoad,
    Loading,
    Toast,
}

const install = Vue => {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

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
}





