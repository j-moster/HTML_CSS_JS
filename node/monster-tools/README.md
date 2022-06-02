## 安装
```
npm imstall monster-tools
```

## 导入
```js
const monster = require('monster-tools')
```

## 格式化时间
```js
 // 调用 dataFormat 对时间进行格式化 
const dtStr = monster.dataFormat(new Date())
// 结果 2022-05-31 16:34:02 
console.log(dtStr);
```

## 转义html中的特殊字符串
```js
// 待转换的 html 字符串
const htmlStr = '<h1>"abc"</h1>';
// 调用 htmlEscape函数 进行转换
const str = monster.htmlEsxape(htmlStr);
// 结果 &lt;h1&gt;&quot;abc&quot;&lt;/h1&gt;
console.log(str);
```

## 还原html中的特殊字符
```js
// 调用 htmlUnEscape 方法 还原字符
const str1 = monster.htmlUnEscape(str);
// 结果 <h1>"abc"</h1>
console.log(str1);
```

## 开源协议
ISC
