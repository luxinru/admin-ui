import request from '@/utils/request'

// 查询标准化,资产目录表列表
export function listAesst(query) {
  return request({
    url: '/system/asset/list',
    method: 'get',
    params: query
  })
}
// 查询字典数据
export function listDictAesst(query) {
  return request({
    url: '/system/asset/dictList',
    method: 'get',
    params: query
  })
}

// 查询标准化,资产目录表详细
export function getAesst(id) {
  return request({
    url: '/system/asset/' + id,
    method: 'get'
  })
}

// 新增标准化,资产目录表
export function addAesst(data) {
  return request({
    url: '/system/asset/add',
    method: 'post',
    data: data
  })
}

// 修改标准化,资产目录表
export function updateAesst(data) {
  return request({
    url: '/system/asset/edit',
    method: 'put',
    data: data
  })
}

// 删除标准化,资产目录表
export function delAesst(id) {
  return request({
    url: '/system/asset/remove/' + id,
    method: 'delete'
  })


}

// 查询资产目录拉树结构
export function assetselecttree() {
  return request({
    url: '/system/asset/tree',
    method: 'get'
  })
  
}
// 用户状态修改
export function changeUserStatus(id, workStatus) {
  const data = {
    id,
    workStatus
  }
  return request({
    url: '/system/asset/changeStatus',
    method: 'put',
    data: data
  })
}
  //查询标准化,资产目录表列表,资产查询获取的数据
export function listByParam(data) {
  return request({
    url: '/system/asset/param',
    method: 'post',
    data: data
  })
}
