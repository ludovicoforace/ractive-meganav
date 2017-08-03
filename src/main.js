import Ractive from 'ractive';
import request from 'then-request';
import template from './main.ract';

import preHeader from './components/preHeader.js';
import header from './components/header.js';
import headerMob from './components/headerMob.js';
import tech from './components/tech.js';
import footer from './components/footer.js';

const Main = new Ractive({
  el: 'root',
  template: template.template,
  components: {
    PreHeader: preHeader,
    Header: header,
    HeaderMob: headerMob,
    Tech: tech,
    Footer: footer
  },
  data: () => ({
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
  }
});

export default Main;
