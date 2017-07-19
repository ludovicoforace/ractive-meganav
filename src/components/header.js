import Ractive from 'ractive';
import template from './header.ract';

import head from './header/head.js';

export default Ractive.extend({
  template: template.template,
  components: {
    Head: head
  }
});
