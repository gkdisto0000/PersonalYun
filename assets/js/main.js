/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

  
  // one slide
  var ag = $('.artGroup');
  var btn01 = $('.btn>i').eq(0);
  var btn02 = $('.btn>i').eq(1);
  var pjs1 = $('.pjs.01');
  var pjs2 = $('.pjs.02');
  var pjs3 = $('.pjs.03');

  var i = 0;

  // 초기세팅
  pjs1.css({
    fontWeight: '700',
    color: '#222'
  });

  btn02.click(function(){
    i++;
    if(i>2){
      i=2
    }
    if(i == 0){
      pjs1.css({
        fontWeight: '700',
        color: '#222'
      });
      pjs2.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs3.css({
        fontWeight: ''
        , color: '#626262'
      });
    }else if(i==1){
      pjs1.css({
        fontWeight: ''
      });
      pjs2.css({
        fontWeight: '700'
        ,color: '#222'
      });
      pjs3.css({
        fontWeight: ''
        , color: '#626262'
      });
    }else if(i==2){
      pjs1.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs2.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs3.css({
        fontWeight: '700',
        color: '#222'
      });
    }

    if(i == 2) {
      $('i').eq(1).css('opacity', '0')
      } else if(i != 2) {
      $('i').eq(0).css('opacity', '1')
    };
    ag.css({
      marginLeft: i * -100 + '%'
    });
  });

  
  btn01.click(function(){
    i--;
    if(i<0){
      i=0
    }

    if(i == 0){
      pjs1.css({
        fontWeight: '700',
        color: '#222'
      });
      pjs2.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs3.css({
        fontWeight: ''
        , color: '#626262'
      });
    }else if(i==1){
      pjs1.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs2.css({
        fontWeight: '700',
        color: '#222'
      });
      pjs3.css({
        fontWeight: ''
        , color: '#626262'
      });
    }else if(i==2){
      pjs1.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs2.css({
        fontWeight: ''
        , color: '#626262'
      });
      pjs3.css({
        fontWeight: '700',
        color: '#222'
      });
    }

    if(i == 0) {
      $('i').eq(0).css('opacity', '0')
      } else if(i != 0) {
      $('i').eq(1).css('opacity', '1')
    };

    ag.css({
      marginLeft: i * -100 + '%'
    });
  });

  // Top btn
  $('.Top').click(function(){
    $('html,body').stop().animate({
      scrollTop: '0'
    }, 500)
  });

  // $('.Top').fadeOut();
  $('.Top').css({
    opacity: '0'
  });


  $('.topbutton').click(function(){
    $('html').animate({scrollTop : ($('#one').offset().top)}, 600);
  });

  
  $(window).scroll(function(){
    if($(window).scrollTop()>100){
      $('.Top').css({
        opacity: '1'
      });
    }else {
      $('.Top').css({
        opacity: '0'
      });
    }
  });


  //gnb
		// Hide Header on on scroll down
		var didScroll;
		var lastScrollTop = 0;
		var delta = 100;
		var navbarHeight = $('header').outerHeight();

		$(window).scroll(function(event){
			didScroll = true;
		});

		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 100);

		function hasScrolled() {
			var st = $(this).scrollTop();
						if(Math.abs(lastScrollTop - st) <= delta)
				return;

			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				  $('.gnb').css('top', '0px');

			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
				  $('.gnb').css('top', '-80px');
 
				}
			}
			lastScrollTop = st;
		}


})(jQuery);


