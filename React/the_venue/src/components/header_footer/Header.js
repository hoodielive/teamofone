import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {
    state = {
        drawerOpen: false, 
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <div>
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor:'#2f2f2f',
                        boxShadow: 'none',
                        padding: '10px 10px'
                    }}
                >
                <ToolBar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div> 
                        <div className="header_logo_title">Actress Events</div> 
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> console.log('open')} 
                    >
                        <MenuIcon/>
                    </IconButton>
                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                    />
                </ToolBar>
                </AppBar>
            </div>
        );
    }
}

export default Header;