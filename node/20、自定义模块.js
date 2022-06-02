// 在一个自定义模块中，默认情况下，module.exports = {}


const age = 20;

// 向外共享成员
// 向module.exports对象上挂在username属性
module.exports.username = 'zs';
// 向module.exports 对象上挂在sayHello方法
module.exports.sayHello = function() {
    console.log('hello');
}

module.exports.age = age;

// 让module.exports指向了一个全新的对象
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('hi!');
    }
}