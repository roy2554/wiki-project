import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'react-bootstrap'

export default function Search() {
    const router = useRouter()
    const { name } = router.query

    return (
        <>
            <div className={`search ${styles.container}`}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href='/search'>Search</Breadcrumb.Item>
                    <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                </Breadcrumb>
                <a id="title">검색:{name}</a>
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