(function($) { 
	"use strict";
/* JavaScript Document */
jQuery(document).ready(function() {
    /* Trending Post Box function by = owl.carousel.js */
	jQuery('.trending-post-bx').owlCarousel({
		loop:true,
		center:true,
		margin:35,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},			
			1024:{
				items:3
			},
			1200:{
				items:5
			},
			1400:{
				items:5
			}
		}
	})
	
	/* Trending Post Box function by = owl.carousel.js */
	jQuery('.trending-post-bx1').owlCarousel({
		loop:true,
		center:true,
		margin:0,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},			
			1024:{
				items:3
			},
			1200:{
				items:5
			},
			1400:{
				items:5
			}
		}
	})
	
	/* blog Card Carousel function by = owl.carousel.js */
	jQuery('.blog-card-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			1024:{
				items:5
			},
			1200:{
				items:6
			},
			1400:{
				items:6
			}
		}
	})
	
	/* Blog Slider function by = owl.carousel.js */
	jQuery('.blog-slider-full').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1,
			},			
			1024:{
				items:1
			},
			1200:{
				items:1
			},
			1400:{
				items:1
			}
		}
	})
	
	/* Blog Slider function by = owl.carousel.js */
	jQuery('.blog-slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1,
			},			
			1024:{
				items:1
			},
			1200:{
				items:1
			},
			1400:{
				items:1
			}
		}
	})
	
	/* Blog Slider function by = owl.carousel.js */
	jQuery('.product-slide').owlCarousel({
		loop:true,
		margin:30,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			},
			1400:{
				items:4
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.post-slide').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		dots:true,
		navText: ['<i class="la la-angle-up"></i>', '<i class="la la-angle-down"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			991:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.post-slide1').owlCarousel({
		loop:true,
		autoplay:true,
		margin:40,
		center:true,
		nav:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		dots: false,
		navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
		responsive:{
			0:{
				items:3,
			},
			480:{
				items:4,
			},			
			991:{
				items:5
			},
			1000:{
				items:6,
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.post-slide2').owlCarousel({
		loop:true,
		margin:30,
		autoplay: true,
		nav:true,
		dots: false,
		navText: ['<i class="la la-long-arrow-left"></i>', '<i class="la la-long-arrow-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1
			},
			768:{
				items:2
			},			
			1000:{
				items:3
			},
			1400:{
				items:3
			}
		}
	})
	
	/* Blog Slider function by = owl.carousel.js */
	jQuery('.banner-slide').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		nav:true,
		dots: true,
		navText: ['<i class="fa fa-angle-up"></i>', '<i class="fa fa-angle-down"></i>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1,
			},			
			1024:{
				items:1
			},
			1200:{
				items:1
			},
			1400:{
				items:1
			}
		}
	})
	
});
/* Document .ready END */

})(jQuery);	