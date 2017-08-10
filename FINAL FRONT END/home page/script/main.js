$(window).ready(function() {

// drop Button 

	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$("#listBtn").attr("class", "lnr lnr-cross")
			$(".dropBtn").slideDown();
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});

//  Scroll Top

	$(".topBtn").click(function() {
		$("body").animate({
			scrollTop: 0,
		}, 1500);
	});


	$(".processbtn").click(function() {
		$("body").animate({
			scrollTop: 1600,
		}, 1500);
	});	

// input  color change 

$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
// Draggable script

    $(".uls").draggable({
      cursor: "move", 
    	containment: "parent",
    	  stop: function() {
      if(jQuery(".uls").position().left < 10){
          jQuery(".uls").css("left", "190px");
      }else if(jQuery(".uls").position().left > 180){
          jQuery(".uls").css("left", "190px");
      }
  
    } 
    });

// animate 

$(".slideRow").hide()
count=1;
		$(".img2").hide()
		$(".img1").show(1000)
		$(".slideRow").slideDown(1500)
		$(".img1").css(
			"transform","scale(1.4)"
		)
				$(".img2").css(
			"transform","scale(1)"
		)
	function topslide(){
	if(count==0){
		$(".img2").hide()
		$(".slideRow").slideUp(1000)
		$(".slideRow").slideDown(5000)
		$(".img1").show()
		$(".img1").css(
			"transform","scale(1.4)"
		)
				$(".img2").css(
			"transform","scale(1)"
		)
	
		count=1;
	}else if(count==1){
		$(".img1").hide()
		$(".img2").show()
		$(".slideRow").slideUp(1000)
		$(".slideRow").slideDown(5000)
		$(".img2").css(
			"transform","scale(1.4)"
		)
				$(".img1").css(
			"transform","scale(1)"
		)
		count=0;
	}	
	}	
setInterval(topslide,10000)

})

// Onclick slide

$(".leftdown").click(function(){
	if(count==0){
		$(".img2").hide()
		$(".slideRow").slideUp(1000)
		$(".slideRow").slideDown(5000)
		$(".img1").show()
		$(".img1").css(
			"transform","scale(1.4)"
		)
				$(".img2").css(
			"transform","scale(1)"
		)
	
		count=1;
	}else if(count==1){
		$(".img1").hide()
		$(".img2").show()
		$(".slideRow").slideUp(1000)
		$(".slideRow").slideDown(5000)
		$(".img2").css(
			"transform","scale(1.4)"
		)
				$(".img1").css(
			"transform","scale(1)"
		)
		count=0;
	}	
})
$(".rightdown").click(function(){
	if(count==0){
		$(".img2").hide()
		$(".slideRow").slideUp(1000)
		$(".slideRow").slideDown(5000)
		$(".img1").show()
		$(".img1").css(
			"transform","scale(1.4)"
		)
				$(".img2").css(
			"transform","scale(1)"
		)
	
		count=1;
	}else if(count==1){
		$(".img1").hide()
		$(".img2").show()
		$(".slideRow").slideUp(1000)
		$(".slideRow").slideDown(5000)
		$(".img2").css(
			"transform","scale(1.4)"
		)
				$(".img1").css(
			"transform","scale(1)"
		)
		count=0;
	}	

// WINDOW RESIZE IMAGE

   $(".caseStudent ").width($(window).width()*4);
      $(".caseStudent img").width($(window).width());
    });
  $(".caseStudent ").width($(window).width()*4);
  $(".caseStudent img").width($(window).width());
  $(window).ready(function() {
    sumWidth=-$(window).width();
    function mySlider(){
    	var iteration=2*$(window).width();
    	$(".caseStudent").animate({
			left: sumWidth+"px",
		}, 1000)
		sumWidth-=$(window).width();
		if(sumWidth<-iteration){
			sumWidth=0;
		}
    }setInterval(mySlider, 5000)

// FILTER SCIRPT


	$(".secondul img").css("filter","grayscale(100)")
  	$(".click1 img").css("filter","grayscale(0)")
  	i=0;
  function timer(){
  if( i == 0){
  		$(".secondul img").css("filter","grayscale(100)")
  		$(".click2 img").css("filter","grayscale(0)")
  	i=2;
  }
  else if(i == 2){
  		$(".secondul img").css("filter","grayscale(100)")
  		$(".click3 img").css("filter","grayscale(0)")
  	i=3;
  }
  else if(i==3){
  	$(".secondul img").css("filter","grayscale(100)")
  	$(".click1 img").css("filter","grayscale(0)")
  	i=0;
  }
 
}setInterval(timer, 5000)


$(".caseStudent ").width($(window).width()*3);
  $(".caseStudent img").width($(window).width());
  $(".click1").click(function(){
  	$(".secondul img").css("filter","grayscale(100)")
  	$(".click1 img").css("filter","grayscale(0)");
  	$(".caseStudent").animate({
			left:"0px",
		}, 1000)


   $(".click2").click(function(){
   	$(".secondul img").css("filter","grayscale(100)");
  	$(".click2 img").css("filter","grayscale(0)");
  	$(".caseStudent").animate({
			left:(-$(window).width())+"px",
		}, 1000)
  })


   $(".click3").click(function(){
   	$(".secondul img").css("filter","grayscale(100)")
  	$(".click3 img").css("filter","grayscale(0)");
  	$(".caseStudent").animate({
			left:(-$(window).width())*2+"px",
		}, 1000)
  })
	
})


});





$(window).ready(function(){
    var i = 0;
    function settimee() {
        if($("body").scrollTop() >= 3350) {
            function setInter() {
                if (i<=156){
                    i++;
                    $(".interval p").html(i);
                }
            }
            setInterval(setInter,100);
        }
    }
    setInterval(settimee,4);
    
})

$(window).ready(function(){
    var i = 0;
    function settimees() {
        if($("body").scrollTop() >= 3350) {
            function setIntersecond() {
                if (i<=254){
                    i++;
                    $(".secondinterval p").html(i);
                }
            }
            setInterval(setIntersecond,100);
        }
    }
    setInterval(settimees,1);
    
})

$(window).ready(function(){
    var i = 0;
    function settimeess() {
        if($("body").scrollTop() >= 3350) {
            function setInterthird() {
                if (i<=24050){
                    i+=50;
                    $(".thirdinterval p").html(i);
                }
            }
            setInterval(setInterthird,100);
        }
    }
    setInterval(settimeess,1);
    
})


$(window).ready(function(){
	$("#quoteBox").hide();
	$(".quoteBoxItem").hide();
	$(".quoteBtn").click(function(){
		$("section").hide();
		$("#quoteBox").show();
		$(".quoteBoxItem").slideDown();
	})

	$(".closeBtn").click(function(){
		$("section").show();
		$("#quoteBox").hide();
		$(".quoteBoxItem").slideUp();
	})
})

$(window).ready(function(){
		$("#banner").click(function(){

		$("#serDropNav").hide();
})
})
$("#serDropNav").hide();

$(window).ready(function () {
	
	$( ".clickSer" ).click(function() {
  		$("#serDropNav").toggle();	
	});


})

$("#serDropNav2").hide();
$(window).ready(function () {
	
	$( ".clickSer1" ).click(function() {
  		$("#serDropNav2").toggle();	
	});
	$("#listBtn").click(function() {
		$("#serDropNav2").hide();
	})

})




$(window).ready(function(){
	$("#featuredBoxs").hide();
	$(".featuredBoxItem").hide();
	$(".btnimg").click(function(){
		$("section").hide();
		$("#featuredBoxs").show();
		$(".featuredBoxItem").slideDown();
	})

	$(".closeBtn").click(function(){
		$("section").show();
		$("#featuredBoxs").hide();
		$(".featuredBoxItem").slideUp();
	})
})


$(window).ready(function(){
	$("#featuredBoxs .image11").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: 0+"px",
		}, 1000)
		$("#featuredBoxs .image11").css("border","1px solid #53B778")
		$("#featuredBoxs .image22").css("border","none")
		$("#featuredBoxs .image33").css("border","none")
	})	
	$("#featuredBoxs .image22").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: -slideImgWidth+"px",
		}, 1000)
		$("#featuredBoxs .image22").css("border","1px solid #53B778")
		$("#featuredBoxs .image11").css("border","none")
		$("#featuredBoxs .image33").css("border","none")
	})
	$("#featuredBoxs .image33").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: -2*slideImgWidth+"px",
		}, 1000)
		$("#featuredBoxs .image33").css("border","1px solid #53B778")
		$("#featuredBoxs .image11").css("border","none")
		$("#featuredBoxs .image22").css("border","none")
	})
})

