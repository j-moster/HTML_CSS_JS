const express = require('express');
const app = express()

// 在这里，调用express.static() 方法，快速的对外提供静态资源
// 如果在托管的静态资源访问路径之前，挂载路径前缀，如下
app.use('/text', express.static('./text'));
app.use(express.static('./clock'));


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})