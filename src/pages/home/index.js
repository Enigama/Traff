import './index.sass';
import './index.pug';

export default () => {
  const $campaing = $('.campaing')
  $campaing.find('.js-create-order').on('click', () => {
    $campaing.addClass('campaing--createOrder');
  })
  $campaing.find('.js-change').on('click', () => {
    $campaing.removeClass('campaing--createOrder');
  })
};
