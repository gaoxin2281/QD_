$(function() {
    function Zoom(object) {
        this.zoomArea = $(".zoom", object); //保存促发放大效果的区域
        this.moveArea = $(".move", object); //保存移动区域
        this.zoomDetail = $(".zoomDetail", object); //保存放大镜区域
        this.zoomDetailImg = $("img", this.zoomDetail); //保存放大镜里面的图
        this.zoomAreaWidth = this.zoomArea.width();
        this.moveAreaWidth = this.moveArea.width();
        this.zoomAreaHeight = this.zoomArea.height();
        this.moveAreaHeight = this.moveArea.height();
        this.zoomDetailWidth = this.zoomDetail.width();
        this.zoomDetailHeight = this.zoomDetail.height();
        this.zoomAreaOffset = this.zoomArea.offset(); //初始化放大区域在视口中的相对偏移;
        this.XY = null; //初始化鼠标相对于放大区域的偏移偏移值
        this.moveBili = null; //
        var _this_ = this;
        this.zoomArea.mousemove(function(e) { //当鼠标在放大区域移动的时候执行
            _this_.move(e.pageX, e.pageY);
        }).mouseover(function() {
            _this_.moveArea.show();
            _this_.zoomDetail.show();
        }).mouseout(function() {
            _this_.moveArea.hide();
            _this_.zoomDetail.hide();
        });
        this.calculate(); //初始化并计算出需要的比例值
        //以下是小图部分的功能实现
        this.l = 0;
        this.scrollObj = $(".slideMain ul", object); //保存ul滚动对象
        this.lis = this.scrollObj.children(); //保存小图片列表
        this.lis.mouseover(function() {
            _this_.changeImgSrc(this);
        });
        if (this.lis.length > 6) { //判断图片数是否超出显示区域，是的话就注册滚动事件
            this.s = this.lis.length - 6; //获取多余出来的图片数
            this.scrollObj.height(60 * this.lis.length + "px"); //当图片数超出默认值时，设置ul的宽度
        }
    };
    Zoom.prototype = {
        changeImgSrc: function(o) {
            //改变标识样式
            $(o).addClass("selected").siblings().removeClass("selected");
            this.zoomArea.find("img").attr("src", $(o).find("img").attr("medium-img"));
            this.zoomDetailImg.attr("src", $(o).find("img").attr("medium-img"));

        },
        move: function(x, y) { //鼠标在放大区域移动的时候执行的函数
            this.XY = this.mousePosAndSetPos(x, y); //计算出鼠标相对于放大区域的x,y值
            //设置滑块的位置
            this.moveArea.css({
                left: this.XY.offsetX + "px",
                top: this.XY.offsetY + "px"
            });
            //设置大图在细节位置
            this.zoomDetailImg.css({
                marginLeft: -this.XY.offsetX * this.moveBili + "px",
                marginTop: -this.XY.offsetY * this.moveBili + "px"
            });
        },
        mousePosAndSetPos: function(x, y) { //实时计算并设置滑块的位置
            x = x - this.zoomAreaOffset.left - this.moveArea.width() / 2;
            y = y - this.zoomAreaOffset.top - this.moveArea.height() / 2;
            x = x < 0 ? 0 : x;
            y = y < 0 ? 0 : y;
            x = x > (this.zoomAreaWidth - this.moveAreaWidth) ? this.zoomAreaWidth - this.moveAreaWidth: x;
            y = y > (this.zoomAreaHeight - this.moveAreaHeight) ? this.zoomAreaHeight - this.moveAreaHeight: y;
            return {
                offsetX: x,
                offsetY: y
            };
        },
        calculate: function() { //计算函数
            var widthBili, heightBili;
            //计算移动的滑块与放大镜铺面显示的比例宽高
            widthBili = (this.zoomAreaWidth * this.zoomDetailWidth) / this.moveAreaWidth;
            heightBili = (this.zoomAreaHeight * this.zoomDetailHeight) / this.moveAreaHeight;
            //把比出来的宽高
            this.zoomDetailImg.css({
                width: widthBili + "px",
                height: heightBili + "px"
            });
            //返回移动的比例
            this.moveBili = (widthBili - this.zoomDetailWidth) / (this.zoomAreaWidth - this.moveAreaWidth);
        }
    };
    var zoom = new Zoom($(".Main").eq(0));


/*加入购物车*/

$.ajax({
        url:"gouwu.json",
        type: "GET",
        success:function(data){
            var html = "";
            for(var i = 0; i < data.length; i++){
                html+='<li class="goods_item"  ><div class="sc"><div class="sc_btn" id="' + data[i].id+'" ></div></div></li>';
            }
            $(".goods_box ul").html(html);
        }
    });

sc_car();

$(".sc_right").mouseover(function() {
    $(this).stop().animate({
        top: 0
    });
    sc_msg();
});
$(".sc_right").mouseleave(function() {
    $(this).stop().animate({
        top: "-270px"
    })
})

$(".goods_box ul").on("click", ".sc_btn",
function() {
    //购物车数量增加
    var id = this.id;
    //判断是否有过cookie缓存
    var first = $.cookie("goods") == null ? true: false;
    var same = false; //判断是否有相同的商品
    if (first) {
        //第一次添加的时候,建立json结构
        $.cookie('goods', '[{id:' + id + ',num:1}]');
        $.cookie('first', "false");
    } else {
        var str = $.cookie("goods");
        var arr = eval(str); //eval(str); eval JQ的字符串转对象
        //遍历所有的对象,如果id相同,让该商品的数量递增。
        for (var i in arr) {
            if (arr[i].id == id) {
                arr[i].num = arr[i].num + 1; //添加数量
                var cookieStr = JSON.stringify(arr);
                $.cookie('goods', cookieStr);
                same = true;
            }
        }

        //如果id不同,添加该商品
        if (!same) {
            var obj = {
                id: id,
                num: 1
            };
            arr.push(obj);
            var cookieStr = JSON.stringify(arr);
            $.cookie("goods", cookieStr);
        }
    }
    sc_car();
});

//购物车
function sc_car() {
    var sc_str = $.cookie('goods');
    if (sc_str) { //如果购物车不为空
        var sc_obj = eval(sc_str); //和JS中的JSON.parse()
        var sc_num = 0; //记录所有商品的数量
        for (var i in sc_obj) {
            sc_num += Number(sc_obj[i].num);
        }
        $(".sc_num").html(sc_num);
    }
}

function sc_msg() {
    $.ajax({
        url: "gouwu.json",
        type: "GET",
        success: function(data) {
            var sc_str = $.cookie("goods");
            if (sc_str) {
                var sc_obj = eval(sc_str);
                var html = "";
                for (var i in sc_obj) {
                    html += '<li><div class="sc_goodsPic"><img src="' + data[sc_obj[i].id].img + '" alt=""></div><div class="sc_goodsTitle"><p>' + data[sc_obj[i].id].title + '</p></div><div class="sc_goodsBtn" id="' + sc_obj[i].id + '">购买</div><div class="sc_goodsNum">商品数量:' + sc_obj[i].num + '</div></li>';
                }
                $('.sc_right ul').html(html);
            }
        }
    });
}


/*左边栏*/

});

function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   var x = Math.max(x1, Math.max(x2, x3));
   var y = Math.max(y1, Math.max(y2, y3));
 // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}
