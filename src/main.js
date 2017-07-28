import Ractive from 'ractive';
import template from './main.ract';

import preHeader from './components/preHeader.js';
import header from './components/header.js';

const Main = new Ractive({
  el: 'root',
  template: template.template,
  components: {
    PreHeader: preHeader,
    Header: header
  }
});

export default Main;
