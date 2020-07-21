
// require('./lib.js');
import { ToyReact, Component } from './ToyReact.js';

// for (let i of [1, 2, 3]) {
//   console.log(i)
// }

// console.log('main');
class TestComp extends Component {
  render() {
    <div name='test-comp'>
      666
    </div>
  }
}

class MyComponent extends Component {

  render() {
    return <div id="my-comp">
      <span name="a">
        {/* <TestComp>3</TestComp> */}
      </span>
      <div name='c'>
        {this.children}
      </div>
    </div>
  }

}

let a = <MyComponent name="a" ><div id='sb'>123</div></MyComponent>
console.log('aaaa', a)
ToyReact.render(a, document.body);

// let b = <div type="edit" id="abc">test
//   <span name="s1">3</span>
//   <span>4</span>
// </div>

// console.log(b);
// document.body.appendChild(b);


// return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
//   id: "s"
// }, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", {
//   name: "a"
// }, "hello"), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", {
//   name: "a1"
// }, "hellol"), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
//   name: "c"
// }, this.children));





