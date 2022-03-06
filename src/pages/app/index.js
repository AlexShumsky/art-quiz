import MainPage from '../main/index.js';
import PicturesPage from '../pictures/index.js';
import ArtistsPage from '../artists/index.js';
import SettingsPage from '../settings/index.js';
import QuizPage from '../QuizPage/index.js';
import ErrorPage from '../error/index.js';

export const pageIds = {
  MainPage: 'main',
  SettingsPage: 'settings',
  PicturesPage: 'pictures',
  ArtistsPage: 'artists',
  QuizPage: 'quiz',
  ErrorPage: 'error'
};

class App {
  constructor() {
    this.container = document.querySelector('.app__page');
    this.initialPage = new MainPage('main');
    this.prev = null;
  }

  renderNewPage(idPage) {
    this.container.innerHTML = '';
    let page = null;
    if (idPage === pageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === pageIds.SettingsPage) {
      page = new SettingsPage(idPage);
    } else if (idPage === pageIds.ArtistsPage) {
      page = new ArtistsPage(idPage);
    } else if (idPage === pageIds.PicturesPage) {
      page = new PicturesPage(idPage);
    } else if (idPage === pageIds.QuizPage) {
      page = new QuizPage(idPage, this.prev);
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

  saveOldUrl(ev) {
    const oldUrl = ev.oldURL;
    if (!oldUrl.endsWith('#quiz')) this.prev = oldUrl.slice(oldUrl.lastIndexOf('#') + 1);
  }

  animatePageSwap() {
    const pageContainer = document.querySelector('.app__page');
    pageContainer.classList.add('active');
    setTimeout(() => pageContainer.classList.remove('active'), 1000);
  }

  enableRouteChange() {
    window.addEventListener('hashchange', (event) => {
      this.saveOldUrl(event);
      this.animatePageSwap();
      setTimeout(() => {
        const hash = window.location.hash.slice(1);
        this.renderNewPage(hash);
      }, 500);
    });
  }
}

export default App;
