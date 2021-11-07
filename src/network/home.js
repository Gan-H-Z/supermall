import { request } from 'network/request.js'

export function getHomeMultidata() {
  return request({
    url: '/Home/Multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    type,
    page
  })
}