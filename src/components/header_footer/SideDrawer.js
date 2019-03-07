import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => console.log('Accueil')}>
                    Accueil
                </ListItem>
                <ListItem button onClick={() => console.log('En ce moment')}>
                    En ce moment
                </ListItem>
                <ListItem button onClick={() => console.log('Bio')}>
                    Bio
                </ListItem>
                <ListItem button onClick={() => console.log('Concerts précédents')}>
                    Concerts précédents
                </ListItem>
                <ListItem button onClick={() => console.log('Adresse')}>
                    Adresse
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer