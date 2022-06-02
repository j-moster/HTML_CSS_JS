const express = require('express')
const app = express()

// app.use(express/static('/files'))
// 导入路由模块
const router = require('./34、router')

// 注册路由模块
app.use('/api', router)

// app.use()函数的作用：就是用来注册全局中间件的
app.listen(80, () => {
    console.log('http://127.0.0.1');
})