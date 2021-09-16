/**
 * 获取 组件目录
 */
const fs = require('fs')
const path = require('path')
const componentDir = 'components'
// 指定目录下所有文件名称
const catalogueNames = fs.readdirSync(path.resolve(componentDir))
// 数组 累加器 返回一个组装好目录和地址的对象
const catalogueMap = catalogueNames.reduce((prev, name) => {
  if (name.indexOf('.') > 0) {
    // 过滤 文件
    return prev
  }
  prev[name] = `${componentDir}/${name}/index.ts`
  return prev
}, {})

export default catalogueMap
