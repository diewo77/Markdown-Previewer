import React, {Component} from 'react'
import updatePreview from '../actions/updatePreview'
import {connect} from 'react-redux'


class Editor extends Component {
  constructor(props) {
    super(props)
    this.textChange = this.textChange.bind(this)
    this.state = {
      text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  `
    };
  }

  textChange(e) {
    this.props.updatePreview(e.target.value)
  }

  render() {
    return (
      <div>
        <h1>Give me some markdown</h1>
        <textarea name="editme" id="editme" cols="30" rows="10" onChange={this.textChange}>{this.props.text['previewReducer']}</textarea>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    text: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePreview: (text) => dispatch(updatePreview(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

