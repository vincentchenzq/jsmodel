import { getInnerHTML } from 'src/utils';

// parse

// import Basic from 'src/class/Basic';
// document.getElementById('app').innerHTML = getInnerHTML(Basic.parse(undefined));
// document.getElementById('app').innerHTML = getInnerHTML(Basic.parse(null));
// document.getElementById('app').innerHTML = getInnerHTML(
//   Basic.parse({
//     source: '2019/01/01 01:01:01',
//     salary: 10000
//   })
// );
/*
  {
    "id": null, // 默认为null // /src/js-model/model.js 104行
    "description": null, 
    "tags": [],
    "rate": 0.8, // 默认值
    "source": "2019-01-01", // 转换日期
    "salary": 10 // 转换金额单位为千
  }
*/

// dispose

// document.getElementById('app').innerHTML = getInnerHTML(Basic.dispose({
//   "id": null, // 默认为null
//   "description": null,
//   "tags": [],
//   "rate": 0.8, // 默认值
//   "source": "2019-01-01", // 转换日期
//   "salary": 10 // 转换金额单位为千
// }));
/**
 删除null值的属性，并转换金额与日期
  {
    "tags": [],
    "rate": 0.8,
    "source": 1546300800000,
    "salary": 10000
  }
 */

// 进阶用法

// import User from 'src/class/UserInfo/User';
// parse
// document.getElementById('app').innerHTML = getInnerHTML(
//   User.parse({
//     basic: {
//       id: 123123,
//     },
//     edu: [
//       {
//         id: 12,
//       },
//     ],
//   })
// );

// dispose
// document.getElementById('app').innerHTML = getInnerHTML(
//   User.dispose({
//     basic: {
//       id: 123123,
//       companyId: 123,
//       rate: null,
//     },
//     edu: [
//       {
//         id: 12,
//         school: 'school',
//         major: null,
//       },
//     ],
//   })
// );

// // 扩展
// import Instance from 'src/class/InfoModel/Instance';
// // 单独编写display和dispose
// document.getElementById('app').innerHTML = getInnerHTML(
//   Instance.parse({
//     salary: 10000,
//   })
// );
// // {salary: 10}

// document.getElementById('app').innerHTML = getInnerHTML(
//   Instance.dispose({ salary: 10 })
// );
// // {salary: 10000}

// 继承
// import InfoModel from 'src/class/InfoModel/InfoModel';

// document.getElementById('app').innerHTML = getInnerHTML(
//   InfoModel.parse({})
// )



