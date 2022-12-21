import request from '@/utils/request'

export function fetchBasicStats(params) {
  return request({
    url: `data-visualization/house/visual/basic/stats/${params.departCode}`,
    method: 'get',
  })
}

export function fetchVisualAmount(params) {
  return request({
    url: `data-visualization/house/visual/amount/${params.departCode}`,
    method: 'get',
  })
}

export function fetchRentalGrowth(params) {
  return request({
    url: `data-visualization/house/visual/rental/growth/${params.departCode}`,
    method: 'get',
  })
}