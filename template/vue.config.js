module.exports = {
    //基本路径
    publicPath: './',
    //输出文件目录
    outputDir: 'dist',
    //是否在保存的时候检查
    lintOnSave: true,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 ''
    devServer: {
        https: false,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_BASE_URL, // 代理域名
                changeOrigin: process.env.NODE_ENV == 'development' // 是否跨域
            }
        }
    }
}