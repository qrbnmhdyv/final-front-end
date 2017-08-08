$(window).ready(function() {
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
});



$(window).ready(function(){
	$(".topBtn").click(function() {
		$("body").animate({
			scrollTop: 0,
		}, 1500);
	});
})
$(window).ready(function(){
	$(".processbtn").click(function() {
		$("body").animate({
			scrollTop: 1600,
		}, 1500);
	});
})


$(window).ready(function(){
	$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
});



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
  
// count= [1,2,3,4]
  		
//   $(window).ready(function(){
//   	$("#Success").click(function(){
//   		for (i=0; i<10; i++){
//   		$(".interval").text(count[4])
//   		}
//   	})
  	
// })


		$(".slideRow").hide()
$(window).ready(function(){
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
	

  $(window).resize(function() {
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
    });


// var sliderBtn=document.querySelectorAll(".sliderBtn");
// sumWidth=-imgWidth;
// $(".sliderBtn").click(function(){
// 	$(".caseStudentSlide").animate({
// 		left: sumWidth+"px"
// 	})
// 	sumWidth-=imgWidth;
// })



$(window).ready(function(){
	i=0
	function setInter(){

		$(".interval p").html(i);
		 if (i === 157) {

        }
        else {
            i++;
        }
	}

	setInterval(setInter,1.2)
})

$(window).ready(function(){
	a=0
	function setIntersecond(){

		$(".secondinterval p").html(a);
		 if (a === 250) {

        }
        else {
            a++;
        }
	}

	setInterval(setIntersecond,0.1)
})
$(window).ready(function(){

	b=0
	function setInterthird(){

		$(".thirdinterval p").html(b);
		 if (b === 24100) {

        }
        else {
            b+=100;
        }
	}

	setInterval(setInterthird,0.2)
})

