window.addEventListener('load', function() {
    // 1、获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var box = document.querySelector('.box');
    var boxWidth = box.offsetWidth;
    // 2、鼠标经过 box 就显示隐藏左右按钮
    box.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    box.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000)
    });
    // 3、动态生成小圆圈 有几张图片 就生成几个小圆圈
    var focus = document.querySelector('.focus');
    var ol = document.querySelector('.circle');
    for (var i = 0; i < focus.children.length; i++) {
        // 1、创建小li节点
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        // 2、将li插入ol里面
        ol.appendChild(li);
        // 4、小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            // 干掉所有人 把所有的小li 清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 只留下我自己 当前的小li 设置current类名
            this.className = 'current';
            // 5、点击小圆圈 移动图片  移动的是 ul
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值 左移是负
            // 当我们点击了某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把它的索引号给num
            num = index;
            // 当我们点击了某个小li 就要把它的索引号给circle
            circle = index;
            animate(focus, -index * boxWidth);
        });

    }
    // 把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    // 6、克隆第一张图片(li) 放到ul最后面
    var first = focus.children[0].cloneNode(true);
    focus.appendChild(first);
    // 7、点击右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    var flag = true; // 节流阀
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 如果走到了最后复制的一张图片，此时，我们的ul 要快速复原 left改为 0
            if (num == focus.children.length - 1) {
                focus.style.left = 0;
                num = 0;
            }
            num++;
            animate(focus, -num * boxWidth, function() {
                flag = true;
            });
            // 8、点击右侧按钮，小圆圈跟随一起变化 可以在声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 小圆圈个数 说明走到了最后克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    });
    // 9、左侧按钮做法
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 如果走到了最后复制的一张图片，此时，我们的ul 要快速复原 left改为 0
            if (num == 0) {
                num = ol.children.length - 1;
                focus.style.left = -num * boxWidth + 'px';
            }
            num--;
            animate(focus, -num * boxWidth, function() {
                flag = true;
            });
            // 8、点击右侧按钮，小圆圈跟随一起变化 可以在声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle == 小圆圈个数 说明走到了最后克隆的这张图片了 我们就复原
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            // 调用函数
            circleChange();
        }
    });

    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    // 10、自动播放轮播图
    var timer = setInterval(function() {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000)
});