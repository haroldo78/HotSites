jQuery(document).ready(function(){
	jQuery( window ).scroll(function(event) {
	  if (jQuery(this).scrollTop() == 0)
	    jQuery(".topo").removeClass("row").addClass("default");
	  else
	    jQuery(".topo").removeClass("default").addClass("row");
	});
	jQuery( window ).scroll(function(event) {
	  if (jQuery(this).scrollTop() == 0)
	    jQuery(".menu").removeClass("row").addClass("default");
	  else
	    jQuery(".menu").removeClass("default").addClass("row");
	});
	jQuery( window ).scroll(function(event) {
	  if (jQuery(this).scrollTop() == 0)
	    jQuery(".logo").removeClass("row").addClass("default");
	  else
	    jQuery(".logo").removeClass("default").addClass("row");
	});
	jQuery( window ).scroll(function(event) {
	  if (jQuery(this).scrollTop() == 0)
	    jQuery(".go-up").removeClass("row").addClass("default");

	  else
	    jQuery(".go-up").removeClass("default").addClass("row");
	});

	//  jQuery('.categories-list').slidesjs({
	// 	width: 940,
	// 	height: 528,
	// 	navigation: false,
	// 	start: 3,
	// 	play: {
	// 		auto: true
	// 	}
	// });
});