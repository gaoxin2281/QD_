window.onload = function(){

	$.ajax({
		url:"cuxiao.json",
		type: "GET",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html+='<li class="goods_item"  ><div class="goods_percent" ><h3>'+data[i].percent+'</h3></div><div class="goods_pic"><img src="' + data[i].img+'" alt=""></div><div class="goods_title" ><p><a href="goods.html">'+data[i].title+'</a></p></div><div class="goods_title1" ><p>'+data[i].title1+'</p></div><div class="goods_pires" ><span>'+data[i].pires+'</sapn></div><div class="sc"><div class="sc_btn" id="' + data[i].id+'" >加入购物车</div></div></li>';
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
        url: "cuxiao.json",
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
 
  
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
  
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}

	
}