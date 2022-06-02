const fs = require('fs');



fs.readFile('./files/11.txt', 'utf-8', function(err, result) {
    if (err) {
        console.log('读取文件失败！！！' + err.message);
    } else {
        console.log('读取文件成功！！！' + result);
    }

})