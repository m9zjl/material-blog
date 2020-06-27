import request from '../utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getArticle(query) {
  return request({
    url: '/blog',
    method: 'get',
    params: query
  })

  // let response = {
  //   "articles": [
  //     {
  //       "id": 34,
  //       "date": 1591444035000,
  //       "labelId": 7,
  //       "title": "快速排序与最小K个元素选择",
  //       "content": "引言 选择最小K个元素是剑指offer中的一道题目，要求找出一个数组中前K个小...",
  //       "author": null,
  //       "status": "published",
  //       "url": "/detail/34"
  //     },
  //     {
  //       "id": 35,
  //       "date": 1591444035001,
  //       "labelId": 8,
  //       "title": "快速排序与最小K个元素选择",
  //       "content": "引言 选择最小K个元素是剑指offer中的一道题目，要求找出一个数组中前K个小...",
  //       "author": null,
  //       "status": "published",
  //       "url": "/detail/35"
  //     }, {
  //       "id": 35,
  //       "date": 1591444035002,
  //       "labelId": 8,
  //       "title": "快速排序与最小K个元素选择",
  //       "content": "引言 选择最小K个元素是剑指offer中的一道题目，要求找出一个数组中前K个小...",
  //       "author": null,
  //       "status": "published",
  //       "url": "/detail/35"
  //     }, {
  //       "id": 35,
  //       "date": 1591444035003,
  //       "labelId": 8,
  //       "title": "快速排序与最小K个元素选择",
  //       "content": "引言 选择最小K个元素是剑指offer中的一道题目，要求找出一个数组中前K个小...",
  //       "author": null,
  //       "status": "published",
  //       "url": "/detail/35"
  //     }, {
  //       "id": 35,
  //       "date": 1591444035004,
  //       "labelId": 8,
  //       "title": "快速排序与最小K个元素选择",
  //       "content": "引言 选择最小K个元素是剑指offer中的一道题目，要求找出一个数组中前K个小...",
  //       "author": null,
  //       "status": "published",
  //       "url": "/detail/35"
  //     },
  //   ],
  //   "labels": [
  //     {"id": 1, "parentId": -1, "name": "默认标签"},
  //     {"id": 3, "parentId": 2, "name": "Java"},
  //     {"id": 4, "parentId": 2, "name": "Android"},
  //     {"id": 5, "parentId": -1, "name": "随想"},
  //     {"id": 7, "parentId": 2, "name": "算法"}
  //   ],
  //   "pages": 1,
  //   "currePage": 1,
  //   "archiveLabel": ["2020 April", "2020 June"],
  //   "curreLabel": null,
  //   "curreKeyWord": null,
  //   "param": ""
  // }
  return response;
}