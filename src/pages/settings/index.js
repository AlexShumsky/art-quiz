import SettingsHtml from './index.html';
import './style.scss';

class SettingsPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.container.id = id;
  }

  render() {
    const containerInner = this.container;
    containerInner.innerHTML = SettingsHtml;
    return containerInner.content.firstChild;
  }
}
export default SettingsPage;
