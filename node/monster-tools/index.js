// 这是包的入口文件
const data = require('./src/dataFormat')
const escape = require('./src/htmlEscape')



module.exports = {
    ...data,
    ...escape
}