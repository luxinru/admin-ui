import request from '@/utils/request'


export function listDetail(query) {
  return request({
    url: '/account/choose/assets/list',
    method: 'get',
    params: query
  })
}

export function listHouse(keyCode) {
  return request({
    url: '/account/choose/assets/house/list/'+keyCode,
    method: 'get',
  })
}