$('a').click(function (e) {
  e.currentTarget.blur();
});

$('.carousel').jCarouselLite({
    speed: 500,
    visible: 1,
    vertical: true,
    mousewheel: true,
    btnNext: '.btn-slide .next',
    btnPrev: '.btn-slide .prev',
    btnGo: ['.btn-slide .1', '.btn-slide .2', '.btn-slide .3', '.btn-slide .4', '.btn-slide .5', '.btn-slide .6']
});

$(function () {
  $('.me3').trigger('click');
  $('.img-holder').css('display', 'none');
  window.setTimeout(function () {
    $('.img-holder').fadeIn();
  }, 500);
  var timeOut;

  $('#soundbear, #rumble, #bakpak, #myksr, #resume').mouseenter(function (e) {
    window.clearTimeout(timeOut);
    $('.' + e.currentTarget.id).trigger('click');
  });

  $('#soundbear, #rumble, #bakpak, #myksr, #resume').mouseout(function (e) {
    timeOut = window.setTimeout(function () {
      $('.me3').trigger('click');
    }, 500);
  });
});
