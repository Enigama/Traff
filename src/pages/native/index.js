import './native.pug';
import './index.sass';
// import 'jquery-form-styler/dist/jquery.formstyler.css';

export default class Native {
  constructor($root) {
    console.log('native');
    $root.find('select').styler()
  }
}
