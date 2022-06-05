import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Auth from '../../utils/auth';

const Footer = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div>
            {Auth.loggedIn() ? (
            <>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#top">Back to Top</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/contact">Contact Us!</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={logout}>Logout</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/search">Search</Nav.Link>
                    </Nav.Item>
                </Nav>
                </>
            ) : (
                <>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#top">Back to Top</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/contact">Contact Us!</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={logout}>Log-in</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/search">Sign-up</Nav.Link>
                    </Nav.Item>
                </Nav>
                </>
            )}
        </div>
    )
}


export default Footer;
