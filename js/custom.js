// ON CLICK TOGGLE

function myFunction() {
     var element = document.getElementById("search_inner");
     element.classList.toggle("mystyle");
}

//  slick  slider
$(document).on('ready', function() {
  $('.slider').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    mobileFirst: true,
    slidesToShow: 5,
  });  
  $('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});