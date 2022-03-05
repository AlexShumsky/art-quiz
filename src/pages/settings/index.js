import SettingsHtml from './index.html';
import './style.scss';

class SettingsPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.id = id;
  }

  render() {
    const template = this.container;
    template.innerHTML = SettingsHtml;
    const templateInner = template.content.firstChild;
    templateInner.id = this.id;
    return templateInner;
  }

  settingsManage() {
    function toggleInput(el) {
      const input = document.querySelector(
        `.settings__${Object.values(el.target.dataset)}-input-container input`
      );
      input.disabled = !input.disabled;
    }
    function manageInputPerCheck() {
      const checkBoxes = document.querySelectorAll(
        '.settings__section input[type=checkbox]'
      );
      checkBoxes.forEach((checkBox) =>
        checkBox.addEventListener('input', toggleInput)
      );
    }
    manageInputPerCheck();
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
