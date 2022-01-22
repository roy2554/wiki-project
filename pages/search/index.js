import styles from '../../styles/Home.module.css'
import { Form, Button } from 'react-bootstrap'
import { wiki_name } from '../../config'
import { useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default function Search() {
    const [search, setSearch] = useState('')
    const searchEdited = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <>
            <div className={`search ${styles.container}`}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Search</Breadcrumb.Item>
                </Breadcrumb>
                <a id="title">검색</a><br />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="Search Something" onChange={searchEdited} />
                        <Form.Text className="text-muted">
                            {wiki_name}의 데이터배이스에서 검색합니다.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" href={`/search/${search}`}>
                        Search
                    </Button>
                </Form>
            </div>
            <style jsx>
            {`
            a {
                text-decoration: none;
                color: gray;
            }

            #title {
                font-size: 3rem;
                font-weight: bold;
                text-decoration: none;
                color: #000;
            }
            `}
            </style>
        </>
    )
}