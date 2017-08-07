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
	$(".process").click(function() {
		$("body").animate({
			scrollTop: 1350,
		}, 1500);
	});
})


$(window).ready(function(){
	$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
});

var list = $(".tor")

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",function(){
		var element = $(this).index();
		for (var o = list.length; o > element; o--) {
			$(list[o]).removeClass("change");
			
		}
		for (var j = 0; j <= element; j++) {
			$(list[j]).attr("class", "change");

		}
	})
}
$(".ex").css("display","block");
$("#exp").click(function(){
	$(".ex").css("display","block");
	$(".skec").css("display","none");
	$(".digi").css("display","none");
	$(".clr").css("display","none");
	$(".fnl").css("display","none");
})
$("#ske").click(function(){
	$(".skec").css("display","block")
	$(".ex").css("display","none");
	$(".digi").css("display","none");
	$(".clr").css("display","none");
	$(".fnl").css("display","none");
})
$("#digi").click(function(){
	$(".digi").css("display","block")
	$(".ex").css("display","none");
	$(".skec").css("display","none");
	$(".clr").css("display","none");
	$(".fnl").css("display","none");
})
$("#clr").click(function(){
	$(".clr").css("display","block")
	$(".ex").css("display","none");
	$(".skec").css("display","none");
	$(".digi").css("display","none");
	$(".fnl").css("display","none");
})
$("#fnl").click(function(){
	$(".fnl").css("display","block")
	$(".ex").css("display","none");
	$(".skec").css("display","none");
	$(".digi").css("display","none");
	$(".clr").css("display","none");
})
