const fs = require('fs');

// 调用fs.writeFile() 方法，写入文件的内容
//      参数1： 表示文件的存放路径
//      参数2： 表示要写入的内容
//      参数3:  回调函数 
fs.writeFile('G:/files/2.txt', 'abcd', function(err) {
    // 如果文件写入成功，则err的值等于null
    // 如果文件写入失败，则err的值等于一个错误对象
    // console.log(err);
    if (err) {
        return console.log('文件写入失败！！！' + err.message);
    }
    console.log('文件写入成功！');
})