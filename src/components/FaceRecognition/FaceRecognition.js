import React, { Component } from 'react'
import './FaceRecognition.css'
import OneBox from './OneBox'

class FaceRecognition extends Component {
    render() {
        const boxesArray = this.props.boxes.map((oneBox, i) => {
            return <OneBox key={i} box={oneBox} />
        })
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id='inputImage' alt="" src={this.props.imageUrl} height='auto' width='500px' />
                {boxesArray}
            </div>
        </div>
    )
    }
}

export default FaceRecognition