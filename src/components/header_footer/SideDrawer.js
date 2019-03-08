import React from 'react'
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToElement('Accueil')}>
                    Accueil
                </ListItem>
                <ListItem button onClick={() => scrollToElement('bio')}>
                    Bio
                </ListItem>
                <ListItem button onClick={() => scrollToElement('Actuellement')}>
                    Actuellement
                </ListItem>
                <ListItem button onClick={() => scrollToElement('Adresse')}>
                    Adresse
                </ListItem>
                <ListItem button onClick={() => scrollToElement('Précédemment')}>
                    Concerts précédents
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer