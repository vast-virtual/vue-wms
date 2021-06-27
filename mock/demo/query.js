const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    nickName: '@sentence(10, 20)',
    'status|1': ['0', '1', '2'],
  }]
})

module.exports = [
  {
    url: '/user/getUsers',
    type: 'post',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
