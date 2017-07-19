import Ractive from 'ractive';
import template from './main.ract';

import header from './components/header.js';

const Main = new Ractive({
  el: 'root',
  template: template.template,
  components: {
    Header: header
  }
});

export default Main;
