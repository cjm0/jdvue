import './common.less'

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









