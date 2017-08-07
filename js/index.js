$(function(){
	// 首页头部第一个横向菜单最后一个li的效果
	$('.menufirst-right').bind('mouseover',function(){
		$('.shoppingcar').attr('src','images/shopping2.png');
	}).bind('mouseout',function(){
		$('.shoppingcar').attr('src','images/shopping1.png');
	});
	
	// 首页图片轮转
	var $banner=$(".banner");
	var $list=$("#list");
	var $buttons=$("#buttons div");
	var $prev=$(".jtleft");
	var $next=$(".jtright");
	var len=4;
	var index=1;
	var interval=3000;
	var timer;	

	function animate(offset){
		var left=parseInt($list.css("left"))+offset;
		$list.animate({"left":left},300,function(){
			if(left>-200){
			// 判断向右滑动（使用左边按钮时），当滑到第一张，
			// 再变回最后一张时，这个判断条件会起到作用。
				$list.css("left",-1364*len);
			}
			if(left<(-1364*len)){
			// 判断向左滑动（使用右边按钮时），当滑到最后一张，
			// 再变回第一张时，这个判断条件会起到作用。
				$list.css("left",-1364);
			}
		});
	}

	function showButton(){
		$buttons.eq(index-1).css('background','#ccc').
		siblings().css('background','rgba(0,0,0,0.5)');
	}

	function play(){
		timer=setTimeout(function(){
			$next.trigger("click");
			play();
		},interval);
	}
	function stop(){
		clearTimeout(timer);
	}

	$next.bind("click",function(){
	    // :is(":animated")   :animated是jQ选择器 选择所有动画元素
        // 判断元素是否处于动画状态，常用于”连续点击上/下一张按钮，
        // 只响应用户第一次点击动作“时使用。
		if($list.is(":animated")){
			return;
		}
		if(index==4){
			index=1
		}else{
			index+=1;
		}
		animate(-1364);
		showButton();
	});

	$prev.bind("click",function(){
		if($list.is(":animated")){
			return;
		}
		if(index==1){
			index=4;
		}else{
			index-=1;
		}
		animate(1364);
		showButton();
	});
	// jQuery 遍历 - each() 方法
	// each() 方法规定为每个匹配元素规定运行的函数
	// $(selector).each(function(index,element))
	// function(index,element) 	必需。为每个匹配元素规定运行的函数。
    // index - 选择器的 index 位置
    // element - 当前的元素（也可使用 "this" 选择器）
	$buttons.each(function(){
		$(this).bind("click",function(){
			if($list.is(":animated")){
				return;
			}
			var myIndex=parseInt($(this).attr("index"));
			var offset=-1364*(myIndex-index);
			animate(offset);
			index=myIndex;
			showButton();
		})
	});

	$banner.hover(stop,play);
	play();

	// banner图下面左边的div里的效果
	$('.bbleft>div').eq(0).hover(function(){
		$(this).find('img').attr('src','images/phone2.png');
	},function(){
		$(this).find('img').attr('src','images/phone1.png');
	});
	$('.bbleft>div').eq(1).hover(function(){
		$(this).find('img').attr('src','images/shft2.png');
	},function(){
		$(this).find('img').attr('src','images/shft1.png');
	});
	$('.bbleft>div').eq(2).hover(function(){
		$(this).find('img').attr('src','images/sx2.png');
	},function(){
		$(this).find('img').attr('src','images/sx1.png');
	});
	$('.bbleft>div').eq(3).hover(function(){
		$(this).find('img').attr('src','images/phonecar2.png');
	},function(){
		$(this).find('img').attr('src','images/phonecar1.png');
	});
	$('.bbleft>div').eq(4).hover(function(){
		$(this).find('img').attr('src','images/jx2.png');
	},function(){
		$(this).find('img').attr('src','images/jx1.png');
	});
	$('.bbleft>div').eq(5).hover(function(){
		$(this).find('img').attr('src','images/cz2.png');
	},function(){
		$(this).find('img').attr('src','images/cz1.png');
	});
	// 朵唯产品处的左右滑动效果
	$('.starproduct>.btn>.btnr').click(function(){
		if ($('.starproduct>.spshow>ul').offset().left==60) {
			$('.starproduct>.spshow>ul').animate({ left:'-=1224px'},500);
			$('.starproduct>.btn>.btnr>img').attr('src','images/jright2.png');
			$('.starproduct>.btn>.btnl>img').attr('src','images/jleft1.png');
		}
	});
	$('.starproduct>.btn>.btnl').click(function(){
		if ($('.starproduct>.spshow>ul').offset().left==-1164) {
			$('.starproduct>.spshow>ul').animate({ left:'+=1224px'},500);
			$('.starproduct>.btn>.btnr>img').attr('src','images/jright1.png');
			$('.starproduct>.btn>.btnl>img').attr('src','images/jleft2.png');
		}
	});
	// 产品处的查看更多效果
	$('.seemore').hover(function(){
		$('.seemore>img').attr('src','images/more2.png');
	},function(){
		$('.seemore>img').attr('src','images/more1.png');
	})

	// 固定导航条处的效果
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();
		if(scrolltop>0){
			$(".raside").css('visibility','visible');
		}else{
			$(".raside").css('visibility','hidden');
		}
	})
});