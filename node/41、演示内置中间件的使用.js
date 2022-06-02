const express = require('express')
const app = express()
    // 注意：除了错误级别的中间件，其他的中间件，必须在路由之间进行配置
    // 通过express.json()这个中间件，解析表单中的JSON格式的数据
app.use(express.json())
    // 通过express.urlencoded()方法来解析表单中的url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))
app.post('/', (req, res) => {
    // 在服务器，可以使用req.body这个属性，来接收客户端发过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则res.body默认等于undefined
    console.log(req.body);
    res.send('ok');
})
app.post('/book', (req, res) => {
    // 服务器可以使用req.body这个属性来接收JSON格式额表单数据和url-encoded格式的数据
    console.log(req.body);
    res.send('ok');
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})