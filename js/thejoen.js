/*room*/
$(function(){
	$('.small li img').mouseover(function(){
		$(this).css({backgroundColor:'black',opacity:'0.5'});
			$('.small p').show();
				});
				
	$('.small li img').mouseout(function(){
		$(this).css({backgroundColor:'black',opacity:'1'});
			$('.small p').hide();
				});
				
/*팝업창*/
		$('.close a').click(function(){
				$('#popUp').hide();
				
		$('.logo').click(function(){
			$('#popUp').show();
		});
			
		});
/*gnb*/
$('li.main').on('mouseover',function(){
	$(this).children('ul').stop().slideDown();
});
$('li.main').mouseleave('mouseout',function(){
	$(this).children('ul').stop().slideUp();
});
/*facility*/
$(".circle li img").mouseover(function(){
		$(".circle li img").animate({ top:"100px"},2000);
		$(".circle p").delay(600).animate({ top:"130px"},2000);
	});

/*travel*/
$(".tpic img").each(function(aa){
		$(this).css("left", 1200*aa);
	});
	
	setInterval(function(){
		$(".tpic img").each(function(){
			var nowLeft = parseInt($(this).css("left")); 
			var moveLeft = nowLeft - 1200;
			$(this).animate({left:moveLeft},1000, function(){
				if(moveLeft<=-1200){     
					$(this).css("left",2400); 
				}
			});
		});
	}, 3000); 

	/*location*/
	$('#location img').mouseover(function(){
		$('#location ul li i').slideDown(1000);
		$('#location ul p').show(1000);
	});

});