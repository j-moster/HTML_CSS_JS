// 导入express模块
const express = require('express')
    // 创建express的服务器实例
const app = express()

// 定义中间件的函数
const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件');
    next();
}
const mw2 = (req, res, next) => {
    console.log('调用了第二个局部生效的中间件');
    next();
}

// 创建路由
// app.get('/', mw1, mw2, (req, res) => {
//     res.send('Home page.')
// })
// 可以将多个中间件放在数组中
app.get('/', [mw1, mw2], (req, res) => {
    res.send('Home page.')
})

app.get('/user', (req, res) => {
    res.send('User page.')
})

// 调用了app.listen()方法，指定端口号并启动web服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
})