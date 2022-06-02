window.addEventListener('load', function() {
    var regname = /^[\u4e00-\u9fa5]{2,8}$/;
    var tel = /^1[3|5|6|7|8]\d{9}$/;
    var regmes = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var name = document.querySelector('.name');
    var regtel = document.querySelector('.tel');
    var mes = document.querySelector('.mes');
    var pwd = document.querySelector('.pwd');
    var mima = document.querySelector('.mima');
    regexp(name, regname);
    regexp(regtel, tel);
    regexp(mes, regmes);
    regexp(pwd, regpwd);
    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                console.log('输入正确');
                this.nextElementSibling.className = 'true';
                this.nextElementSibling.innerHTML = '<i class="true_icon"></i>恭喜你输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
            }
        }
    };
    mima.addEventListener('blur', function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'true';
            this.nextElementSibling.innerHTML = '<i class="true_icon"></i>恭喜你输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不一致，请重新输入';
        }
    })
})