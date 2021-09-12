import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0 pt5'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} >
                <div className="Tilt-inner">
                    <img className="brainImg" alt="brain logo" src={brain} />
                    </div>
            </Tilt>
        </div>
    )
}

export default Logo