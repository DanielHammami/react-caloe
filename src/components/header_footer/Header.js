import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar className='appbar'>
                    <Toolbar>
                        <div className='header_logo'>
                            <div className='font_righteous header_logo_caloe'>Concerts</div>
                            <div className='header_logo_title'>Jazz</div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}