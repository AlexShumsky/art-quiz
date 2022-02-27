import ErrorHtml from './index.html';
import './style.scss';
class ErrorPage {
  constructor(errer) {
    this.container = document.createElement('template');
    this.errerType = errer;
  }

  render() {
    const containerInner = this.container;
    containerInner.innerHTML = ErrorHtml;
    return containerInner.content.firstChild;
  }

  writeError() {
    const ErrorTitle = document.querySelector('.error__title');
    ErrorTitle.textContent = `Error ${this.errerType}`;
  }
}
export default ErrorPage;
