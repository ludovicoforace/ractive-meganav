import Ractive from 'ractive';
import moment from 'moment';
import template from './footer.ract';

export default Ractive.extend({
  template: template.template,
  data: () => ({
    year: moment().format('YYYY')
  })
});
