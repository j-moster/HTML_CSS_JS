const path = require('path');
const fs = require('fs');

// 注意： ../ 是返回上一级目录
// const pathStr = path.join('/a', '/b/c', '../', './d');
// console.log(pathStr);


fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})