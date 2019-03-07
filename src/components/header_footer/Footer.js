import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_righteous footer_logo_caloe'>Caloé</div>
                <div className='footer_copyright'>
                    Caloé 2019. Tous droits réservés
                </div>
            </Fade>
        </footer>
    )
}

export default Footer