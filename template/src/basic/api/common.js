import axios from '@/basic/api/http'

const login = function (data) {
    return axios({
        url: '/api/Login/doLogin',      // url = base url + request url
        method: 'post',
        data: data    //----------------->>>区别
    })
}

const getProgressPdf = function (params) {
    return axios({
        url: '/api/Progress/getProgressPdf',      // url = base url + request url
        method: 'get',
        params: params    //----------------->>>区别
    })
}

export default {
    login,
    getProgressPdf
}