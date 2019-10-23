import service from '@/utils/service.js';

function getList(data) {
  return service({
    url: '/article/list',
    method: 'post',
    data
  })
}

function getDetail(data) {
  return service({
    url: '/article/detail',
    method: 'post',
    data
  })
}



export {
  getList,
  getDetail
}