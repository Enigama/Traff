import './header.sass';
import User from '../../blocks/user';

export default class Header{
  constructor() {
    const $header = $('.header');
    $header.find('.header__burger').on('click', (e) => {
      if ($(window).innerWidth() < 992) {
        $(e.currentTarget).parents('header').toggleClass('header--mobile');
      } else {
        $(e.currentTarget).parents('header').toggleClass('header--small');
      }
    });

    $header.find('.header__user').on('click', () => {
      this.user = new User();
      this.user.userMobile();
    })
  }
}
