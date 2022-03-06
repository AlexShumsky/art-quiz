import ErrorHtml from './index.html';
import './style.scss';
class ErrorPage {
  constructor(error) {
    this.container = document.createElement('template');
    this.errorType = error;
  }

  render() {
    const containerInner = this.container;
    containerInner.innerHTML = ErrorHtml;
    return containerInner.content.firstChild;
  }

  writeError() {
    const ErrorTitle = document.querySelector('.error__title');
    ErrorTitle.textContent = `Error ${this.errorType}`;
  }
}
export default ErrorPage;
