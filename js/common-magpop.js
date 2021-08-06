jQuery( window ).load(function() {
  jQuery('.sidr-class-popup-inline,.popup-inline, .popup-inline a,.open-popup-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" type="button" class="mfp-close" >close</button>',
    midClick: true
  });
});
jQuery('.popup-video, .video-link').each(function() {
  var jQuerythis = jQuery(this);
  var startT = jQuerythis.data('start');
  var showCC = jQuerythis.data('cc');
  if('' === startT) {
    var startT = 0;
  }
  if('yes' === showCC) {
    var videoCC = 1;
  } else {
    var videoCC = 0;
  }
  jQuerythis.magnificPopup({
    type: 'iframe',
    midClick: true,
    closeMarkup: '<button title="%title%" type="button" class="mfp-close" >close</button>',
    iframe: {
      patterns: {
        youtube: {
          src: '//www.youtube.com/embed/%id%?rel=0&amp;autoplay=1&amp;cc_load_policy='+videoCC+'&amp;start=' + jQuerythis.data('start')
        },
        vimeo: {
          src: '//player.vimeo.com/video/%id%?autoplay=1&rel=0&#t=' + jQuerythis.data('start')
        }
      }
    }
  });
});