export default class Number {
  constructor({number, $target, onClick}) {
    this.$target = $target;
    this.number = number;
    this.onClick = onClick;
    this.render();
  }

  render () {
    const $btnEl = document.createElement('button')
    $btnEl.innerText = this.number
    $btnEl.className = 'digit';

    this.$target.appendChild($btnEl);

    this.addEvent($btnEl, 'click', () => this.onClick(this.number));
  }

  addEvent ($el, event, callbackFn) {
    $el.addEventListener(event, callbackFn)
  }
}