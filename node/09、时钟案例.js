// 导入fs模块
const { resolve6 } = require('dns');
const fs = require('fs');
// 导入path模块
const path = require('path');

// 定义正则表达式 分别匹配<style></style> 和<script></script>标签
// \s代表空白字符 \S 代表非空白字符
// 匹配<style></style>标签的正则
const regStyle = /<style>[\s\S]*<\/style>/;
// 匹配<script></script>标签的正则
const regScript = /<script>[\s\S]*<\/script>/;


// 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf-8', function(err, dataStr) {
    // 读取文件失败
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    // 读取文件成功，调用三个对应的方法，分别拆解 css js html
    resolveCss(dataStr);
    resolveJs(dataStr);
    resolveHtml(dataStr);
})

// 定义处理css样式的方法
function resolveCss(htmlStr) {
    // 使用正则匹配提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    // console.log(r1[0]);
    // 将提取出来的样式字符串，进行字符串replace替换操作
    const newCss = r1[0].replace('<style>', '').replace('</style>', '');
    // 调用fs.writeFile()方法，将提取的样式，写入到clock目录index.css的文件里面
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCss, function(err) {
        if (err) {
            return console.log('写入css文件失败！' + err.message);
        }
        console.log('写入css文件成功！');
    })
}

// 定义处理js脚本的方法
function resolveJs(htmlStr) {
    // 正则匹配需要的内容
    const r2 = regScript.exec(htmlStr);
    const newJs = r2[0].replace('<script>', '').replace('</script>', '');
    // 调用fs.writeFile()方法，将提取的样式，写入到clock目录下index.js的文件里面
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJs, function(err) {
        if (err) {
            return console.log('写入js文件失败！' + err.message);
        }
        console.log('写入js文件成功！');
    })
}

// 定义处理html结构的方法
function resolveHtml(htmlStr) {
    // 将字符串调用replace方法，把内嵌的style和script标签，替换为外联的link和script标签
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>');
    // 写入index.html 这个文件
    fs.writeFile(path.join(__dirname, '/clock/index.html'), newHtml, function(err) {
        if (err) {
            return console.log('文件写入失败！' + err.message);
        }
        console.log('写入html文件成功！');
    })
}