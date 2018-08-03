<style lang="less">
    .main{
        &-text{
            color: red;
            font-size: 10px;
            height: 200px;
            margin-bottom: 20px;
            background:  url("../../assets/img/logo.png") 0 0 no-repeat;
        }

        h1{
            background:  url("../../assets/img/1.jpg") 0 0 no-repeat;
            height: 100px;
            margin-bottom: 10px;
        }
        img{
            width: 100px;
        }
    }
</style>

<template lang="pug">
    div.main
        p.main-text sssss  ffff  xxx  过一个平凡无趣的人生实在太容易了，你可以不读书，不冒险，不运动，不写作，不外出，不折腾……但是，人生最后悔的事情就是：我本可以。

        p pppppppppp
        img(src="../../assets/img/logo.png")
        
        h1 sssssss 单独
        h2 
            span img img img 
            img(src="../../assets/img/1.jpg")


</template>

<script>
export default {
    name: 'index',
    data() {
        return {}
    },
    created() {
        document.title = 'jdvue 组件测试'
        Toast.show('msg')
        Loading.show(3000, true)
    }
}
</script>