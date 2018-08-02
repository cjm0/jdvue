process.env.NODE_ENV = 'production' // 设置当前环境为生产环境 放在最上面
const config = require('./base.conf.js') // 配置文件
const baseWebpackConfig = require('./webpack.base.js')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production', // 启用生产模式配置
    output: {
        publicPath: './static/', // 资源引用路径前后都有斜杠
    },
    plugins: [
        new CleanWebpackPlugin(
            `${config.base.fileName}/`, // 删除匹配的文件
            {
                root: '/', // 重置到根路经
                exclude: ['vendor.dll.js', 'vendor.manifest.json'], // 这几个文件不删除
                verbose: true, // 开启在控制台输出信息
                dry: false, // 启用删除文件
            }
        ),
        new webpack.DllReferencePlugin({
            manifest: require(`../${config.base.filePath}/js/vendor.manifest.json`),
            context: path.join(__dirname, '..'), // 和dllplugin里面的context一致
        }),
        new MiniCssExtractPlugin({ // 提取css
            filename: 'css/[name]-[hash:4].css'
        }),
        new OptimizeCss({ // 压缩提取的css
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true,
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html', // 相对于static的路径
            template: path.resolve(__dirname, '../src/assets/template.html'),
            hash: true, 
            minify: {
                removeAttributeQuotes: true, // 清除属性引号
                collapseWhitespace: true, // 清除多余空格
                minifyJS:true, // 压缩javascript
            },
            vendorJsName: 'vendor.dll.js', // 给模板引用
            chunksSortMode: "dependency",
        })
    ],
    performance: {
        hints: "warning" // 打包资源超过 250kb 出提示
    }
})
