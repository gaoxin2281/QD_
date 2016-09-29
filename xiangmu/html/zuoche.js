window.onload = function(){	

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
	obj.src="../image/"+arr[curIndex];
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
	obj.src="../image/img/"+arr[curIndex1];
	}






//表单注册-----------------------------------------------------------------
			if(getCookie("username")){
				alert("cookie已经缓存,登录成功");
			}

    //随机验证码的判断

			$("#div_test").innerHTML = testStr(4);
			$("#div_test").onclick = function(){
				$("#div_test").innerHTML = testStr(4);
			}

	//手机号验证
			$("#username").onblur = function(){
				//alert(1)
					var oValue = this.value.replace(/\s/g, "");
					this.value = oValue;
					//var reg = /^[1-3]\d{10}$/;
					$("#username_test").style.color = "red";
					if(/^0?1[3|4|5|8][0-9]\d{8}$/.test(oValue)){
						
						$("#username_test").style.color = "green";
						$("#username_test").innerHTML = "√";
					}else{
						$("#username_test").innerHTML = "X";
					}
					
				}

				//密码的验证
			$("#password").onblur = function(){
				$("#password_test").style.color = "red";
				if(this.value.length > 18 || this.value.length < 6){
					$("#password_test").innerHTML = "X";
				}else{	
					$("#password_test").style.color = "green";
					//判断密码强度
					if(/\d+/.test(this.value) && /[a-z]+/.test(this.value) && /[A-Z]+/.test(this.value)){
						$("#password_test").innerHTML = "√";
					}else if(/^\d+$/.test(this.value) || /^[a-z]$/.test(this.value) || /^[A-Z]$/.test(this.value)){
						$("#password_test").innerHTML = "√";
					}else{
						$("#password_test").innerHTML = "√"
					}
				}
			}
			
			$("#password2").onblur = function(){
				if(this.value.length > 18 || this.value.length < 6){
					$("#password_test2").innerHTML = "X";
				} else if (!(this.value == $("#password").value) && this.value !="" ) {
					alert("两次输入的密码不一致，请重新输入！");	
					$("#password_test2").innerHTML = "X";
								
				}else{
					$("#password_test2").innerHTML = "√";
				}
			}


				//验证验证码是否正确
			$("#test_code").onblur = function(){
				if(this.value == $("#div_test").innerHTML){
					$("#code_test").innerHTML = "√";
				}else{
					$("#code_test").innerHTML = "X";
				}
			}

			$("#login").onclick = function(){
				//1.进行cookie缓存,存储用户名密码
				setCookie("username", $("#username").value, getDate(5));
				setCookie("password", $("#password").value, getDate(5));
				alert("登录成功");
			}

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

