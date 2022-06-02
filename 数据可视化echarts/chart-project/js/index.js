// 监控模块制作 每个模块都使用立即执行函数 防止变量冲突（每个立即执行函数里面的变量时局部变量）
(function() {
    $(".monitor .tabs").on("click", "a", function() {
            $(this).addClass("active").siblings("a").removeClass("active");
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
        })
        // 1、先克隆marquee里面所有的行（row）
    $(".marquee-view .marquee").each(function() {
        var rows = $(this).children().clone();
        $(this).append(rows);
    })
})();
//  点位分布统计模块制作 
(function() {
    var myChart = echarts.init(document.querySelector(".pie"));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [{
            name: '点位统计',
            type: 'pie',
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ],
            // 修饰饼形图文字相关的样式 Label队形
            Label: {
                fontSize: 10
            },
            LabelLine: {
                length: 6,
                length2: 8
            }
        }]
    };
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们图表调用这个方法resize
        myChart.resize();
    })
})();
// 柱状图模块
(function() {
    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2. 指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1, [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: "item",
            padding: [
                5,
                10,
                5,
                10,
            ]
        },
        grid: {
            left: "0%",
            right: "3%",
            bottom: "3%",
            top: "3%",
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [{
            type: "category",
            data: [
                "上海",
                "广州",
                "北京",
                "深圳",
                "合肥",
                "",
                "......",
                "",
                "杭州",
                "厦门",
                "济南",
                "成都",
                "重庆"
            ],
            axisTick: {
                alignWithLabel: false,
                // 把x轴的刻度隐藏起来
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            // x轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            }
        }],
        yAxis: [{
            type: "value",
            axisTick: {
                alignWithLabel: false,
                // 把y轴的刻度隐藏起来
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            // y轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            },
            // y轴分割线的颜色样式
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            }
        }],
        series: [{
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [
                2100,
                1900,
                1700,
                1560,
                1400,
                item,
                item,
                item,
                900,
                750,
                600,
                480,
                240
            ]
        }]
    };
    // 3、把配置传给实例化对象
    myChart.setOption(option);
    // 4、当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
// 订单模块制作
(function() {
    // 1. 准备数据
    var data = {
            day365: { orders: '20,301,987', amount: '99834' },
            day90: { orders: '301,987', amount: '9834' },
            day30: { orders: '1,987', amount: '3834' },
            day1: { orders: '987', amount: '834' }
        }
        // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
        // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function() {
            // 2. 点击切换激活样式
            $(this).addClass('active').siblings().removeClass('active');
            // console.log(this.dataset.key);
            // 3. 点击切换数据
            var currdata = data[this.dataset.key]
            $h4Orders.html(currdata.orders)
            $h4Amount.html(currdata.amount)
        })
        // 4. 开启定时器切换数据
    var index = 0
    var $allTab = $('.order .filter a')
    setInterval(function() {
        index++
        if (index >= 4) index = 0
        $allTab.eq(index).click()
    }, 5000);
})();
// 销售统计模块
(function() {
    // 准备数据
    var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        // 1、实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2、指定配置和数据
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            right: "10%", // 距离右边10%
            textStyle: {
                color: "#4c9bfd"
            },
            // 如果series里面设置了name，此时图例组件的data可以省略
            // data: ['Email', 'Union Ads']
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[0]
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3、把配置传给实例化对象
    myChart.setOption(option);
    // 切换
    $(".sales .caption").on("click", "a", function() {
        $(this).addClass("active").siblings("a").removeClass("active");
        index = $(this).index() - 1;
        // 拿到当前a 的自定义属性
        // console.log(this.dataset.type);
        // 根据拿到的值 区找数据
        // console.log(data.year);
        // console.log(data["year"]);
        // console.log(data[this.dataset.type]);
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        // 重新把配置好的新数据给实例化对象
        myChart.setOption(option);
    });
    // 5、tab栏自动切换效果
    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 1000);
    // 鼠标经过sales，关闭定时器，离开开启定时器
    $(".sales").hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 1000);
    });
    // 4、当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
// 渠道分布 雷达图
(function() {
    // 1、实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2、指定配置和数据

    // 填充区域的线条颜色
    const lineStyle = {
        normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
        }
    };
    var option = {
        tooltip: {
            show: true,
            // 控制提示组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            // 修改雷达图的大小
            radius: "60%",
            shape: 'circle',
            // 分割的圆圈的个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的先修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [{
            name: 'Beijing',
            type: 'radar',
            lineStyle: lineStyle,
            data: [
                [90, 19, 56, 11, 34]
            ],
            // symbol拐点的样式
            symbol: 'circle',
            // 拐点的大小
            symbolSize: 5,
            // 拐点的颜色
            itemStyle: {
                color: '#fff'
            },
            label: {
                show: true,
                color: "#fff",
                fontSize: 10
            },
            // 填充区域背景颜色
            areaStyle: {
                color: 'rgba(238, 197, 102, 0.6)',
            }
        }]
    };
    // 3、配置传给对象
    myChart.setOption(option);
    // 4、当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
// 销售模块 饼形图 半圆形
(function() {
    // 1、实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2、指定数据和配置
    var option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            // 放大图形
            radius: ['130%', '150%'],
            // 移动下位置，套住文字
            center: ["48%", "80%"],
            //是否启用防止标签重叠策略
            // avoidLabelOverlap: false,
            avoidLabelOverlap: false,
            labelLine: {
                show: false
            },
            // 起始角度设置为180， 支持范围[0, 360]
            startAngle: 180,
            // 鼠标经过不放大偏移
            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: "#12274d"
                    }
                },
                {
                    value: 200,
                    itemStyle: {
                        // 透明隐藏第三块区域
                        color: "transparent"
                    }
                }
            ]
        }]
    };
    // 3、把配置和数据给对象 
    myChart.setOption(option);
})();
// 全国热榜模块
(function() {
    // 1、准备数据
    var hotData = [{
                city: '北京', // 城市
                sales: '25, 179', // 销售额
                flag: true, //  上升还是下降
                brands: [ //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ]
        // 2、根据数据渲染各省热销sup模块内容
        // (1) 遍历hotData 对象
    var supHTML = "";
    $.each(hotData, function(index, item) {
            supHTML += `<li><span>${item.city}</span><span>${item.sales}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
        })
        // 把生成的小li字符串给到sub DOM盒子
    $(".sup").html(supHTML);
    // 3、当鼠标经过时，城市高亮显示
    $(".province .sup").on("mouseenter", "li", function() {
        index = $(this).index();
        render($(this));
    });
    // 封装一个函数render，里面设置sup当前小li高亮，以及对应的品牌对象渲染
    function render(currentEle) {
        currentEle.addClass("active").siblings("li").removeClass("active");
        // 得到当前城市的品牌
        // console.log($(this).index());
        // console.log(hotData[$(this).index()]);
        // console.log(hotData[$(this).index()].brands);
        // 开始遍历品牌数组
        var subHTML = '';
        $.each(hotData[currentEle.index()].brands, function(index, item) {
            subHTML += `<li><span>${item.name}</span>${item.num}<span><s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
        })
        $(".sub").html(subHTML);
    }
    // 默认第一个小li激活
    var lis = $(".province .sup li");
    lis.eq(0).mouseenter();
    // 5 开启定时器
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);
    $(".province .sup").hover(function() {
        // 鼠标经过事件
        clearInterval(timer);
    }, function() {
        // 鼠标离开事件
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            if (index >= 5) index = 0;
            render(lis.eq(index));
        }, 2000);
    })


})();