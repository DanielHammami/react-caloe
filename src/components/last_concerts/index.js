import React from 'react'
import Zoom from 'react-reveal/Zoom'

// Images
import Vian from '../../resources/images/vian_01_19.jpg'
import Salvador from '../../resources/images/salvador_12_18.jpg'
import Jobim from '../../resources/images/jobim_11_18.jpg'
import Simone from '../../resources/images/simone_10_18.jpg'

export default class LastConcerts extends React.Component {
    render() {
        return (
            <div>
                <div className='bck_black lastconcerts_image'>
                    <h2>Précédemment</h2>
                    <Zoom duration={500} delay={500}>
                        <img src={Vian} alt='Vian'/>
                    </Zoom>
                    <Zoom duration={500} delay={1000}>
                        <img src={Salvador} alt='Salvador'/>
                    </Zoom>
                    <Zoom duration={500} delay={1500}>
                        <img src={Jobim} alt='Jobim'/>
                    </Zoom>
                    <Zoom duration={500} delay={2000}>
                        <img src={Simone} alt='Simone'/>
                    </Zoom>
                </div>
            </div>
        )
    }
}
