import { request } from 'network/request.js'

export function getHomeMultidata() {
  return request({
    url: '/Home/Multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}