const os = require('os')
const getIp = () => { // 获取本地ip
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

module.exports = {
    base: {
        rootPath: '/',
        fileName: 'dist',
        filePath: 'dist/static',
    },
    dev: {
        useEslint: true,
        host: getIp(),
        port: 3003,
        proxy: {
            '/v2': {
                target: 'https://bm.jindanlicai.com/',
                changeOrigin: true,
                cookieDomainRewrite: {
                    "*": getIp()
                }
            },
        }
    }
}
