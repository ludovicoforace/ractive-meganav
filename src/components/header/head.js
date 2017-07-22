import Ractive from 'ractive';
import template from './head.ract';
import board from './board.js';
import { targetNotContained } from '../../targetNotContained.js';

export default Ractive.extend({
  template: template.template,
  components: {
    Board: board
  },
  data: () => ({
    active: null,
    showBoard: false,

    mainHead: [
      {
        title: 'Snowflakes',
        anchor: 'https://en.wikipedia.org/wiki/Snowflake'
      },
      {
        title: 'Arthur Schopenhauer',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer'
      },
      {
        title: 'Eagles',
        anchor: 'https://simple.wikipedia.org/wiki/Eagle'
      },
      {
        title: 'Physiognomy',
        anchor: 'https://en.wikipedia.org/wiki/Physiognomy'
      }
    ]
  }),
  oninit() {
    this.on('select', (evt, i) => {
      if (targetNotContained(this)) {
        this.set('showBoard', true);
        this.set('active', i);
      }
    });
  }
});
