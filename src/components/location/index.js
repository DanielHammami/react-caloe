import React from 'react'

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.913182857406!2d2.3455723159734347!3d48.85986587928768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1ee12acfdb%3A0xad86df015f256d3d!2sLe+Baiser+Sal%C3%A9!5e0!3m2!1sfr!2sfr!4v1551975783318" 
                title='iframe'
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen>
            </iframe>

            <div className='location_tag'>
                <div>Adresse</div>
            </div>
        </div>
    )
}

export default Location