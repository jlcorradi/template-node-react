import React from 'react';
import { IndexLink, Link } from 'react-router';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

export default class Menu extends React.Component {

    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLink to="/">Brand</IndexLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} active={true} href="/#">Home</NavItem>
                        <Link to="/about">About</Link>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );        
    }
}
