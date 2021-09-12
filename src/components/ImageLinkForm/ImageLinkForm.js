import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <p className="f6">
                {'Put a link to an image in the box below (preferably with a .jpg extension)'}
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange} />
                    <button
                        className="h-100 f4 w-30 ba grow link dim br2 ph3 pv2 mb2 dib white bg-light-purple"
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm