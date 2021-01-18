import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('auth', auth);
    
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )

    return (
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo center" to="/">Logo</Link>
                <ul className="right">
                    <li><Link to="/users">USERS</Link></li>
                    <li><Link to="/admins">ADMINS</Link></li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);