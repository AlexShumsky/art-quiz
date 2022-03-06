import PicturesHtml from './index.html';
import './style.scss';

class PicturesPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.id = id;
  }

  render() {
    const template = this.container;
    template.innerHTML = PicturesHtml;
    const templateInner = template.content.firstChild;
    templateInner.id = this.id;
    return templateInner;
  }

  picturesManage() {}
}

export default PicturesPage;
