import './header.sass';

export default () => {
  const $header = $('.header');
  $header.find('.header__burger').on('click', (e) => {
    console.log(1);
    $(e.currentTarget).parents('header').toggleClass('header--small');
  });
}
