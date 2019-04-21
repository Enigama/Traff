import './404';
import initHome from './home';
import Native from './native';

export default () => {
  initHome();
  const $root = $('.template');
  const title = $('.template__title').text();
  if (title === 'Native id') {
    new Native($root);
  }
};
