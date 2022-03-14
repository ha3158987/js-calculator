import Numbers from './components/Numbers.js';
import {INITIAL_STATE} from './common/constants.js';

class App {
  constructor () {
    this.state = null;
    this.$numbers = null;
    this.setState({...INITIAL_STATE});
  }

  setState(next) {
    this.state = next;
    this.render();
  }

  handleNumberClick(num) {
    // 버튼이 눌리면 selectedNumbers를 업데이트 해야함. 3개 이상은 안들어가야 함.
    const newSelectedNumArr = [];
    newSelectedNumArr.push(num);
    this.setState({
      ...this.state,
      selectedNumbers: [...this.state.selectedNumbers, ...newSelectedNumArr]
    })

    console.log(this.state)
  }

  render() {
    this.$numbers = new Numbers({maxNumber: 10, onClick: this.handleNumberClick.bind(this)});
  }
}

new App();

