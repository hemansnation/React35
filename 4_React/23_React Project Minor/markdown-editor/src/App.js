import React, { Component } from 'react';
import {Remarkable} from 'remarkable';

class MarkdownEditor extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: 'Type Something Here...!'
    }

  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  getRawMarkup = () => {
    const md = new Remarkable();

    return {
      __html: md.render(this.state.value)
    }
  }

  render() {

    return (
      <div>
        <div style={{width: 300, float:'left'}}>
          <h3>Markdown Input</h3>
          <textarea
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>

        <div style={{width: 300, float:'left'}}>
          <h3>Preview</h3>
          <div 
            dangerouslySetInnerHTML={this.getRawMarkup()}
          >

          </div>

        </div>
      </div>
    )
  }
}

export default MarkdownEditor;