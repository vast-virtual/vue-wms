import request from '@/utils/request'

export function getQuery(data) {
  return request({
    url: '/user/getUsers',
    method: 'post',
    data
  })
}
