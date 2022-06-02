// var that;
// 使用bind()方法替代全局变量that
class Tab {
    constructor(id) {
        // that = this;
        // 获取元素
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li 的父元素
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        // section的父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updataNode();
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab.bind(this.add, this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            // 第一个this还是指向原本的调用对象，第二个this是指向tab对象，当参数传递过去
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    updataNode() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-close-solid');
            this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
        }
        // 1、切换功能
    toggleTab(that) {
            that.clearClass();
            // console.log(this.index);
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        // 清除li和section所有的类名
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }

        }
        // 2、添加功能
    addTab(that) {
            that.clearClass();
            // 1、创建li选项卡和section内容
            var random = Math.random();
            var li = ' <li class="liactive"><span>新的选项卡</span><span class="icon-close-solid"></span></li>';
            var section = '<section class="conactive">新的内容 ' + random + '</section>';
            // 2、把这两个元素追加到对应的父元素里面
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        // 3、删除功能
    removeTab(that, e) {
            // 阻止事件冒泡，防止触发小li的切换功能
            e.stopPropagation();
            var index = this.parentNode.index;
            // console.log(index);
            // 根据索引号删除对应的li和section  remove() 方法可以直接删除指定的元素
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            // 如果删除的不是选中状态的li，就不需要选中其他的li 返回
            if (document.querySelector('.liactive')) return;
            // 当我们删除了选中状态的这个小li的时候，让它的前一个小li处于选定状态
            index--;
            // 手动调用我们的点击事件，不要鼠标触发
            that.lis[index] && that.lis[index].click();
            that.lis[index + 1] && that.lis[index + 1].click();
        }
        // 4、修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type = "text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当我们离开文本框时，就把文本框的内容给span
        input.onblur = function() {
                this.parentNode.innerHTML = this.value;
            }
            // 按下回车可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.key == 'Enter') {
                // 手动调用失去焦点事件，不需要鼠标离开操作
                this.blur();
            }
        }
    }

};
new Tab('#tab');