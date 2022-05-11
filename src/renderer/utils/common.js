/**
 * @Author: zhaoxin
 * @Date: 2022/3/24 13:57
 * @LastEditors: zhaoxin
 * @LastEditTime: 2022-03-24 16:32
 * @Description: desc
 */

/**
 * 时间戳转换为日期格式，秒级
 * @param timestamp
 * @param isMi 是否秒级
 * @returns {string}
 */
const formatDate = (timestamp, isMi) => {
  let date = new Date(timestamp);
  let y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();
  if (m < 10) { m = '0' + m; }
  if (d < 10) { d = '0' + d; }
  if (h < 10) { h = '0' + h; }
  if (i < 10) { i = '0' + i; }
  if (s < 10) { s = '0' + s; }

  let t = '';
  if(isMi) {
    t = y + '-' + m + '-' + d + ' ' + h + ':' + i;
  } else {
    t = y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
  }

  return t;
}

export {
  formatDate
}
