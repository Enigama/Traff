import './index.sass'
import './websites.pug';

export default $root => {
  $root.find('select, .template-create__checkbox').styler()
}
