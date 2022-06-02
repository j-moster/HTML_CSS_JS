const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.')
})

app.use((err, req, res, next) => {
    console.log('服务器内部发生了错误' + err.message);
    res.send('Error' + err.message)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})