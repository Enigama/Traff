import './404';
import initHome from './home';
import Native from './native';
import websites from './websites';

export default () => {
  initHome();
  const $root = $('.template');
  const title = $('.template__title').text();
  if (title === 'Native id') {
    new Native($root);
  }
  websites($root);
};
