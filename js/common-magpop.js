jQuery( window ).load(function() {
  jQuery('.add-popup-inline').each(function() {
    jQuery(this).find("a").addClass('popup-inline');
  });
});
jQuery(document).on("click", ".sidr-class-popup-inline,.popup-inline,.open-popup-link", function(e) {
  e.preventDefault();
  jQuery(this).magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" type="button" class="mfp-close" >close</button>',
    midClick: true
  }).magnificPopup('open');
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