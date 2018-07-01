import React, {Component} from 'react'
import updatePreview from '../actions/updatePreview'
import {connect} from 'react-redux'
import Preview from './Preview'


class Editor extends Component {
    constructor(props) {
        super(props)
        this.textChange = this.textChange.bind(this)
    }

    textChange(e) {
        this.props.updatePreview(e.target.value)
        console.log(this.store.getState())
    }

    render() {
        return (
            <div>
                <h1>Give me some markdown</h1>
                <textarea name="editme" id="editme" cols="30" rows="10" onChange={this.textChange}></textarea>
                <Preview text={this.props.text}/>
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

