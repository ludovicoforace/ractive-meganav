import Ractive from 'ractive';
import template from './head.ract';
import { targetNotContained } from '../../targetNotContained.js';

export default Ractive.extend({
  template: template.template,
  targetNotContained: targetNotContained,
  data: function () {
    return {
      active: null,
      board: false,

      mainNav: [
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
    };
  },
  oninit() {
    this.on('select', function (evt, i) {
      if (this.targetNotContained(this)) {
        this.set('board', true);
        this.set('active', i);
      }
    });
  }
});
