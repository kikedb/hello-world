import React, {Component } from 'react';

const style = {
    fontZise: '1.5em'
}

export default class H1 extends Component {
    render() {
        return (
            <h1 {...this.props} style={style}/>
        )
    }
}