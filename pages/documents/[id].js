import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'react-bootstrap'

export default function Post() {
    const router = useRouter()
    const { id } = router.query
  
    return (
        <>
            <div className={`wiki-doc ${styles.container}`}>
            <br />
            <Breadcrumb>
                <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Documents</Breadcrumb.Item>
                <Breadcrumb.Item active>{id}</Breadcrumb.Item>
            </Breadcrumb>
                <a id="title">문서:{id}</a><br />
                <a>{'<'}내용{'>'}</a>
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