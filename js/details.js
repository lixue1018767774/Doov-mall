$(function(){
	// 图片滑动效果
	$('.toleft').click(function(){
		if ($('.imgul>ul').offset().left==-10) {
			$('.imgul>ul').animate({ left:'+=94px'},500);
		}
	});
	$('.toright').click(function(){
		if ($('.imgul>ul').offset().left==84) {
			$('.imgul>ul').animate({ left:'-=94px'},500);
		}
	});
	// 选择小图片，相应的大图片会出现
	var index;
	$('.imgul>ul>li').bind('click',function(){
		index=$(this).index();
		imgshow();
	}).bind('mouseover',function(){
		index=$(this).index();
		imgshow();
	});

	function imgshow(){
		$('.imgul>ul>li').eq(index).css('border','1px #FB7D7E solid').siblings().css('border','1px #ccc solid');
		index=index+1;
		$('.small_pic>img').attr('src','images1/phone'+index+'.jpg');
		$('.big_pic>img').attr('src','images1/phone'+index+'.jpg');
	}

	// 放大镜效果
	$(".small_pic").bind("mousemove",function(event){
		var mousex=event.pageX;
		var mousey=event.pageY;
		var divoffset=$(this).offset();
		var l=mousex-divoffset.left-$(".overlay").width()/2;
		var t=mousey-divoffset.top-$(".overlay").height()/2;
		if(l>=400){
			l=400;
		}
		else if(l<=50){
			l=0;
		}

		if(t>=400){
			t=400;
		}
		else if(t<=50){
			t=0;
		}
		$(".overlay").css({
			left:l,
			top:t
		});
		$(".big_pic>img").css({
			left:-l,
			top:-t
		});
		
	}).hover(function(){
		$(".overlay,.big_pic").show();
	},function(){
		$(".overlay,.big_pic").hide();
	});
	//选择框效果
	$('.sectionone>div>div').click(function(){
		$(this).css('border','1px #FB7D7E solid').siblings().css('border','1px #ccc solid');
	})
	var result=1;
	$('.jian').click(function(){
		result-=1;
		if (result<=1) {
			result=1;
		}
		$('.num').html(result);
	})
	$('.jia').click(function(){
		result+=1;
		$('.num').html(result);
	})
	// 中间内容:详细信息处的切换效果
	var no;
	$('.mestop>ul>li').click(function(){
		no=$(this).index();
		$(this).css({
			color:'#fff',
			background:'#E5006A'
		}).siblings().css({
			color:'#555',
			background:'none'
		});
		$(".mesbottom>div").eq(no).show().siblings().hide();
	});

});