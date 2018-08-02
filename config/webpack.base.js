const config = require('./base.conf.js') // 配置文件
const path = require('path') 
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 处理路径
function resolve (dir) { 
    return path.join(__dirname, '..', dir)
}
// eslint检测
const createLintingRule = () => ({ 
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: true
    }
})
// 获取当前环境
const prod = process.env.NODE_ENV === 'production' 

module.exports = {
    context: path.resolve(__dirname, '../'), // 作用于entry 和 loader
    entry: {
        index: './src/main.js',
    },
    output: { 
        path: resolve(`${config.base.filePath}`), // 输出到static这个地址 只能是绝对路径
        filename: 'js/[name].js',
        chunkFilename: 'js/v-[name]-[chunkhash:4].js'
    },
    resolve: {
        extensions: ['.css', '.js', '.vue', '.json'], // 使用的扩展名
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 模块别名列表
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssModules: { // 开启 CSS Modules
                        localIdentName: 'v_[hash:5]', // 自定义生成的类名
                        camelCase: true
                    },
                    postcss: [
                        autoprefixer({ // css加前缀
                            browsers: ['last 2 versions', '> 1%']
                        })
                    ]
                },
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                        options: {
                            /*
                                复写css文件中资源路径
                                因为css文件中的外链是相对与css的，
                                我们抽离的css文件在可能会单独放在css文件夹内
                                引用其他如img/a.png会寻址错误
                                这种情况下所以单独需要配置../../，复写其中资源的路径
                            */
                            publicPath: '../' 
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ // 必须加，提高速度
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'img/[name].[hash:7].[ext]',
                    limit: 4096,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'fonts/[name].[hash:7].[ext]',
                    limit: 4096,
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'media/[name].[hash:7].[ext]',
                    limit: 4096,
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin() // vue-loader新用法
    ],
}


