$(function () {
  $('.header__nav').on('click', function () {
    $('.menu__list').toggleClass('active');
    $('body').toggleClass('hidden');
  })
  $("#nav-toggle").click(function () {
    $(this).toggleClass("active");
    $navList.toggleClass("nav__list--opened");
  });
});