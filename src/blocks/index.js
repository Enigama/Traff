import User from './user';
import './btn/btn.sass';

export default () => {
  const $user = $('.user');
  if ($user.length) {
    new User($user)
  }
};
