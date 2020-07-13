import React from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Alkocity 0.0.1</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Профиль</Nav.Link>
            <Nav.Link href="#link">О нас</Nav.Link>
            <NavDropdown title="Ещё" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Найти собутыльника</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">История поиска</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Найти заявки по критериям</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Выход</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
