// 1、导入fs模块
const fs = require('fs');

// 2、调用fs.readFile() 读取文件内容
fs.readFile('./files/3.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    // console.log('读取文件成功！' + dataStr);

    // 3.1 先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ');
    // 3.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ': '));
    })

    // 4.3 把数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n');
    // console.log(newStr);

    // 5、调用fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('成绩写入失败！' + err.message);
        }
        console.log('成绩写入成功！');
    })
})