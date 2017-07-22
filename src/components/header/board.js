import Ractive from 'ractive';
import template from './board.ract';
import sideHead from './sideHead.js';

export default Ractive.extend({
  template: template.template,
  components: {
    SideHead: sideHead
  }
});
