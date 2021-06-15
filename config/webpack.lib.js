process.env.NODE_ENV = 'production' // 设置当前环境为生产环境 放在最上面
const baseWebpackConfig = require('./webpack.base.js')
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production', // 启用生产模式配置
    entry: {
        index: './src/components/index.js',
    },
    output: { 
        path: path.join(__dirname, '../lib'), // 输出到lib这个地址
        filename: '[name].js',
        library:'jdvue',   
        libraryTarget: 'umd', 
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
   
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new CleanWebpackPlugin(
            ['lib/'], // 删除匹配的文件
            {
                root: path.resolve(__dirname, '../'), // 重置到根路经
                verbose: true, // 开启在控制台输出信息
                dry: false, // 启用删除文件
            }
        ),
        new MiniCssExtractPlugin({ // 提取css
            filename: '[name].css'
        }),
        new OptimizeCss({ // 压缩提取的css
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true,
        }),
    ],
    performance: {
        hints: "warning" // 打包资源超过 250kb 出提示
    }
})
