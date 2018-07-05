import React, {Component} from 'react'
import {connect} from "react-redux";
import previewReducer from "../reducers/previewReducer";
import ReactMarkdown from 'react-markdown'

class Preview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={'preview'}>
        <ReactMarkdown source={this.props.text['previewReducer']} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    text: state
  }
}

export default connect(mapStateToProps)(Preview);