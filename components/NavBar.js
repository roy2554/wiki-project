import { useState } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import { wiki_name } from '../config'

export default function NavBar() {
    const [search, setSearch] = useState('')
    const searchEdited = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">{wiki_name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {/* <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={searchEdited}
                    />
                    <Button variant="outline-success" href={`/search/${search}`}>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}