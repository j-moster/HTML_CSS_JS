const monster = require('./monster-tools');

const dtStr = monster.dataFormat(new Date());
console.log(dtStr);
console.log('---------------');

const htmlStr = '<h1>"abc"</h1>';
const str = monster.htmlEscape(htmlStr);
console.log(str);
console.log('---------------');
const str1 = monster.htmlUnEscape(str);
console.log(str1);