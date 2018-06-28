import React, {Component} from 'react'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'toto'
    }
    this.textChange = this.textChange.bind(this)
  }

  textChange(e) {
    this.setState({
      text: e.target.value
    })
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

export default Editor