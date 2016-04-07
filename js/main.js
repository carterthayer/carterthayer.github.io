$(document).ready( function(){ loadContent(window.location.hash);});



var loadContent = function (){
if( window.location.hash == "#about") {
  about();
} else if(window.location.hash == "#skills") {
	skills();
}
else if(window.location.hash == "#projects") {
	projects();
}
else if(window.location.hash == "#contact") {
	contact();
}

}

$(window).resize(function() {
	if($(window).width() < 560){
		$(".content").css("width", "100%");
	}
	else{
		if ($("#about").css("display") != "none" || $("#projects").css("display") != "none" || $("#skills").css("display") != "none" || $("#contact").css("display") != "none"){
			$(".content").css({"width" : "510px", "left": "430px"});
		}
	
	}
});

var about = function(){
closeAll();


if ($("#about").css("display") != "none"){

}
else{
window.location.hash = 'about';
$("#about").slideDown(200);
if($(window).width() >= 560){
$(".content").animate({left: '430px', width: '510px'}, 700);
}

}
};


var skills = function(){
closeAll();

if ($("#skills").css("display") != "none"){

}
else{
window.location.hash = 'skills';
$("#skills").slideDown(200);}
if($(window).width() >= 560){
$(".content").animate({left: '430px', width: '510px'}, 700);
}
};

var projects = function(){
closeAll();

if ($("#projects").css("display") != "none"){

}
else{
window.location.hash = 'projects';
$("#projects").slideDown(200);
if($(window).width() >= 560){
$(".content").animate({left: '430px', width: '510px'}, 700);
}
}



};

var contact = function(){
closeAll();

if ($("#contact").css("display") != "none"){

}
else{
window.location.hash = 'contact';
$("#contact").slideDown(200);
if($(window).width() >= 560){
$(".content").animate({left: '430px', width: '510px'}, 700);
}
}
};

var closeAll = function(){
if($(window).width() >= 560){
$(".content").animate({left: '0px', width: '430px'}, 700);
}
window.location.hash = '';
	$("#about").slideUp(200);
	$("#skills").slideUp(200);
	$("#projects").slideUp(200);
	$("#contact").slideUp(200);
}
