import AboutHtml from './index.html';
import './style.scss';

class AboutPage {
  constructor(id) {
    this.container = document.createElement('template');
    this.container.id = id;
  }

  render() {
    const containerInner = this.container;
    containerInner.innerHTML = AboutHtml;
    return containerInner.content.firstChild;
  }

  aboutManage() {
    const funcId = this.id;
    function markInput() {
      const contentP = document.querySelectorAll('.about__content p');
      const styleButtons = document.querySelectorAll('.about__button');
      const input = document.querySelector('input');
      styleButtons.forEach((button, i) => button.addEventListener('click', function () {
        switch (i) {
          case (0): {
            contentP[i].classList.toggle('colorfied');
            break;
          }
          case (1): {
            contentP[i].classList.toggle('line-throughted');
            break;
          }
          case (2): {
            contentP[i].classList.toggle('bold');
            break;
          }
          default:
            return null;
        }
        return funcId;
      }));
      input.addEventListener('blur', function () {
        const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        const date = new Date(this.value.split('.').reverse().join('-'));
        this.value = days[date.getDay()];
      });
    }
    markInput();
  }
}
export default AboutPage;
