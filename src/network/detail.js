import { request } from "./request";

export function getDetailData(iid) {
  return request({
    url: '/datail',
    params: {
      iid,
    }
  })
}