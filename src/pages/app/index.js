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
    this.container = document.querySelector('.content');
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

  enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderNewPage(hash);
    });
  }
}

export default App;
