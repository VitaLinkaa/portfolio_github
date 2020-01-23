
$(document).ready(function(){

  function heightDetect(){
    $(".header").css("height", $(window).height());
  };

  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });
    
  $('.header').parallax({ imageSrc: '../img/header.jpg' });

  $('.popUp').magnificPopup({ type: 'image' });

  $('h1').mousemove(function (e) {
    const rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
    const rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
    $('h1').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(216, 185, 170,.8), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgba(214, 215, 220,.1), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(104, 101, 115,.7)');
  });

  $(".sandwich").click(function () {
    $(".sandwich").toggleClass("active");
  });

  $(".open-menu li a").click(function () {
    $(".open-menu").fadeOut(500);
    $(".sandwich").toggleClass("active");
  });

  $(".header__menu").click(function () {
    if ($(".open-menu").is(":visible")) {
      $(".open-menu").fadeOut(500);
      $(".open-menu li a").removeClass("fadeInUp animated");
    } else {
      $(".open-menu").fadeIn(500);
      $(".open-menu li a").addClass("fadeInUp animated");
    };
  });

  $(".open-menu li a").mPageScroll2id();

  $(".portfolio button").click(function () {
    $(".portfolio button").removeClass("active");
    $(this).addClass("active");
  });

  $("#btnSubmit").click(function(event) {

    var form = $("#myForm")

    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    
    form.addClass('was-validated');
  });

});


$(window).ready(function(){
  $(".loader__inner").delay(200).fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});


$(document).ready(function () {

  const btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});

