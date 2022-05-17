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

	// Scrolly.
		$('.scrolly').scrolly();

  
  // one slide
  var ag = $('.artGroup');
  var btn01 = $('.btn>i').eq(0);
  var btn02 = $('.btn>i').eq(1);
  var pjs1 = $('.pjs01');
  var pjs2 = $('.pjs02');
  var pjs3 = $('.pjs03');

  var i = 0;

  // 초기세팅
  pjs1.css({
    fontWeight: '700'
  });

  btn02.click(function(){
    i++;
    if(i>2){
      i=2
    }

    if(i == 0){
      pjs1.css({
        fontWeight: '700'
      });
      pjs2.css({
        fontWeight: ''
      });
      pjs3.css({
        fontWeight: ''
      });
    }else if(i==1){
      pjs1.css({
        fontWeight: ''
      });
      pjs2.css({
        fontWeight: '700'
      });
      pjs3.css({
        fontWeight: ''
      });
    }else if(i==2){
      pjs1.css({
        fontWeight: ''
      });
      pjs2.css({
        fontWeight: ''
      });
      pjs3.css({
        fontWeight: '700'
      });
    }

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
        fontWeight: '700'
      });
      pjs2.css({
        fontWeight: ''
      });
      pjs3.css({
        fontWeight: ''
      });
    }else if(i==1){
      pjs1.css({
        fontWeight: ''
      });
      pjs2.css({
        fontWeight: '700'
      });
      pjs3.css({
        fontWeight: ''
      });
    }else if(i==2){
      pjs1.css({
        fontWeight: ''
      });
      pjs2.css({
        fontWeight: ''
      });
      pjs3.css({
        fontWeight: '700'
      });
    }


    ag.css({
      marginLeft: i * -100 + '%'
    });
  });


})(jQuery);