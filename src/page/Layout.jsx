import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <Link to=".">Home</Link> | <Link to="login">Login</Link> | <Link to="register">Register</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
