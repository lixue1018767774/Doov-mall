$(function(){
	// 登录页面上右上角图片效果
	$('.saoma').hover(function(){
		$(this).attr('src','images/erweima2.png');
	},function(){
		$(this).attr('src','images/erweima1.png');
	});
	// 登录页面上其他登录方式处的效果
	$('.tubiao>.qq').hover(function(){
		$(this).attr('src','images/qq2.png');
	},function(){
		$(this).attr('src','images/qq1.png');
	});
	$('.tubiao>.sina').hover(function(){
		$(this).attr('src','images/sina2.png');
	},function(){
		$(this).attr('src','images/sina1.png');
	});
	$('.tubiao>.zhifu').hover(function(){
		$(this).attr('src','images/zhifu2.png');
	},function(){
		$(this).attr('src','images/zhifu1.png');
	});

	// 表单验证
	$("#signupForm").validate({
		rules:{
			txt:"required",
			pwd:{
				required:true,
				rangelength:[6,12]
			},
			yz:{
				required:true,
				minlength:4,
				maxlength:4,
				equalTo:'#hyz'
			}
		},
		messages:{
			txt:"请输入邮箱/手机号",
			pwd:{
				required:"请输入密码",
				rangelength:"密码的长度为6-12位"
			},
			yz:{
				required:"请输入验证码",
				minlength:"验证码的长度为4位",
				maxlength:"验证码的长度为4位",
				equalTo:'输入的验证码不对'
			}
		},
		errorPlacement:function(error,element){
			error.prependTo(element.next()); 
		}
	});

	// 二维码登录
	$('.dlright>.saoma').click(function(){
		$('.otherlogin').show();
	});
	$('.otherlogin>span').click(function(){
		$('.otherlogin').hide();
	});
});

