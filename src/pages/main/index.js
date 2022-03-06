import MainHtml from './index.html';
import './style.scss';

class mainPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.id = id;
  }

  render() {
    const template = this.container;
    template.innerHTML = MainHtml;
    const templateInner = template.content.firstChild;
    templateInner.id = this.id;
    return templateInner;
  }
}
export default mainPage;
