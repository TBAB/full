$(function () {
	var top=0;	
	var icon,clr;
	function set(){
		 icon=setInterval(function(){
		$('.move').css('opacity',0);
		$('.move').addClass('c1')
		},1000);
	
	 clr= setInterval(function(){		
		$('.move').css('opacity',1);
		},2000);	
	}
	set();
	
	function again(){
		clearInterval(icon);
		clearInterval(clr);
		$('.move').css('opacity',1);
        $('.move').removeClass('c1')

        setTimeout(set,1)
		
	};
	
    $('.move').click(function () {
           
        if(top>-400){
        	again();
        	top-=100;  
        	$('.container').css('top',top+'%');
        	
        }         
    })

    // 滑动效果
    // 定义开始时的X轴位置,结束时的X轴位置,X轴偏移量
    var startY,endY,moveY;
    var minMove=50;
    // 找到开始时的X轴位置
    $(document).on('touchstart',function (e) {
        startY=e.originalEvent.changedTouches[0].pageY;
    });

    // 找到结束时的X轴位置
  $(document).on('touchend',function (e) {
//        var tab=$('.offcanvas').hasClass('active');
            endY=e.originalEvent.changedTouches[0].pageY;
            moveY=endY-startY;
           if(moveY<!minMove){
                  
		        if(top>-400){
		        	again();
		        	top-=100;   
		        	$('.container').css('top',top+'%')
		        } 
            };
            if(moveY>minMove){
                    
		        if(top<0){
		        	again();
		        	top+=100; 
		        	$('.container').css('top',top+'%')
		        } 
            };
       });

    })


	
	
