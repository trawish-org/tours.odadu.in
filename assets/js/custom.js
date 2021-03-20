
// custom-js

// ======banner-slider js code========

$(document).ready(function() {
  $("#home-carousel").owlCarousel({
      navigation : false,
      slideSpeed : 500,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      singleItem: true,
      autoPlay : true,
      stopOnHover : true,
       responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                  1000: {
                    items: 1
                  }
                }

  });

  // banner slider end

  // blog slider start

      $('#blog-slider').owlCarousel({
          loop:true,
          stagePadding:80,
          margin:25,
          autoplay:true,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:40
              },
              600:{
                  items:2,
                  stagePadding:40
              },
              1000:{
                  items:3,
                  stagePadding:60
              },
              1441:{
                  items:4
              }
          }
      })

    // blog slider end

    // why choose slider start

    $('#why-choose-slider').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:60,
                  margin:0
              },
              375:{
                  items:1,
                  stagePadding:80,
                  margin:0
              },
              600:{
                  items:3,
              },
              1000:{
                  items:3,
              }
          }
      })

    // why choose slider end

    // team slider start

    $('#team-slider').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:40
              },
              375:{
                  items:1,
                  stagePadding:60
              },
              600:{
                  items:2,
              },
              1000:{
                  items:4,
              }
          }
      })

    // team slider end


    // tour banner slider start

    $('#tour-banner-slider').owlCarousel({
          loop:true,
          stagePadding: 80,
          margin:15,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:40
              },
              320:{
                  items:1,
                  stagePadding:40
              },
              375:{
                  items:1,
                  stagePadding:60
              },
              600:{
                  items:1,
                  stagePadding:60
              },
              1000:{
                  items:2,
              },
              1440:{
                  items:3,
              }
          }
      })

    // tour banner slider end

    // imp-city slider start

    $('.imp-city-slider').owlCarousel({
          loop:true,
          margin:0,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
              },
              320:{
                  items:1,
              },
              375:{
                  items:1,
              },
              600:{
                  items:1,
              },
              1000:{
                  items:1,
              }
          }
      })

    $('.imp-city-slider .owl-nav button.owl-prev').prepend("<b>Melbourne /</b>");
    $('.imp-city-slider .owl-nav button.owl-next').append("<b>/ Brisbane</b>");

    // imp-city slider end

    // Exp slider start

    $('#exp-slider').owlCarousel({
          loop:true,
          stagePadding: 80,
          margin:15,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:40
              },
              320:{
                  items:1,
                  stagePadding:40
              },
              375:{
                  items:1,
                  stagePadding:60
              },
              600:{
                  items:1,
                  stagePadding:60
              },
              768:{
                  items:2,
                  stagePadding:60
              },
              1366:{
                  items:2,
              },
              1500:{
                  items:3,
              }
          }
      })

    // Exp slider end

    // top-itenary-acc slider start

    $('#top-itenary-acc-slider').owlCarousel({
          loop:true,
          margin:0,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
              },
              375:{
                  items:1,
              },
              600:{
                  items:1,
              },
              1366:{
                  items:1,
              }
          }
      })

    // top-itenary-acc slider end

    // ttd slider start

    $('#ttd-slider').owlCarousel({
          loop:true,
          stagePadding: 80,
          margin:15,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:40
              },
              320:{
                  items:1,
                  stagePadding:40
              },
              375:{
                  items:1,
                  stagePadding:60
              },
              600:{
                  items:1,
                  stagePadding:60
              },
              1366:{
                  items:2,
              },
              1500:{
                  items:3,
              }
          }
      })

    // ttd slider end

    // other-exp slider start

    $('.other-exp-slider').owlCarousel({
          loop:true,
          stagePadding: 80,
          margin:15,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:40
              },
              320:{
                  items:1,
                  stagePadding:40
              },
              375:{
                  items:1,
                  stagePadding:60
              },
              600:{
                  items:1,
                  stagePadding:60
              },
              1366:{
                  items:4,
              },
              1500:{
                  items:5,
              }
          }
      })

    // other-exp slider end


    // top-itenary-acc slider start

    $('.partner-slider').owlCarousel({
          loop:true,
          margin:0,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
              },
              375:{
                  items:2,
              },
              600:{
                  items:4,
              },
              1366:{
                  items:6,
              }
          }
      })

    // top-itenary-acc slider end

    // manish owl js start

    // highluy slider start

    $('#highly-section').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:0
              },
              375:{
                  items:1,
                  stagePadding:0
              },
              600:{
                  items:1,
              },
              1000:{
                  items:1,
              }
          }
      })

    // hihgly -section slider end


        // miles slider start

    $('#miles-section').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 0
              },
              375:{
                  items:1,
                  stagePadding: 20
              },
              600:{
                  items:1,
                  stagePadding: 40
              },
              1000:{
                  items:1,
                  stagePadding: 60
              }
          }
      })

    // miles -section slider end


       // miles slider start

    $('#miles-curated').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 0
              },
              375:{
                  items:1,
                  stagePadding: 0
              },
              600:{
                  items:1,
                  stagePadding: 40
              },
              1000:{
                  items:1,
                  stagePadding: 60
              }
          }
      })

    // miles -section slider end


           // #explore-hotels-monterrey slider start

    $('#explore-hotels-monterrey').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 0
              },
              375:{
                  items:1,
                  stagePadding: 0
              },
              600:{
                  items:1,
                  stagePadding: 0
              },
              1000:{
                  items:1,
                  stagePadding: 0
              }
          }
      })

    // #explore-hotels-monterrey -section slider end


         // #explore-hotels-monterrey slider start

    $('#explore-hotels-curated-monterrey').owlCarousel({
          loop:true,
          margin:25,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 0
              },
              375:{
                  items:1,
                  stagePadding: 0
              },
              600:{
                  items:1,
                  stagePadding: 0
              },
              1000:{
                  items:1,
                  stagePadding: 0
              }
          }
      })

    // #explore-hotels-monterrey -section slider end

    // blog slider start

      $('#what-include-slider').owlCarousel({
          loop:true,
          stagePadding:0,
          margin:25,
          autoplay:true,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:0
              },
              600:{
                  items:2,
                  stagePadding:0
              },
              1000:{
                  items:5,
                  stagePadding:0
              },
              1441:{
                  items:5
              }
          }
      })

    // blog slider end



    // what include curated slider start

      $('#what-include-curated').owlCarousel({
          loop:true,
          stagePadding:0,
          margin:25,
          autoplay:true,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:0
              },
              600:{
                  items:2,
                  stagePadding:0
              },
              1000:{
                  items:5,
                  stagePadding:0
              },
              1441:{
                  items:5
              }
          }
      })

    // blog slider end


    // eart-section

      $('#earth-section').owlCarousel({
          loop:true,
          stagePadding:0,
          margin:25,
          autoplay:true,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:80
              },
              600:{
                  items:2,
                  stagePadding:80
              },
              1000:{
                  items:2,
                  stagePadding:80
              },
              1441:{
                  items:3,
                  stagePadding:80

              }
          }
      })




//manish owl js end

   
});
// document ready end






$(document).ready(function(){
  $("#expandTour").focus(function(){
    $(".planningTravelBox").slideDown();
  });
});

$(document).ready(function(){
  $("#expandTour").focusout(function(){
    $(".planningTravelBox").slideUp();
  });
});




  // expert slider start

      $('#expert-slider').owlCarousel({
          loop:true,
          stagePadding:10,
          margin:25,
          autoplay:false,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
                  stagePadding:0
              },
              600:{
                  items:1,
                  stagePadding:0
              },
              1000:{
                  items:1,
                  stagePadding:0
              },
              1441:{
                  items:1
              }
          }
      })

	  // expert slider end

    // talk-highlight-slider start

      $('.talk-highlight-slider').owlCarousel({
          loop:true,
          margin:20,
          autoplay:false,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:1,
              },
              1000:{
                  items:2,
              }
          }
      })

    // talk-highlight-slider end

    // ticket-slider start

      $('.ticket-slider').owlCarousel({
          loop:true,
          margin:20,
          autoplay:false,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:1,
              },
              1000:{
                  items:1,
              }
          }
      })

    // ticket-slider end

    // hotel-stay-slider start

    //   $('.hotel-stay-slider').owlCarousel({
    //       loop:true,
    //       margin:20,
    //       autoplay:false,
    //       singleItem: true,
    //       nav:true,
    //       responsive:{
    //           0:{
    //               items:1,
    //           },
    //           600:{
    //               items:1,
    //           },
    //           1000:{
    //               items:1,
    //           }
    //       }
    //   })

    // hotel-stay-slider end

    // cruise-detail-slider start

      $('.cruise-detail-slider').owlCarousel({
          loop:true,
          margin:20,
          autoplay:false,
          singleItem: true,
          nav:true,
          responsive:{
              0:{
                  items:3,
              },
              600:{
                  items:4,
              },
              1000:{
                  items:5,
              }
          }
      })

    // cruise-detail-slider end

    // tour-detail-slider start

    //   $('.tour-detail-slider').owlCarousel({
    //       loop:true,
    //       margin:20,
    //       autoplay:false,
    //       singleItem: true,
    //       nav:true,
    //       responsive:{
    //           0:{
    //               items:1,
    //           },
    //           600:{
    //               items:1,
    //           },
    //           1000:{
    //               items:1,
    //           }
    //       }
    //   })

    // tour-detail-slider end

    // tour-detail-slider start

    //   $('.transfer-slider').owlCarousel({
    //       loop:true,
    //       margin:20,
    //       autoplay:false,
    //       singleItem: true,
    //       nav:true,
    //       responsive:{
    //           0:{
    //               items:1,
    //           },
    //           600:{
    //               items:1,
    //           },
    //           1000:{
    //               items:1,
    //           }
    //       }
    //   })

    // tour-detail-slider end


    $(document).ready(function(){
      $('.site-navigation.home .navbar-toggler').click(function(){
        $('.site-navigation.home').toggleClass('home-nav-bg');
      });
    });