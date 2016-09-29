window.onload = function(){
	sc_msg();

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
                    html += '<li><div class="sc_goodsPic"><img src="' + data[sc_obj[i].id].img + '" alt=""></div><div class="sc_goodsTitle"><p>' + data[sc_obj[i].id].title + '</p></div><div class="sc_goodsTitle"><p>' + data[sc_obj[i].id].pires + '</p></div><div class="sc_goodsBtn" id="' + sc_obj[i].id + '">购买</div><div class="sc_goodsNum">商品数量:' + sc_obj[i].num + '</div></li>';
                }

                $('.jiesuan-1 ul').html(html);
            }
        }
    });
}





	
}