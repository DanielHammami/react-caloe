import React from 'react'

// Images
import One from '../../resources/images/slide_one.jpg'

const Featured = () => {
    return (
        <div className='featured_container'>
            <div className='featured_image'>
                <img src={One} alt='caloé'/>
            </div>
            <div className='artist_name'>
                <div className='wrapper'>
                    Caloé
                </div>
            </div>
        </div>
    )
}

export default Featured