import axios from 'axios';
// import { logger } from '@/utils/logger';


const $ = axios.create({
    baseURL: 'https://api.yshxk.com/'
});

$.interceptors.request.use((config) => {
    // logger.info({}, {
    //     label: '请求拦截配置：' + JSON.stringify(config)
    // });
    return config;
}, (err) => {
    // logger.info({}, {
    //     label: '请求拦截出错了：' + JSON.stringify(err)
    // });
})

$.interceptors.response.use(res => {
    if (res.status == 200) {
        return res.data;
    } else {
        // 报错

    }
}, err => {
    // logger.info({}, {
    //     label: '响应拦截出错了：' + JSON.stringify(err)
    // });
});

export { $ }
