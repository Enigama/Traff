import './index.sass';
import './index.pug';

export default () => {
  const $template = $('.template')
  $template.find('.js-create-order').on('click', () => {
    $template.addClass('template--createOrder');
  })
  $template.find('.js-change').on('click', () => {
    $template.removeClass('template--createOrder');
  })
};
