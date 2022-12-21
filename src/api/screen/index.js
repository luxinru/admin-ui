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

export function fetchVisualPaper(params) {
  return request({
    url: `data-visualization/house/visual/paper/${params.departCode}`,
    method: 'get',
  })
}

export function fetchVisualRentalIncome(params) {
  return request({
    url: `data-visualization/house/visual/rental/income/${params.departCode}`,
    method: 'get',
  })
}

export function fetchVisualList(params) {
  return request({
    url: `data-visualization/house/visual/list`,
    method: 'get',
    data: params,
  })
}