import Ractive from 'ractive';
import template from './board.ract';
import desk from './desk.js';
import { targetNotContained } from '../../targetNotContained.js';

export default Ractive.extend({
  template: template.template,
  components: {
    Desk: desk
  },
  oninit() {
    this.on('activeSide', (evt, i) => {
      if (targetNotContained(this)) {
        this.set('activatedSide', i);
      }
    });
  }
});
