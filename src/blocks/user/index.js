import './user.sass';

export default class User{
  constructor() {
    console.log('init user');
    this.$root = $('.user');
  }

  userMobile() {
    this.$root.toggleClass('user--mobile');
  }
}
