import MainHtml from './index.html';
import './style.scss';

class mainPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.container.id = id;
  }

  render() {
    const containerInner = this.container;
    containerInner.innerHTML = MainHtml;
    return containerInner.content.firstChild;
  }
}
export default mainPage;
