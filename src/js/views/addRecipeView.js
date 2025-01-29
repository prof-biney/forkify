import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this.addHandlerUpload();
  }

  _toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    [this._overlay, this._btnClose].forEach(btn =>
      btn.addEventListener('click', this._toggleWindow.bind(this))
    );
  }

  addHandlerUpload() {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(this);
      console.log(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
