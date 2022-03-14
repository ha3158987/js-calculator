export default class Number {
  constructor({number, target}) {
    this.number = number;
    this.target = target;
    this.render();
  }

  render () {
    const btnEl = `<button class="digit">${this.number}</button>`;
    this.target.insertAdjacentHTML('beforeend', btnEl);
  }
}