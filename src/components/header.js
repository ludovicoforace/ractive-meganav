import Ractive from 'ractive';
import template from './header.ract';
import board from './header/board.js';
import { targetNotContained } from '../targetNotContained.js';

export default Ractive.extend({
  template: template.template,
  components: {
    Board: board
  },
  data: () => ({
    activated: null,
    activatedSide: null,
    showBoard: false
  }),
  oninit() {
    this.on('active', (evt, i) => {
      if (targetNotContained(this)) {
        this.set('showBoard', true);
        this.set('activated', i);
        this.set('activatedSide', 0);
      }
    });
    this.on('out', (evt, i) => {
      if (targetNotContained(this)) {
        this.set('showBoard', false);
        this.set('activated', null);
      }
    });
  }
});
