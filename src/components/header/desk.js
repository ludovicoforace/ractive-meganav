import Ractive from 'ractive';
import template from './desk.ract';
import { targetNotContained } from '../../targetNotContained.js';

export default Ractive.extend({
  template: template.template,
  data: () => ({
    overAnchor: false,
  }),
  oninit() {
    this.on('overAnchor', function (evt, i) {
      this.toggle('overAnchor', true);
    });
  }
});
