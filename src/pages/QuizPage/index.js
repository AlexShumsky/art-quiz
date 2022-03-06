import QuizHTML from './index.html';
// import images from '../../images';
import './style.scss';

class QuizPage {
  constructor(id, prev) {
    this.container = document.createElement('template');
    this.id = id;
    this.prev = prev;
  }

  quizManage() {
    const question = document.querySelector('.quiz__question');
    const container = document.querySelector('.app__block-container');
    const artistsBlock = document.querySelector('.app__block-artists');
    const picturesBlock = document.querySelector('.app__block-pictures');
    const prevLink = document.querySelector('.link-right');

    function showBlock(block) {
      if (block === 'artists') {
        artistsBlock.style.display = 'flex';
        picturesBlock.style.display = 'none';
      } else {
        artistsBlock.style.display = 'none';
        picturesBlock.style.display = 'flex';
      }
    }

    function renderArtistsQuiz() {
      showBlock('artists');
      question.innerHTML = 'кто автор данной картины?';
    }
    function renderPicturesQuiz() {
      showBlock('pictures');
      question.innerHTML = 'Какую картину написал <span id=picture-author>Aноним</span>';
      container.classList.add('.pictures');
    }
    prevLink.href = prevLink.href.slice(0, prevLink.href.lastIndexOf('#') + 1) + this.prev;
    if (this.prev === 'artists') {
      renderArtistsQuiz();
    } else {
      renderPicturesQuiz();
    }
  }

  render() {
    const template = this.container;
    template.innerHTML = QuizHTML;
    const templateInner = template.content.firstChild;
    templateInner.id = this.id;
    return templateInner;
  }
}

export default QuizPage;
