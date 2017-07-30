import Ractive from 'ractive';
import template from './main.ract';

import preHeader from './components/preHeader.js';
import header from './components/header.js';
import tech from './components/tech.js';
import footer from './components/footer.js';

const Main = new Ractive({
  el: 'root',
  template: template.template,
  components: {
    PreHeader: preHeader,
    Header: header,
    Tech: tech,
    Footer: footer
  }
});

export default Main;
