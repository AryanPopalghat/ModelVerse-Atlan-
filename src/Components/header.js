import React from 'react';
import { Link } from 'react-router-dom';
const headerStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    borderBottom: '3px solid #0779e4'

};
const tagline = {
    textAlign: 'center',
    paddingBottom: '50x',
    marginBottom:'0.5%',
    marginTop:'-0.5%'
}
const navStyles = {
    listStyle: 'none',
    textAlign: 'center',
    margin: '0',
    padding: '0'
};

const navItemStyles = {
    display: 'inline',
    margin: '0 20px'
};

const navLinkStyles = {
    color: 'white',
    textDecoration: 'none'
};

const Header = () => {
    return (
        <header style={headerStyles}>
            <h1>AI Model Explorer</h1>
            <div style={tagline}>
                <h5>Unveiling the Future of Intelligent Systems</h5>
            </div>

            <nav>
                <ul style={navStyles}>
                    <li style={navItemStyles}><Link to="/" style={navLinkStyles}>Home</Link></li>
                    <li style={navItemStyles}><Link to="/explore" style={navLinkStyles}>Explore</Link></li>
                    <li style={navItemStyles}><Link to="/featured" style={navLinkStyles}>Featured</Link></li>
                    <li style={navItemStyles}><Link to="/form" style={navLinkStyles}>Add Your Model</Link></li>
                    <li style={navItemStyles}><Link to="/usermodel" style={navLinkStyles}>Our Users' Models </Link></li>
                    <li style={navItemStyles}><a href="#details" style={navLinkStyles}>Details</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

