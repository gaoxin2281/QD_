

	window.onload = function(){
		//top 掌上本来
		$("#zsbl").hover(function(){
			$(".erweima").css("display","block")
		},function(){
			$(".erweima").css("display","none")
		})

		$("#khfw").hover(function(){
			$(".kehufuwu").css("display","block")
		},function(){
			$(".kehufuwu").css("display","none")
		})

		//顶部下的图片变换
	var curIndex=0;
	//时间间隔 单位毫秒
	
	var arr=new Array();
	arr[0]="1.jpg";
	arr[1]="2.jpg";
	arr[2]="3.jpg";
	setInterval(changeImg,2000);
	function changeImg()
	{
	var obj=document.getElementById("showpic");
	if (curIndex==arr.length-1)
	{
	curIndex=0;
	}
	else
	{
	curIndex+=1;
	}
	obj.src="image/"+arr[curIndex];
	}


var curIndex1=0;
	//时间间隔 单位毫秒
	
	var arr1=new Array();
	arr1[0]="1.jpg";
	arr1[1]="2.jpg";
	
	setInterval(changeImg1,700);
	function changeImg1()
	{
	var obj=document.getElementById("showpic1");
	if (curIndex1==arr1.length-1)
	{
	curIndex1=0;
	}
	else
	{
	curIndex1+=1;
	}
	obj.src="image/img/"+arr[curIndex1];
	}


		ajax("get", "http://10.30.162.16/xiangmu/data.json", "", function(data){
			
			var arr = JSON.parse(data)._data;
			//alert(arr)
			var oUl = $("<ul id = 'ul_id'></ul>");
			$("#ul2").append(oUl);
			//添加左边菜单事件:
			for (var i = 0; i < arr.length; i++) {
				var aLi = $("<li></li>");
				var img = $("<img />");
				var pic = arr[i].pic;
				var A = $("<a href='#'></a>");
				img.attr("src", "image/"+pic);
				//aLi.html(arr[i].title)
				var aP = arr[i].title;
				$(aLi).append(img);
				$(oUl).append(A);
				$(aLi).append(aP);
				$(A).html(aLi);

				aLi.mouseover(function(){
					$("#ul2").find("li").attr("class", "");
					//$("#ul2").find("div").css("display", "none");
					$(this).attr("class","active");

				});

			}

			var oDiv = $("<div id = 'ul3'></div>");
			$("#ul2").append(oDiv);
			var oP2 = $("#ul_id").find("a");
			for (var i = 0; i < oP2.length; i++) {
				$(oP2[i]).mouseover(function(){
					$("#ul3").html("");
					$("#ul3").css("display","block");
					var a = $(this).index();
					//a = $(this).index();
					for (var j = 0; j < arr[a].des.length; j++) {
						var h3 = $("<h3 class = 'h3_id'></h3>");
						var span = $("<span></span>");
						$(span).html(arr[a].des[j].Atitle);
						$(h3).append(span);
						for (var k = 0; k < arr[a].des[j].value.length; k++) {
							var aA1 = $("<a href='#'></a>");
							aA1.html(arr[a].des[j].value[k]);
							$(h3).append(aA1);
						}
						$(oDiv).append(h3);
						
						$("#ul3").append(oDiv);
					}
				})
				$(oP2[i]).mouseout(function(){
					$("#ul3").css("display","none");
				})
			}
				var right = document.getElementById("ul3");
				right.onmouseover = function(){
					right.style.display = "block";
				}

				right.onmouseout = function(){
					right.style.display = "none"
				}
  				







		//banner图下边的超链接图片
			var arr_1 = JSON.parse(data)._list;
			//alert(arr_1)
			var oUl_1 = $("<ul></ul>");
			$("#banner-down-1").append(oUl_1);
			for (var i = 0; i < 4; i++) {
				var aLi = $("<li></li>");
				var img = $("<img />");
				var pic =arr_1[i].pic;
				var A = $("<a href='#'></a>")
				img.attr("src","image/"+pic);
				//alert(img)
				$(A).append(aLi)
				$(oUl_1).append(A);
				$(aLi).append(img);
			}


			//好评如潮于热选商品

			var arr_2 = JSON.parse(data)._listA;
			//alert(arr_2)
			var UL_1 = $("<ul id = 'ul_id_1'></ul>");
			$("#new-hot").append(UL_1);
			for (var i = 0; i < arr_2.length; i++) {
				var aLi = $("<li ></li>"); 
				var A = $("<a class ='a1' href='#'></a>");
				var aP = arr_2[i].NEW;
				$(aLi).append(aP);
				$(A).html(aLi);
				$(UL_1).append(A);	

				aLi.mouseover(function(){
					$("#new-hot").find("li").attr("class", "");
					//$("#ul2").find("div").css("display", "none");
					$(this).attr("class","active");

				});

			}

				var Div = $("<div id = 'Div' ></div>");
				$("#new-hot").append(Div);
				var oP3 = $("#ul_id_1").find("a");

						for (var l = 0; l < arr_2[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_2[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div).append(div);
							var span = $("<span></span>");
							$(span).html(arr_2[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div).append(div);
							var p = $("<p></p>");
							$(p).html(arr_2[0].des[l].pirce);
							$(div).append(p);



						}
				for (var i = 0; i < oP3.length; i++) {
					$(oP3[i]).mouseover(function(){
						$("#Div").html("");
						$("#Div").css("display","block");
						var a = $(this).index();
						for (var j = 0; j < arr_2[a].des.length; j++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_2[a].des[j].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div).append(div);
							var span = $("<span></span>");
							$(span).html(arr_2[a].des[j].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div).append(div);
							var p = $("<p></p>");
							$(p).html(arr_2[a].des[j].pirce);
							$(div).append(p);
							var button = $("<a class = 'button' id ='button' ></a>");
							$(button).html("加入购物车");
							$(div).append(button);
							var img1 = $("<img class='shopcar'/>"); 	
							var pic1 = arr_2[a].des[j].pic1;	
							img1.attr("src","image/"+pic1);
							$(button).append(img1);															
						}

						
					})

				}
				
				
	//买手力荐
		
		var arr_3 = JSON.parse(data)._listB;
		//alert(arr_3);
		var UL_3 = $("<ul id = 'ul_id_3'></ul>");
		$("#Recommend").append(UL_3);
		for (var i = 0; i < arr_3.length; i++){
			var aLi = $("<li ></li>");
			var A = $("<a class ='a1' href='#'></a>");
			var aP = arr_3[i].NEW;
			$(aLi).append(aP);
			$(A).html(aLi);
			$(UL_3).append(A);
			aLi.mouseover(function(){
				$("#Recommend").find("li").attr("class","");
				$(this).attr("class","active");

			})	
		}

		 var Div_3 = $("<div id = 'Div_3' ></div>");
		   $("#Recommend").append(Div_3);	
		   var oP4 = $("#ul_id_3").find("a");
//打开网页即可获得的数据
		   	for (var l = 0; l < arr_3[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_3[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div_3).append(div);
							var span = $("<span></span>");
							$(span).html(arr_3[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div_3).append(div);
							var p = $("<p></p>");
							$(p).html(arr_3[0].des[l].pirce);
							$(div).append(p);
						}
//鼠标滑过获得的数据
		   for (var i = 0; i < oP4.length; i++) {
		   	   	$(oP4[i]).mouseover(function(){
		   	   		$("#Div_3").html("");
		   	   		$("#Div_3").css("display","block");
		   	   		var a = $(this).index();
		   	   		for (var j = 0; j < arr_3[a].des.length; j++){
		   	   			var div = $("<div class='new-right'></div>");
		   	   			var img = $("<img />");
						var pic = arr_3[a].des[j].pic;
						img.attr("src","image/"+pic);
						$(div).append(img);
						$(Div_3).append(div);
						var span = $("<span></span>");
						$(span).html(arr_3[a].des[j].title);
						var A = $("<a href = '#'></a>");
						$(A).append(span)
						$(div).append(A);
						var p = $("<p></p>");
						$(p).html(arr_3[a].des[j].pirce);
						$(div).append(p);
						var button = $("<a class = 'button' id ='button' ></a>");
						$(button).html("加入购物车");
						$(div).append(button);
						var img1 = $("<img class='shopcar'/>"); 	
						var pic1 = arr_3[a].des[j].pic1;	
						img1.attr("src","image/"+pic1);
						$(button).append(img1);				
		   	   		}
		   	   	})

		   }
//舟山海鲜json
		var PIC = JSON.parse(data)._PIC;
		 for (var i = 0; i < PIC.length; i++) {
		 	 var img = $("<img />");
		 	 var pic =PIC[0].pic;
		 	 var A = $("<a href='#'></a>");
		 	 img.attr("src","image/"+pic);
		 	 $(A).append(img);
		 }
		 $("#zsfish").append(A)
//进店必败左边 每日鲜;
		var bao_left = JSON.parse(data)._BAO;
		
		
			for (var i = 0; i < bao_left.length; i++) {
				var img = $("<img />");
				var pic =bao_left[0].pic;
				var A = $("<a href='#'></a>");
				img.attr("src","image/"+pic);
				$(A).append(img);

			}
			
			$("#meirixian").append(A);
			var UL_4 = $("<ul id = 'UL_4'></ul>");
			 $("#meirixian").append(UL_4);
			 for (var i = 1; i <bao_left.length; i++) {
			 	    var aLi = $("<li></li>");
			 	    $(aLi).html(bao_left[i].title);
			 	    $(UL_4).append(A);
			 	    var A = $("<a class='a1' href='#'></a>");
			 	    $(A).append(aLi);
			 }
	//爆款推荐
			var arr_4 = JSON.parse(data)._listC;
			var UL_4 = $("<ul id = 'ul_id_4'></ul>");
			$("#baokuantuijian").append(UL_4);
			//alert(arr_4)
			for (var i = 0; i < arr_4.length; i++) {
				var aLi = $("<li></li>");
				var A = $("<a class ='a1' href='#'></a>");
				var aP = arr_4[i].NEW;
				$(aLi).append(aP);
				$(A).html(aLi);
				$(UL_4).append(A);
				
		}

			var Div_4 = $("<div id = 'Div_4' ></div>");
				$("#baokuantuijian").append(Div_4);
				var oP5 = $("#ul_id_4").find("a");

					for (var l = 0; l < arr_4[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_4[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div_4).append(div);
							var span = $("<span></span>");
							$(span).html(arr_4[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div_4).append(div);
							var p = $("<p></p>");
							$(p).html(arr_4[0].des[l].pirce);
							$(div).append(p);
						}





				for (var i = 0; i < oP5.length; i++){
					$(oP5[i]).mouseover(function(){
						$("#Div_4").html("");
		   	   			$("#Div_4").css("display","block");
		   	   			var a = $(this).index();
		   	   			for (var j = 0; j < arr_4[a].des.length; j++){
		   	   				var div = $("<div class='new-right'></div>");
		   	   				var img = $("<img />");
		   	   				var pic = arr_4[a].des[j].pic;
		   	   				img.attr("src","image/"+pic);
		   	   				$(div).append(img);
		   	   				$(Div_4).append(div);
		   	   				var span = $("<span></span>");
							$(span).html(arr_4[a].des[j].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							var p = $("<p></p>");
							$(p).html(arr_4[a].des[j].pirce);
							$(div).append(p);
							var button = $("<a class = 'button' id ='button' ></a>");
							$(button).html("加入购物车");
							$(div).append(button);
							var img1 = $("<img class='shopcar'/>"); 	
							var pic1 = arr_4[a].des[j].pic1;	
							img1.attr("src","image/"+pic1);
							$(button).append(img1);			

		   	   			}


					})

				}
	//红苹果
		var PIC = JSON.parse(data)._PIC;
		 for (var i = 0; i < PIC.length; i++) {
		 	 var img = $("<img />");
		 	 var pic =PIC[1].pic;
		 	 var A = $("<a href='#'></a>");
		 	 img.attr("src","image/"+pic);
		 	 $(A).append(img);
		 }
		 $("#cshpg").append(A)
	//时令鲜果
			 var slxg = JSON.parse(data)._BAO;
			 for (var i = 0; i < bao_left.length; i++) {
				var img = $("<img />");
				var pic =bao_left[0].pic;
				var A = $("<a href='#'></a>");
				img.attr("src","image/"+pic);
				$(A).append(img);

			}
			$("#shilingxianguo").append(A);
			var UL_5 = $("<ul id = 'UL_5'></ul>");
			 $("#shilingxianguo").append(UL_5);
			 for (var i = 1; i <bao_left.length; i++) {
			 	    var aLi = $("<li></li>");
			 	    $(aLi).html(bao_left[i].title);
			 	    $(UL_5).append(A);
			 	    var A = $("<a class='a1' href='#'></a>");
			 	    $(A).append(aLi);
			 }

		//热销爆款
			var arr_5 = JSON.parse(data)._listE;
			//alert (arr_5);
			var ul_5 = $("<ul id = 'ul_id_5'></ul>");
			$("#slxg-right").append(ul_5);
			for (var i = 0; i < arr_5.length; i++) {
				var bLi = $("<li></li>");
				var A = $("<a class ='a1' href='#'></a>");
				A.html(arr_5[i].NEW);
				// $(bLi).append(aP);
				$(bLi).append(A);
				$(ul_5).append(bLi);
			}

			var Div_5 = $("<div id = 'Div_5' ></div>");
				$("#slxg-right").append(Div_5);
				var oP6 = $("#ul_id_5").find("li");

				for (var l = 0; l < arr_5[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_5[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div_5).append(div);
							var span = $("<span></span>");
							$(span).html(arr_5[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div_5).append(div);
							var p = $("<p></p>");
							$(p).html(arr_5[0].des[l].pirce);
							$(div).append(p);
						}

				for (var i = 0; i < oP6.length; i++) {
					  $(oP6[i]).mouseover(function(){
					  	$("#Div_5").html("");
		   	   			$("#Div_5").css("display","block");
		   	   			  var a = $(this).index();
		   	   			  for (var j = 0; j < arr_5[a].des.length; j++){
		   	   			  	var div = $("<div class='new-right'></div>");
		   	   				var img = $("<img />");
		   	   				var pic = arr_5[a].des[j].pic;
		   	   				img.attr("src","image/"+pic);
		   	   				$(div).append(img);
		   	   				$(Div_5).append(div);
		   	   				var span = $("<span></span>");
							$(span).html(arr_5[a].des[j].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							var p = $("<p></p>");
							$(p).html(arr_5[a].des[j].pirce);
							$(div).append(p);
							var button = $("<a class = 'button' id ='button' ></a>");
							$(button).html("加入购物车");
							$(div).append(button);
							var img1 = $("<img class='shopcar'/>"); 	
							var pic1 = arr_5[a].des[j].pic1;	
							img1.attr("src","image/"+pic1);
							$(button).append(img1);			


		   	   			  }
					  })
				}

//------------------------------------本来精选时蔬
	var PIC = JSON.parse(data)._PIC;
		 for (var i = 0; i < PIC.length; i++) {
		 	 var img = $("<img />");
		 	 var pic =PIC[0].pic;
		 	 var A = $("<a href='#'></a>");
		 	 img.attr("src","image/"+pic);
		 	 $(A).append(img);
		 }
		 $("#bljxss").append(A)
//------------------------------------蔬菜菌菇
	 var scjg = JSON.parse(data)._BAO;
			 for (var i = 0; i < bao_left.length; i++) {
				var img = $("<img />");
				var pic =bao_left[0].pic;
				var A = $("<a href='#'></a>");
				img.attr("src","image/"+pic);
				$(A).append(img);

			}
			$("#shucaijungu").append(A);
			var UL_5 = $("<ul id = 'UL_5'></ul>");
			 $("#shucaijungu").append(UL_5);
			 for (var i = 1; i <bao_left.length; i++) {
			 	    var aLi = $("<li></li>");
			 	    $(aLi).html(bao_left[i].title);
			 	    $(UL_5).append(A);
			 	    var A = $("<a class='a1' href='#'></a>");
			 	    $(A).append(aLi);
			 }
	//热销爆款 ----------------------------

	var arr_6 = JSON.parse(data)._listF;
			//alert (arr_5);
			var ul_6 = $("<ul id = 'ul_id_6'></ul>");
			$("#scjg-right").append(ul_6);
			for (var i = 0; i < arr_6.length; i++) {
				var cLi = $("<li class = 'li'></li>");
				var A = $("<a class ='a1' href='#'></a>");
				A.html(arr_6[i].NEW);
				// $(bLi).append(aP);
				$(cLi).append(A);
				$(ul_6).append(cLi);
			}

			var Div_6 = $("<div id = 'Div_6' ></div>");
				$("#scjg-right").append(Div_6);
				var oP7 = $("#ul_id_6").find("li");

				for (var l = 0; l < arr_6[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_6[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div_6).append(div);
							var span = $("<span></span>");
							$(span).html(arr_6[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div_6).append(div);
							var p = $("<p></p>");
							$(p).html(arr_6[0].des[l].pirce);
							$(div).append(p);
						}



				for (var i = 0; i < oP6.length; i++) {
					  $(oP7[i]).mouseover(function(){
					  	$("#Div_6").html("");
		   	   			$("#Div_6").css("display","block");
		   	   			  var a = $(this).index();
		   	   			  for (var j = 0; j < arr_6[a].des.length; j++){
		   	   			  	var div = $("<div class='new-right'></div>");
		   	   				var img = $("<img />");
		   	   				var pic = arr_6[a].des[j].pic;
		   	   				img.attr("src","image/"+pic);
		   	   				$(div).append(img);
		   	   				$(Div_6).append(div);
		   	   				var span = $("<span></span>");
							$(span).html(arr_6[a].des[j].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							var p = $("<p></p>");
							$(p).html(arr_6[a].des[j].pirce);
							$(div).append(p);
							var button = $("<a class = 'button' id ='button' ></a>");
							$(button).html("加入购物车");
							$(div).append(button);
							var img1 = $("<img class='shopcar'/>"); 	
							var pic1 = arr_6[a].des[j].pic1;	
							img1.attr("src","image/"+pic1);
							$(button).append(img1);			


		   	   			  }
					  })
				}

//------------------------------------美味三文鱼
	var PIC = JSON.parse(data)._PIC;
		 for (var i = 0; i < PIC.length; i++) {
		 	 var img = $("<img />");
		 	 var pic =PIC[1].pic;
		 	 var A = $("<a href='#'></a>");
		 	 img.attr("src","image/"+pic);
		 	 $(A).append(img);
		 }
		 $("#sanwenyu").append(A)
//------------------------------------水产海鲜
	 var schx = JSON.parse(data)._BAO;
			 for (var i = 0; i < bao_left.length; i++) {
				var img = $("<img />");
				var pic =bao_left[0].pic;
				var A = $("<a href='#'></a>");
				img.attr("src","image/"+pic);
				$(A).append(img);

			}
			$("#shuichanhanxian").append(A);
			var UL_6 = $("<ul id = 'UL_6'></ul>");
			 $("#shuichanhanxian").append(UL_6);
			 for (var i = 1; i <bao_left.length; i++) {
			 	    var aLi = $("<li></li>");
			 	    $(aLi).html(bao_left[i].title);
			 	    $(UL_6).append(A);
			 	    var A = $("<a class='a1' href='#'></a>");
			 	    $(A).append(aLi);
			 }
	//热麦爆款 ----------------------------

	var arr_7 = JSON.parse(data)._listG;
			//alert (arr_5);
			var ul_7 = $("<ul id = 'ul_id_7'></ul>");
			$("#schx-right").append(ul_7);
			for (var i = 0; i < arr_7.length; i++) {
				var cLi = $("<li class = 'li'></li>");
				var A = $("<a class ='a1' href='#'></a>");
				A.html(arr_7[i].NEW);
				// $(bLi).append(aP);
				$(cLi).append(A);
				$(ul_7).append(cLi);
			}

			var Div_7 = $("<div id = 'Div_7' ></div>");
				$("#schx-right").append(Div_7);
				var oP8 = $("#ul_id_7").find("li");

				for (var l = 0; l < arr_7[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_7[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div_7).append(div);
							var span = $("<span></span>");
							$(span).html(arr_7[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div_7).append(div);
							var p = $("<p></p>");
							$(p).html(arr_7[0].des[l].pirce);
							$(div).append(p);
						}



				for (var i = 0; i < oP8.length; i++) {
					  $(oP8[i]).mouseover(function(){
					  	$("#Div_7").html("");
		   	   			$("#Div_7").css("display","block");
		   	   			  var a = $(this).index();
		   	   			  for (var j = 0; j < arr_6[a].des.length; j++){
		   	   			  	var div = $("<div class='new-right'></div>");
		   	   				var img = $("<img />");
		   	   				var pic = arr_6[a].des[j].pic;
		   	   				img.attr("src","image/"+pic);
		   	   				$(div).append(img);
		   	   				$(Div_7).append(div);
		   	   				var span = $("<span></span>");
							$(span).html(arr_6[a].des[j].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							var p = $("<p></p>");
							$(p).html(arr_6[a].des[j].pirce);
							$(div).append(p);
							var button = $("<a class = 'button' id ='button' ></a>");
							$(button).html("加入购物车");
							$(div).append(button);
							var img1 = $("<img class='shopcar'/>"); 	
							var pic1 = arr_6[a].des[j].pic1;	
							img1.attr("src","image/"+pic1);
							$(button).append(img1);			


		   	   			  }
					  })
				}

//------------------------------------鸽子肉
	var PIC = JSON.parse(data)._PIC;
		 for (var i = 0; i < PIC.length; i++) {
		 	 var img = $("<img />");
		 	 var pic =PIC[2].pic;
		 	 var A = $("<a href='#'></a>");
		 	 img.attr("src","image/"+pic);
		 	 $(A).append(img);
		 }
		 $("#gerou").append(A)
 //------------------------------------水产海鲜
	 var rqdp = JSON.parse(data)._BAO;
			 for (var i = 0; i < bao_left.length; i++) {
				var img = $("<img />");
				var pic =bao_left[0].pic;
				var A = $("<a href='#'></a>");
				img.attr("src","image/"+pic);
				$(A).append(img);

			}
			$("#rouqindanpin").append(A);
			var UL_6 = $("<ul id = 'UL_6'></ul>");
			 $("#rouqindanpin").append(UL_6);
			 for (var i = 1; i <bao_left.length; i++) {
			 	    var aLi = $("<li></li>");
			 	    $(aLi).html(bao_left[i].title);
			 	    $(UL_6).append(A);
			 	    var A = $("<a class='a1' href='#'></a>");
			 	    $(A).append(aLi);
			 }
	//热麦爆款 ----------------------------
	var arr_8 = JSON.parse(data)._listE;
			//alert (arr_5);
			var ul_8 = $("<ul id = 'ul_id_8'></ul>");
			$("#rouqin-right").append(ul_8);
			for (var i = 0; i < arr_8.length; i++) {
				var cLi = $("<li class = 'li'></li>");
				var A = $("<a class ='a1' href='#'></a>");
				A.html(arr_8[i].NEW);
				// $(bLi).append(aP);
				$(cLi).append(A);
				$(ul_8).append(cLi);
			}
			var Div_8 = $("<div id = 'Div_8' ></div>");
				$("#rouqin-right").append(Div_8);
				var oP9 = $("#ul_id_8").find("li");

				for (var l = 0; l < arr_8[0].des.length; l++) {
							var div = $("<div class='new-right'></div>");
							var img = $("<img />");
							var pic = arr_8[0].des[l].pic;
							img.attr("src","image/"+pic);
							$(div).append(img);
							$(Div_8).append(div);
							var span = $("<span></span>");
							$(span).html(arr_8[0].des[l].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							$(Div_8).append(div);
							var p = $("<p></p>");
							$(p).html(arr_8[0].des[l].pirce);
							$(div).append(p);
						}

				 for (var i = 0; i < oP9.length; i++) {
					  $(oP9[i]).mouseover(function(){
					  	$("#Div_8").html("");
		   	   			$("#Div_8").css("display","block");
		   	   			  var a = $(this).index();
		   	   			  for (var j = 0; j < arr_8[a].des.length; j++){
		   	   			  	var div = $("<div class='new-right'></div>");
		   	   				var img = $("<img />");
		   	   				var pic = arr_8[a].des[j].pic;
		   	   				img.attr("src","image/"+pic);
		   	   				$(div).append(img);
		   	   				$(Div_8).append(div);
		   	   				var span = $("<span></span>");
							$(span).html(arr_8[a].des[j].title);
							var A = $("<a href = '#'></a>");
							$(A).append(span)
							$(div).append(A);
							var p = $("<p></p>");
							$(p).html(arr_8[a].des[j].pirce);
							$(div).append(p);
							var button = $("<a class = 'button' id ='button' ></a>");
							$(button).html("加入购物车");
							$(div).append(button);
							var img1 = $("<img class='shopcar'/>"); 	
							var pic1 = arr_8[a].des[j].pic1;	
							img1.attr("src","image/"+pic1);
							$(button).append(img1);			


		   	   			  }
					  })
				}	


  })

	
		


		


		//banenr 轮播图
	
	var oUL ;
	var oLIs;
	var oNavlist;
	var currentIndex=0;
	oUL = document.getElementsByClassName("img-list")[0];
	oLIs = oUL.children;
	oNavlist = document.getElementsByClassName("banner-nav-list")[0].children;
	banner();
	function banner(){
   	currentIndex = 1;
   	var newli = oLIs[0].cloneNode(true);
   	oUL.appendChild(newli);	
   }

   

   function banner(){
		currentIndex = 1;
		var newli = oLIs[0].cloneNode(true);
		oUL.appendChild(newli);
		oUL.style.width = oLIs.length*oLIs[0].offsetWidth + "px";
		
		for(var i=0; i<oNavlist.length; i++){
			oNavlist[i].index = i;
			oNavlist[i].onmouseover = function(){
				clearInterval(timer);
				
				startMove(oUL, {left: this.index * -oLIs[0].offsetWidth});
				for(var i=0;i<oNavlist.length;i++){
					oNavlist[i].className = "";
				}
				this.className = "active";
				currentIndex = this.index+1;
				
				timer = setInterval(move,3000);
			}
		}
		
		var timer = setInterval(move,3000);
		
		function move(){
			if(currentIndex == 6){
				oUL.style.left = 0;
				currentIndex = 0;
			}
			//oUL.style.left = oUL.offsetLeft - 810 + "px";
			startMove(oUL, {left: currentIndex * -oLIs[1].offsetWidth});
			for(var i=0;i<oNavlist.length;i++){
				oNavlist[i].className = "";
			}
			oNavlist[currentIndex>=4 ? 0 : currentIndex].className = "active";
			currentIndex++;
		}
		
	}
//函数调用
	function startMove(obj, json, func){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){

				var bStop = true; 

				//1.取出该属性的初值
				for(var attr in json){
					var iCur = 0;
					if(attr == "opacity"){
						iCur = parseFloat(getStyle(obj, attr)) * 100;
					}else{
						iCur = parseInt(getStyle(obj, attr))
					}
					var speed = (json[attr] - iCur) / 8;
					//8 缩放系数,缓冲运动效果最好的缩放系数
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(iCur != json[attr]){
						bStop = false;
					}
					if(attr == "opacity"){
						obj.style.filter = "alpha(opacity: " + (iCur + speed) + ")";
						obj.style.opacity = (iCur + speed) / 100;
					}else{
						obj.style[attr] = iCur + speed + "px";
					}
				}
				if(bStop){
					clearInterval(obj.timer);
					if(func){
						func();
					}
				}
			}, 30);
		}


		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}

//限时抢购 以及 倒计时  购物车++++++++++++++++++++++++++++++++++++++++++++++
  
  	//限时抢购 以及 倒计时  购物车++++++++++++++++++++++++++++++++++++++++++++++
  
  	//alert(1);


	$.ajax({
		url:"data1.json",
		type: "GET",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html+='<li class="goods_item"  ><div class="goods_pic"><img src="' + data[i].img+'" alt=""></div><div class="goods_title" ><p>'+data[i].title+'</p></div><div class="goods_pires" ><span>'+data[i].pires+'</sapn></div><div class="sc"><div class="sc_btn" id="' + data[i].id+'" >加入购物车</div></div></li>';

			}
			$(".goods_box ul").html(html);
		}
	});
	sc_car();

			$(".sc_right").mouseover(function(){
				$(this).stop().animate({
					top: 0
				});
				sc_msg();
			});
			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					top: "-270px"
				})
			})

			$(".goods_box ul").on("click", ".sc_btn", function(){
				//购物车数量增加
				var id = this.id;
				//判断是否有过cookie缓存
				var first = $.cookie("goods") == null ? true : false;
				var same = false; //判断是否有相同的商品
				if(first){
					//第一次添加的时候,建立json结构
					$.cookie('goods', '[{id:' + id +',num:1}]');
					$.cookie('first', "false");
				}else{
					var str = $.cookie("goods");
					var arr = eval(str); //eval(str); eval JQ的字符串转对象
					//遍历所有的对象,如果id相同,让该商品的数量递增。
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num = arr[i].num + 1; //添加数量
							var cookieStr = JSON.stringify(arr);
							$.cookie('goods', cookieStr);
							same = true;
						}
					}

					//如果id不同,添加该商品
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
					}
				}
				sc_car();
			});

			//购物车
			function sc_car(){
				var sc_str = $.cookie('goods');
				if(sc_str){ //如果购物车不为空
					var sc_obj = eval(sc_str); //和JS中的JSON.parse()
					var sc_num = 0; //记录所有商品的数量
					for(var i in sc_obj){
						sc_num += Number(sc_obj[i].num);
					}
					$(".sc_num").html(sc_num);
				}
			}

			function sc_msg(){
				$.ajax({
					url:"data1.json",
					type:"GET",
					success:function(data){
						var sc_str = $.cookie("goods");
						if(sc_str){
							var sc_obj = eval(sc_str);
							var html = "";
							for(var i in sc_obj){
								html += '<li><div class="sc_goodsPic"><img src="'+data[sc_obj[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>'+data[sc_obj[i].id].title+'</p></div><div class="sc_goodsBtn" id="'+sc_obj[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_obj[i].num+'</div></li>';
							}
							$('.sc_right ul').html(html);
						}
					}
				});
			}
			
			
  }

  




























