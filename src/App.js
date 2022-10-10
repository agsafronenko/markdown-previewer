import React from "react";
import { marked } from "marked";
import placeholder from "./placeholder";
import "./styles.css";
import editor_icon from "./editor_icon.svg";
import previewer_icon from "./previewer_icon.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  convert() {
    let converted = marked.parse(this.state.input, { breaks: true });
    return { __html: converted };
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="mainHeading">Markdown Previewer</div>
          <div className="col-sm-6 col-xs-12 outerBox">
            <h4 className="heading">
              Editor{"   "}
              <img id="icon" src={editor_icon} />
            </h4>
            <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
          </div>
          <div className="col-sm-6 col-xs-12 outerBox">
            <h4 className="heading">
              Previewer{"   "}
              <img id="icon" src={previewer_icon} />
            </h4>
            <div id="preview" dangerouslySetInnerHTML={this.convert()} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
