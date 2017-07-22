import Ractive from 'ractive';
import template from './sideHead.ract';
import { targetNotContained } from '../../targetNotContained.js';

export default Ractive.extend({
  template: template.template,
  data: () => ({
    activatedSide: null,
    sampleOne: [
      {
        title: 'Description',
        anchor: 'https://en.wikipedia.org/wiki/Snowflake'
      },
      { title: 'Classification' },
      { title: 'Infographic' }
    ],
    sampleTwo: [
      {
        title: 'Bio',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer'
      },
      {
        title: 'Life',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer#Life'
      },
      {
        title: 'Thought',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer#Thought'
      },
      {
        title: 'Influences',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer#Influences'
      },
      {
        title: 'Critique of Kant and Hegel',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer#Critique_of_Kant_and_Hegel'
      },
      {
        title: 'Further reading',
        anchor: 'https://en.wikipedia.org/wiki/Arthur_Schopenhauer#Further_reading'
      }
    ],
    sampleThree: [
      {
        title: 'Info',
        anchor: 'https://simple.wikipedia.org/wiki/Eagle'
      },
      { title: 'Video' }
    ],
    sampleFour: [
      {
        title: 'Info',
        anchor: 'https://en.wikipedia.org/wiki/Physiognomy'
      },
      {
        title: 'Ancient physiognomy',
        anchor: 'https://en.wikipedia.org/wiki/Physiognomy#Ancient_physiognomy'
      },
      {
        title: 'Modern physiognomy',
        anchor: 'https://en.wikipedia.org/wiki/Physiognomy#Modern_physiognomy'
      },
      {
        title: 'Related disciplines',
        anchor: 'https://en.wikipedia.org/wiki/Physiognomy#Related_disciplines'
      }
    ]
  }),
  oninit() {
    this.on('activeSide', (evt, i) => {
      if(targetNotContained(this)){
        this.set('activatedSide', i);
      }
    });
  }
});