import MainPage from '../main/index.js';
import AboutPage from '../about/index.js';
import SettingsPage from '../settings/index.js';
import ErrorPage from '../error/index.js';

export const pageIds = {
  MainPage: 'main',
  SettingsPage: 'settings',
  AboutPage: 'about',
  ErrorPage: 'error'
};

class App {
  constructor() {
    this.container = document.querySelector('.app__page');
    this.initialPage = new MainPage('main');
  }

  renderNewPage(idPage) {
    this.container.innerHTML = '';
    let page = null;
    if (idPage === pageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === pageIds.SettingsPage) {
      page = new SettingsPage(idPage);
    } else if (idPage === pageIds.AboutPage) {
      page = new AboutPage(idPage);
    } else {
      page = new ErrorPage('404');
      setTimeout(() => {
        page.writeError();
      }, 0);
    }
    if (page) {
      const PageHtml = page.render();
      this.container.append(PageHtml);
    }
    if (page[`${idPage}Manage`]) {
      page[`${idPage}Manage`]();
    }
  }

  run() {
    window.location.hash = '#main';
    this.renderNewPage('main');
    this.enableRouteChange();
  }

  animatePageSwap() {
    const pageContainer = document.querySelector('.app__page');
    pageContainer.classList.add('active');
    setTimeout(() => pageContainer.classList.remove('active'), 2000);
  }

  enableRouteChange() {
    window.addEventListener('hashchange', () => {
      this.animatePageSwap();
      setTimeout(() => {
        const hash = window.location.hash.slice(1);
        this.renderNewPage(hash);
      }, 1000);
    });
  }
}

export default App;
