import axios from 'axios'

// 封装网络请求模块的最优解
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.比如网络请求的config配置(url，请求头 等等)中的一些信息不符合服务器的要求，我们需要将config中的一些信息进行修改、删除、添加 之后再将网络请求放行

    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标(加载图片，比如转圈圈，进度条等等)

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息(类似判断用户是否属于登录状态，如果不是的话就重定向到登录界面)

    // 执行完拦截后相关的操作后，我们就需要将config放行，这样网络请求才能继续执行下去，必填
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);

    // 执行完拦截后相关的操作后，我们就需要将res放行，这样网络请求才能继续执行下去，必填
    return res.data
  }, err => {
    console.log(err);
  })


  // 3.发送网络请求    axios返回的是一个Promise，所以我们调用的时候直接在调用的函数后面打点.then和.cath就可以了
  return instance(config)

}