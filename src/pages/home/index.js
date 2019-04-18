import './index.sass';
import './index.pug';

export default () => {
  const $campaing = $('.campaing')
  $campaing.find('.js-create-order').on('click', () => {
    console.log('aaaa');
  })
};
