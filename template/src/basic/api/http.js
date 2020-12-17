import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? '' : process.env.VUE_APP_BASE_URL,
    timeout: 10000, // request timeout
})

//  请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Accept'] = 'application/json'
        config.headers['Request-From'] = 'mobile'

        let token = sessionStorage.getItem('loginToken') || null
        if (token) {
            // 如果token不为null，否则传token给后台
            config.headers['Token'] = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data
        //届时根据后端返回success或者code值判断
        if (res.success === true || res.code === 200) {
            return res
        } else {
            // 根据业务特定返回值做特定处理
            return res
        }
    },
    (err) => {
        //响应错误
        if (err.response) { // 响应错误码处理
            const status = err.response.status
            let message = '请求地址出错'
            switch (status) {
                case 400:
                    message = '请求错误'
                    break
                case 401:
                    message = '未授权，请登录'
                    break
                case 403 :
                    message = '拒绝访问'
                    break
                case 404:
                    message = '请求地址出错：' + process.env.VUE_APP_BASE_URL + err.response.config.url;
                    break
                case 408:
                    message = '请求超时'
                    break
                case 500:
                    message = '服务器异常'
                    break
                case 502:
                    message = '网关错误'
                    break
                case 503:
                    message = '服务器不可用'
                    break
                case 504:
                    message = '网关超时'
                    break
                case 505:
                    message = 'HTTP版本不受支持'
                    break
                case 405:
                    message = '请求类型错误'
                    break
                default:
            }
            alert(message)

            return Promise.reject(err.response)
        } else if (!window.navigator.online) { // 断网处理
            // todo: jump to offline page
            return -1
        }
        return Promise.reject(err)
    }
)

export default service