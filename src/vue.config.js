const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {

    // 基本路径（相对路径./）
    publicPath: '/', // 从 Vue CLI 3.3 起已弃用，请使用publicPath

    /* publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'; */

    // 输出文件目录
    outputDir: 'dist',

    // 生成的静态资源相对与outputDir的目录
    assetsDir: 'static',

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    // chainWebpack: (config) => {
    //     // 别名配置
    //     config.resolve.alias
    //         .set('@', path.relative(__dirname, './src'));
    // },

    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    configureWebpack: (config) => {

    },

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,

    // css相关配置
    css: {

        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,

        // 开启 CSS source maps?
        sourceMap: false,

        // css预设器配置项
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        },

        // 启用 CSS modules for all css / pre-processor files.
        modules: false

    },

    // use thread-loader for babel & TS in production build

    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,

    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {
        // 替换系统默认logo
        iconPaths: {
            favicon32: 'favicon.ico', // logo路径
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

    // webpack-dev-server 相关配置
    devServer: {

        open: false, // 服务启动后自动打开浏览器访问配置

        // host: 'localhost', // 服务ip

        port: 8088,

        https: false,

        hotOnly: false,

        // proxy: {
        //     '/api': {
        //         target: process.env.VUE_APP_API_BASE, // 代码的服务地址
        //         ws: false, // proxy websockets
        //         changeOrigin: true,
        //         // pathRewrite: {
        //         //     '^/lyra-api': '/' //需要rewrite重写的,
        //         // }
        //     }
        // },

        before: app => {}

    },
    // 第三方插件配置
    pluginOptions: {

        // ...

    }
};