import axios from 'axios';
// import { Message, MessageBox } from 'element-ui';

const service = axios.create({
    timeout: 10000, // 超时时间 10s
    withCredentials: true // 允许携带cookie
});

// http请求发送过滤器
service.interceptors.request.use(
    (config: any) => {
        config.headers = {
            ...config.headers,
            // todo
        };
        // config.url = (process.env.VUE_APP_LOCAL_PROXY ? location.origin : process.env['VUE_APP_API_' + (config.service ? config.service.toUpperCase() : 'BASE')]) + config.url;
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// http请求回调过滤器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            const res = response.data;
            if (res.code !== '0') {
                switch (res.code) {
                    case '3001':
                        location.href = res.data;
                        break;
                    case '3002':
                        location.href = res.data;
                        break;
                    default:
                        return Promise.reject('error');
                }
            }
            if (res.status === 401) {
                // 没有权限，退出重新登录界面
                location.href = '/api/login';
            }
            return res;
        } else {
            // todo 请求失败
        }
    }, error => {
        // todo 接口异常处理 网络错误
        console.log('err：' + error); // for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // });
        return Promise.reject(error);
    }
);

export default service;
