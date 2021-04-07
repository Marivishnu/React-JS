const obj = [
{
  id: "clear",
  display: "AC" },

{
  id: "back",
  display: "<-" },

{
  id: "divide",
  display: "/" },

{
  id: "seven",
  display: 7 },

{
  id: "eight",
  display: 8 },

{
  id: "nine",
  display: 9 },

{
  id: "multiply",
  display: "*" },

{
  id: "four",
  display: 4 },

{
  id: "five",
  display: 5 },

{
  id: "six",
  display: 6 },

{
  id: "subtract",
  display: "-" },

{
  id: "one",
  display: 1 },

{
  id: "two",
  display: 2 },

{
  id: "three",
  display: 3 },

{
  id: "add",
  display: "+" },

{
  id: "zero",
  display: 0 },

{
  id: "decimal",
  display: "." },

{
  id: "equals",
  display: "=" }];



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentNum: '0',
      prevNum: "",
      lastPressed: "",
      operator: "",
      expr: "0",
      result: "" };

    this.handleExpression = this.handleExpression.bind(this);
  }

  handleExpression(event) {
    const char = event.target.innerText;

    if (this.state.lastPressed == "=") {
      this.setState({
        currentNum: '0',
        prevNum: "",
        lastPressed: "",
        operator: "",
        expr: "0",
        result: "" });

    }

    if (char == "<-") {
      let expr = this.state.expr;

      if (this.state.expr == "0") {
        return;
      }
      expr = expr.slice(0, expr.length - 1);
      let pressed = expr.slice(expr.length - 1);
      this.setState({
        expr: expr,
        lastPressed: pressed });

      return;
    }

    switch (char) {
      case "AC":{
          this.setState({
            currentNum: '0',
            prevNum: "",
            lastPressed: undefined,
            expr: "0",
            result: "" });

          break;
        }
      case "0":{
          if (this.state.currentNum === '0') {
            this.setState({
              lastPressed: "0",
              currentNum: "0" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "0",
              lastPressed: "0",
              expr: this.state.expr + "0" });

          }
          break;
        }
      case "1":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "1",
              lastPressed: "1",
              expr: "1" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "1",
              lastPressed: "1",
              expr: this.state.expr + "1" });

          }
          break;
        }
      case "2":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "2",
              lastPressed: "2",
              expr: "2" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "2",
              lastPressed: "2",
              expr: this.state.expr + "2" });

          }
          break;
        }
      case "3":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "3",
              lastPressed: "3",
              expr: "3" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "3",
              lastPressed: "3",
              expr: this.state.expr + "3" });

          }
          break;
        }
      case "4":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "4",
              lastPressed: "4",
              expr: "4" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "4",
              lastPressed: "4",
              expr: this.state.expr + "4" });

          }
          break;
        }
      case "5":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "5",
              lastPressed: "5",
              expr: "5" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "5",
              lastPressed: "5",
              expr: this.state.expr + "5" });

          }
          break;
        }
      case "6":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "6",
              lastPressed: "6" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "6",
              lastPressed: "6",
              expr: this.state.expr + "6" });

          }
          break;
        }
      case "7":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "7",
              lastPressed: "7",
              expr: "7" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "7",
              lastPressed: "7",
              expr: this.state.expr + "7" });

          }
          break;
        }
      case "8":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "8",
              lastPressed: "8",
              expr: "8" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "8",
              lastPressed: "8",
              expr: this.state.expr + "8" });

          }
          break;
        }
      case "9":{
          if (this.state.currentNum === "0") {
            this.setState({
              currentNum: "9",
              lastPressed: "9",
              expr: "9" });

          } else {
            this.setState({
              currentNum: this.state.currentNum + "9",
              lastPressed: "9",
              expr: this.state.expr + "9" });

          }
          break;
        }
      case ".":{
          if (parseFloat(this.state.currentNum) % 1 == 0 && this.state.lastPressed != ".") {
            this.setState({
              currentNum: this.state.currentNum + ".",
              lastPressed: ".",
              expr: this.state.expr + "." });

          }
          break;
        }
      case "+":{
          let lastPressed = this.state.lastPressed;
          if (lastPressed != "+" && lastPressed != "-" && lastPressed != "/" && lastPressed != "*") {
            this.setState({
              expr: this.state.expr + "+",
              lastPressed: "+" });

          } else if (lastPressed == "-") {

            let myExpr = this.state.expr;
            let expr = myExpr.slice(0, myExpr.length - 1);
            let pressed = expr.slice(expr.length - 1);

            while (pressed == "/" || pressed == "*") {

              expr = expr.slice(0, expr.length - 1);
              pressed = expr.slice(expr.length - 1);
            }
            expr = expr + "+";
            this.setState({
              expr: expr,
              lastPressed: "+" });

          } else {
            let expr = this.state.expr.slice(0, this.state.expr.length - 1);
            expr = expr + "+";
            this.setState({
              expr: expr,
              lastPressed: "+" });

          }
          this.setState({
            prevNum: this.state.currentNum,
            currentNum: "" });

          break;
        }
      case "-":{
          this.setState({
            expr: this.state.expr + "-",
            lastPressed: "-" });

          this.setState({
            prevNum: this.state.currentNum,
            currentNum: "" });

          break;
        }
      case "*":{
          let lastPressed = this.state.lastPressed;
          if (lastPressed != "+" && lastPressed != "-" && lastPressed != "/" && lastPressed != "*") {
            this.setState({
              expr: this.state.expr + "*",
              lastPressed: "*" });

          } else {
            let myExpr = this.state.expr;
            let expr = myExpr.slice(0, myExpr.length - 1);
            expr = expr + "*";
            this.setState({
              expr: expr,
              lastPressed: "*" });

          }
          this.setState({
            prevNum: this.state.currentNum,
            currentNum: "" });

          break;
        }
      case "/":{
          let lastPressed = this.state.lastPressed;
          if (lastPressed != "+" && lastPressed != "-" && lastPressed != "/" && lastPressed != "*") {
            this.setState({
              expr: this.state.expr + "/",
              lastPressed: "/" });

          } else {

            let expr = this.state.expr.slice(0, this.state.expr.length - 1);
            expr = expr + "/";
            this.setState({
              expr: expr,
              lastPressed: "/" });

          }
          this.setState({
            prevNum: this.state.currentNum,
            currentNum: "" });

          break;
        }
      case "=":{
          let res;
          let myExpr = this.state.expr;

          while (myExpr[myExpr.length - 1] == "+" || myExpr[myExpr.length - 1] == "-" || myExpr[myExpr.length - 1] == "*" || myExpr[myExpr.length - 1] == "/")
          myExpr = myExpr.slice(0, myExpr.length - 1);

          res = eval(myExpr);
          console.log(res);
          this.setState({
            lastPressed: "=",
            result: res });

          this.setState({
            expr: res });

        }}

  }

  render() {

    let className = "item";
    return /*#__PURE__*/(

      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { id: "display" }, this.state.expr), /*#__PURE__*/



      React.createElement("div", { id: "gridcontainer" },

      this.props.elements.map((element, idx) => /*#__PURE__*/
      React.createElement("button", { className: className, id: element.id, key: idx, onClick: this.handleExpression, id: element.id }, element.display)))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, { elements: obj }), document.getElementById("app"));