import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, InputGroup } from 'react-bootstrap'
import { wiki_name } from '../config'

export default function NavBar() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const searchEdited = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const toSearch = () => {
        router.push(`/search/${search}?`)
        setSearch('')
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            toSearch()
        }
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

                </Nav>
                <Form className="d-flex">
                    <input
                    placeholder="Search"
                    onChange={searchEdited}
                    onKeyUp={onKeyPress}
                    />
                    <Button variant="outline-success" onClick={toSearch}>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 