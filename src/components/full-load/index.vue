
<template lang="pug">
div
    .v-full-load-mask(v-show="mask")
    Loading.v-full-load(v-show="status", size="40")
</template>

<script>
/**
    Loading.show() Loading.hide()
    Loading.show(3000, true)
*/
export default {
    name: 'FullLoad',
    data() {
        return {
            status: false,
            mask: false,
            timer: null
        }
    },
    methods: {
        hide() {
            this.status = false
            this.mask = false
            clearTimeout(this.timer)
        },
        show(time, mask) {
            this.hide()
            this.status = true
            this.mask = mask
            
            if (Number(time)) {
                this.timer = setTimeout(() => {
                    this.hide()
                }, time)
            }
        }
    },
    mounted() {
        window['Loading'] = {
            show: this.show,
            hide: this.hide
        }
    }
};
</script>