import QuizHTML from './index.html';
import images from '../../images';
import './style.scss';

const randomData = {
  author: null,
  name: null,
  year: null,
  imageNum: null,
  variants: null
};
class QuizPage {
  constructor(id, prev) {
    this.container = document.createElement('template');
    this.id = id;
    this.prev = prev;
  }

  quizManage() {
    const question = document.querySelector('.quiz__question');
    const artistsBlock = document.querySelector('.app__block-artists');
    const picturesBlock = document.querySelector('.app__block-pictures');
    const prevLink = document.querySelector('.link-right');

    function getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function showBlock(block) {
      if (block === 'artists') {
        artistsBlock.style.display = 'flex';
        picturesBlock.style.display = 'none';
      } else {
        artistsBlock.style.display = 'none';
        picturesBlock.style.display = 'flex';
      }
    }
    function fillRandomImageObj() {
      const randomImage = getRandomNum(0, images.length - 1);
      Object.keys(randomData).forEach((key) => {
        randomData[key] = images[randomImage][key];
      });
      randomData.variants = [randomImage];

      function addAdditionVariants() {
        while (randomData.variants.length < 4) {
          const randomNum = getRandomNum(0, images.length - 1);
          if (randomData.variants.includes(randomNum)) {
            return addAdditionVariants();
          }

          randomData.variants.push(randomNum);
        }
        return null;
      }

      function shuffleAnswers() {
        const rangedAnswers = randomData.variants.slice();
        const randomAnswers = [];
        while (rangedAnswers.length > 0) {
          randomAnswers.push(
            ...rangedAnswers.splice(
              getRandomNum(0, rangedAnswers.length - 1),
              1
            )
          );
        }
        randomData.variants = randomAnswers;
      }

      addAdditionVariants();
      shuffleAnswers();
    }

    function renderArtistsQuiz() {
      showBlock('artists');
      fillRandomImageObj('artists');

      const picture = document.querySelector('.picture__container img');
      const answers = document.querySelectorAll('.answers__container p');
      const variants = randomData.variants;

      question.innerHTML = `Кто автор картины ${randomData.name}?`;
      picture.src = `../assets/img/${randomData.imageNum}.jpg`;

      variants.forEach((variant, i) => {
        answers[i].textContent = images[variant].author;
      });
    }
    function renderPicturesQuiz() {
      showBlock('pictures');
      fillRandomImageObj('pictures');

      const pictures = document.querySelectorAll('.app__block-pictures img');
      const variants = randomData.variants;

      question.innerHTML = `Какую картину написал ${randomData.author}`;
      variants.forEach((variant, i) => {
        pictures[i].src = `../assets/img/${variant}.jpg`;
      });
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
