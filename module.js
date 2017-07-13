jQuery(document).ready(function($) {

  $('#artCarousel').carousel({
              interval: 5000
    });

  $('#carousel-text').html($('#slide-content-0').html());


  $('[id^=carousel-selector-]').click( function(){
    var id = this.id.substr(this.id.lastIndexOf("-") + 1);
    var id = parseInt(id);
  $('#artCarousel').carousel(id);
      });

  $('#artCarousel').on('slid.bs.carousel', function (e) {
     var id = $('.item.active').data('slide-number');
  $('#carousel-text').html($('#slide-content-'+id).html());
      });
});
