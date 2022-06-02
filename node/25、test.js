// 导入自定义的格式化时间的模块
const Time = require('./24、dataFormat');

// 调用方法，进行时间的格式化
const dt = new Date();
console.log(dt);
const t = Time.dataFormat(dt);
console.log(t);