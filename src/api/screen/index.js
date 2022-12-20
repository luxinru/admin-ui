import request from '@/utils/request'

// 登录方法
export function fetchBasicStats(params) {
  return request({
    url: 'query/house/visual/basic/stats',
    method: 'get',
    params
  })
}