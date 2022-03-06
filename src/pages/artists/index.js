import ArtistsHtml from './index.html';
import './style.scss';

class ArtistsPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.id = id;
  }

  render() {
    const template = this.container;
    template.innerHTML = ArtistsHtml;
    const templateInner = template.content.firstChild;
    templateInner.id = this.id;
    return templateInner;
  }

  artistsManage() {}
}

export default ArtistsPage;
