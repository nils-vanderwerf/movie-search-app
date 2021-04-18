import { render } from '@testing-library/react';
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return(
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/favourites'>Favourites</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        )
    }
}

export default Nav;