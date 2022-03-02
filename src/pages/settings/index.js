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

  settingsManage() {
    function customizeBars(el) {
      const bar = el.nextElementSibling;
      bar.style.width = `${
        el.max === '1' ? el.value * 100 : el.value * 4 - 20
      }%`;
    }
    function customizeThumbs(el) {
      const thumb = el.nextElementSibling.nextElementSibling;
      thumb.style.left = `${
        el.max === '1' ? el.value * 100 : el.value * 4 - 20
      }%`;
    }
    function customizeInput() {
      customizeBars(this);
      customizeThumbs(this);
    }

    function drawCustomInputs() {
      const settingsSection = document.querySelector('.settings__section');

      settingsSection.addEventListener('mouseover', function (event) {
        const targetEl = event.target;
        if (targetEl.nodeName === 'INPUT' && targetEl.type === 'range') {
          targetEl.addEventListener('input', customizeInput);
        }
      });
    }

    drawCustomInputs();
  }
}
export default SettingsPage;
