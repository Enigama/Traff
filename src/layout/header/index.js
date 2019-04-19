import './header.sass';

export default () => {
  const $header = $('.header');
  $header.find('.header__burger').on('click', (e) => {
    if ($(window).innerWidth() < 992) {
      $(e.currentTarget).parents('header').toggleClass('header--mobile');
    } else {
      $(e.currentTarget).parents('header').toggleClass('header--small');
    }

  });
}
