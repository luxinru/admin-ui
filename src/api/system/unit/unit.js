import request from '@/utils/request'

// 查询用户部门表列表
export function listUserDept(query) {
  return request({
    url: '/system/rewrite/user/dept',
    method: 'get',
    params: query
  })
}


