import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostUserForm from '../pages/PostUserForm';
import '../App.css';
import UpdateUser from '../pages/UpdateUser';


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div className='navbar'>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
        
                                <Nav.Link as={Link} to="groups/">Groups</Nav.Link>
                                <Nav.Link as={Link} to="create-user/">Add User</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/create">
                            <PostUserForm />
                        </Route>
                        <Route path="/update">
                            <UpdateUser />
                        </Route>
                        <Route path="/">
                            
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}