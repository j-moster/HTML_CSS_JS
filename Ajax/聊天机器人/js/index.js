$(function() {

    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    // 为发送按钮绑定点击事件
    $('#btnSend').on('click', function() {
            var text = $('#ipt').val().trim();
            if (text.length <= 0) {
                return $('#ipt').val('')
            }
            // 如果用户输入了内容，则将聊天内容追加到页面上显示
            $('.main #talk_list').append(`<li class="right_word">
            <img src="img/person02.png" /> <span>${text}</span>
          </li>`);
            $('#ipt').val('');
            //   重置滚动条的位置
            resetui();
            getMsg(text);

        })
        // 请求获取机器人的数据
    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function(res) {
                if (res.message === 'success') {
                    var msg = res.data.info.text;
                    $('.main #talk_list').append(`<li class="left_word">
                    <img src="img/person01.png" /> <span>${msg}</span>
                  </li>`);
                    resetui();
                    getVoice(msg)
                }
            }
        })
    }
    // 把文字转换为语音播放
    function getVoice(text) {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function(res) {
                // console.log(res);
                if (res.status == 200) {
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }
    // 通过回车发送消息
    // 文本框接收到回车后，就响应提交消息
    $('#ipt').on('keyup', function(e) {
        if (e.key == 'Enter') {
            $('#btnSend').click();
        }
    })
})