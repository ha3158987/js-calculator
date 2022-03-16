import Numbers from './components/Numbers.js';
import Display from './components/Display.js';
import {INITIAL_STATE} from './common/constants.js';

class App {
  constructor ({$target}) {
    this.$target = $target;
    this.state = null;
    this.$numbers = null;
    this.$display = null;
    this.setState({...INITIAL_STATE});
  }

  setState(next) {
    this.state = next;
    this.render();
  }

  handleNumberClick(num) {
    // 버튼이 눌리면 currNum 업데이트 해야함. 3개 이상은 안들어가야 함.
    if(this.state.currNum.length < 3) {
      this.setState({
        ...this.state,
        currNum: this.state.currNum += num,
        displayValue: this.state.displayValue === 0 ? num : this.state.displayValue + String(num)
      })
    } else {
      // 에러메세지 노출 - "3자리수 이상의 연산은 불가능합니다."
      return;
    }
    this.render();
    console.log(this.state)
  }

  render() {
    this.$numbers = new Numbers({maxNumber: 10, onClick: this.handleNumberClick.bind(this)});
    this.$display = new Display({displayValue: this.state.displayValue})
  }
}

new App({$target: document.body.querySelector("#app")});

