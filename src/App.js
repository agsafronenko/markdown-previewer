import React from "react";
import { marked } from "marked";
import { placeholder } from "./placeholder";
import "./styles.css";

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
      <div>
        <div>
          <div>Editor</div>
          <textarea id="editor" value={this.state.input} rows="15" cols="60" onChange={this.handleChange}></textarea>
        </div>
        <div>
          <div>Previewer</div>
          <div id="preview" dangerouslySetInnerHTML={this.convert()}></div>
        </div>
      </div>
    );
  }
}

export default App;
