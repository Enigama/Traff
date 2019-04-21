import './index.sass';
import './index.pug';

export default () => {
  const $template = $('.template')
  let type;
  $template.find('.js-create').on('click', e => {
    type = $(e.currentTarget).data('type');
    $template.addClass(`template--create template--create${type}`);
  })
  $template.find('.js-change').on('click', () => {
    $template.removeClass(`template--create template--create${type}`);
  })
};
