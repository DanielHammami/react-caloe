import React from 'react'
import Zoom from 'react-reveal/Zoom'

// Images
import Vaughan from '../../resources/images/vaughan_02_19.jpg'

const CaloeNfo = () => {
    return (
        <div className='bck_black caloenfo_image'>
            <h2>Actuellement</h2>
            <Zoom duration={500}>
                <img src={Vaughan} alt='Vaughan'/>
            </Zoom>
        </div>
    )
}

export default CaloeNfo