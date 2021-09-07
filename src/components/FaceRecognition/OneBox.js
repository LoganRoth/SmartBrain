import React, { Component } from 'react'

class OneBox extends Component {
    render() {
        const { leftCol, topRow, rightCol, bottomRow } = this.props.box
        return (<div className='bounding-box' style={{left: leftCol, top: topRow, right: rightCol, bottom: bottomRow}}></div>)
    }
}

export default OneBox