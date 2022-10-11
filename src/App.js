import React from "react";
import { marked } from "marked";
import placeholder from "./placeholder";
import "./styles/styles.css";
import editor_icon from "./icons/editor_icon.svg";
import previewer_icon from "./icons/previewer_icon.svg";
import { editorMaxMin, previewMaxMin } from "./windowMaximize";
import { editorMaxMinIcon, previewMaxMinIcon } from "./windowMaximize";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      editorMax: true,
      previewMax: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaxMin = this.handleEditorMaxMin.bind(this);
    this.handlePreviewMaxMin = this.handlePreviewMaxMin.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleEditorMaxMin() {
    this.setState((state) => ({
      editorMax: !state.editorMax,
    }));
    editorMaxMin(this.state.editorMax);
  }
  handlePreviewMaxMin() {
    this.setState((state) => ({
      previewMax: !state.previewMax,
    }));
    previewMaxMin(this.state.previewMax);
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
          <div id="editorBox" className="col-sm-6 col-xs-12 outerBox">
            <h4 className="heading">
              Editor{"   "}
              <img id="icon" src={editor_icon} />
              <img onClick={this.handleEditorMaxMin} className="maxMinIcon" src={editorMaxMinIcon} />
            </h4>
            <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
          </div>
          <div id="previewBox" className="col-sm-6 col-xs-12 outerBox">
            <h4 className="heading">
              Previewer{"   "}
              <img id="icon" src={previewer_icon} />
              <img onClick={this.handlePreviewMaxMin} className="maxMinIcon" src={previewMaxMinIcon} />
            </h4>
            <div id="preview" dangerouslySetInnerHTML={this.convert()} />
          </div>
        </div>
        <footer>This project was build using: HTML, CSS, JavaScript, React, jQuery, Bootstrap and SASS</footer>
      </>
    );
  }
}

export default App;
