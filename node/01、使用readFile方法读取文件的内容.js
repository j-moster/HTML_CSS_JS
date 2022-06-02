// 1、先导入 fs 模块，来操作文件
const fs = require('fs');


// 2、调用fs.readFile()方法来读取文件
//      参数1： 读取文件的存放路径
//      参数2： 读取文件的时候采用的编码格式，一般默认指定utf8
//      参数3： 回调函数，拿到读取失败和成功的结果 err dataStr

fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
    // 2.1 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为错误对象， dataStr 的值为 undefined
    console.log(err);
    console.log('-------------');
    console.log(dataStr);
})