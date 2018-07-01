import React, {Component} from 'react'
import {connect} from "react-redux";

class Preview extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p id="here">{console.log(this.props)}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        text: state.preload
    }
}

export default connect(mapStateToProps)(Preview);