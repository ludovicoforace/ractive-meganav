import Ractive from 'ractive';
import slide from 'ractive-transitions-slide';
import template from './headerMob.ract';

export default Ractive.extend({
  template: template.template,
  transitions: { slide },
  data: () => ({
    showLi: false
  }),
  oninit() {
    this.on('active', function (evt, i) {
      this.toggle('showLi');
    });
  }
});
