import axios from 'axios'
import qs from 'qs'
import cookie from 'js-cookie'
const service = axios.create({
  baseURL: process.env.VUE_APP_API_PAT,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Todo 是否有token
    config.headers['AMP-Token'] = cookie.get('AMP-Token')
    config.paramsSerializer = params => qs.stringify(params, { indices: false })
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    const code = res.code
    // 242005:; ;  240421:token被其他设备挤掉; 240499:操作权限不足; 240420 token无效
    if (
      code === 240421 ||
      code === 242005 ||
      code === 242006 ||
      code === 100002 ||
      code === 240420 ||
      code === 240435
    ) {
      cookie.remove('AMP-Token')
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
