import React, {Component} from 'react'
import updatePreview from '../actions/updatePreview'
import {connect} from 'react-redux'


class Editor extends Component {

  textChange(e) {

  }

  render () {
    return (
      <div>
        <h1>Give me some markdown</h1>
        <textarea name="editme" id="editme" cols="30" rows="10" onChange={this.textChange}></textarea>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        text: state.text
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updatePreview: (text) => dispatch(updatePreview(text)),
    }
}

connect(mapStateToProps, mapDispatchToProps)(Editor);

export default Editor