import request from '../utils/request'

export function archiveItems() {
  let response = request({
    url: '/archives',
    method: 'get',
  });
  // let response = {
  //   "total": 2,
  //   "items": [{
  //     "children": [
  //       {"text": "2020 四月", "to": "2020-04"},
  //       {"text": "2020 六月", "to": "2020-06"}
  //     ],
  //     "icon": "archive",
  //     "text": "归档",
  //     "group": "archive"
  //   }, {
  //     "children": [
  //       {"text": "随想", "to": "5"},
  //       {"text": "算法", "to": "7"},
  //       {
  //         "text": "Android",
  //         "to": "4"
  //       },
  //       {"text": "Java", "to": "3"},
  //       {"text": "默认标签", "to": "1"}
  //     ],
  //     "icon": "label",
  //     "text": "标签",
  //     "group": "category"
  //   }]
  // }
  return response;
}