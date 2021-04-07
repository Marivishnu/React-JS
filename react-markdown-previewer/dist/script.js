const initialState = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: initialState };

  }


  handleChange(event) {
    this.setState({
      text: event.target.value });

  }



  render() {

    const markedText = marked(this.state.text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "text-center" }, "React Markdown Previewer"), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/

      React.createElement("h5", { id: "editor-text", className: "text-center" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.text, onChange: this.handleChange.bind(this) })), /*#__PURE__*/



      React.createElement("div", { className: "col-6" }, /*#__PURE__*/

      React.createElement("h5", { id: "preview-text", className: "text-center" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: markedText } })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));