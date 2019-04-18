import User from './user';

export default () => {
  const $user = $('.user');
  if ($user.length) {
    new User($user)
  }
};
