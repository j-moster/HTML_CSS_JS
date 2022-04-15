function animate(obj, target, callback) {
    // console.log(callback); callback = function() {} 调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长写在定时器里面
        // 把我们的步长值改为整数 不要出现小数的问题
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        } else {
            // 步长值改为一个慢慢变小的值 步长公式： （目标位置 - 当前位置） / 10
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 20)
}