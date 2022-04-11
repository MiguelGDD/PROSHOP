import React from 'react'
import { NavLink } from 'react-router-dom'
import {Nav,Navbar,Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg"  collapseOnSelect>
            <Container>

            <NavLink to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
            </NavLink>
               
              
                
                
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <NavLink to='/cart'>
                        <Nav.Link href="/cart" > <i className='fas fa-shopping-cart'></i> CART</Nav.Link>
                        </NavLink>
                        
                        <NavLink to='login'>
                        <Nav.Link href="/L=login"><i className='fas fa-user'></i> User</Nav.Link>
                        </NavLink>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header