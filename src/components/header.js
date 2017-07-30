import Ractive from 'ractive';
import request from 'then-request';
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
    showBoard: false,
    mainHead: {},
    snowflakes: {},
    schopenhauer: {},
    eagle: {},
    physiognomy: {}
  }),
  oninit() {
    const self = this;
    request('GET', './model.json',
      {
        headers: { accept: 'application/json' }
      })
      .then((res) => {
        const data = JSON.parse(res.getBody());
        self.set('mainHead', data.mainHead);
        self.set('snowflakes', data.snowflakes);
        self.set('schopenhauer', data.schopenhauer);
        self.set('eagle', data.eagle);
        self.set('physiognomy', data.physiognomy);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });

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
