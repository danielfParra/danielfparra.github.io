/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: Mariam - Personal Portfolio Template
--------------------------------------------------

Table of Content

	. Preloader
	. Menu
    . magnificPopup
    . Share Media
    . Testimonials
	. All Functions

 
----------------------------------- */
(function ($) {
    "use strict";

    /* -----------------------------------
             Preloader
    ----------------------------------- */
    function loading() {
        "use strict";
        $('.loading').delay(500).fadeOut(500);
    }

    /* -----------------------------------
                Menu
    ----------------------------------- */
    function menu() {
        "use strict";
        $("#menuToggle").on("click", function () {
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open"); 
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }

    /************************************************
     *  Accordion Box JS ADD THIS CODE MAIN.JS FIELS  *
    ***************************************************/
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            
            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next('.acc-content').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);    
            }
        }); 
    }
    
    /* -----------------------------------
	       magnificPopup
    -----------------------------------*/
    function magnificPopup() {
        "use strict";
        $(".works-items .view-work").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }



    /* -----------------------------------
          Share Media
   -----------------------------------*/
    function shareMedia() {
        $('.btn-share').on("click", function () {
            $('.social-footer').toggleClass('active');
        });
    }

    /* -----------------------------------
         Testimonials
    -----------------------------------*/
    function testimonials() {
        $(".testimonials .owl-carousel").owlCarousel({
            loop: true,
            stagePadding: 5,
            margin: 10,
            nav: false,
            autoplay: false,
            center: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1200: {
                    margin: 40,
                    items: 2,
                },
            }
        });
    }
    
    /* -----------------------------------
	      All functions
    -----------------------------------*/
    // Window on Load
    $(window).on("load", function () {
        "use strict";
        loading();

    });

    // Document on Ready
    $(document).on("ready", function () {
        "use strict";
        shareMedia();
        menu();
        testimonials();
        magnificPopup();
    });

})(jQuery);