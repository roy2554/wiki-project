import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import { Breadcrumb } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Post() {
    const router = useRouter()
    const { id } = router.query

    const [documentName, setDocumentName] = useState('')
    const [documentDescription, setDocumentDescription] = useState([])

    if (id !== undefined && documentName === '') {
        axios.get(`/api/api/document/isexist/${id}`)
                .then(res => {
                    if (res.data[0]) {
                        setDocumentName(res.data[1].title)
                        setDocumentDescription(res.data[1].content)
                    } else if (!res.data[0]) {
                        router.push(`/documents/create/${id}`)
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                })
    }

    

    // useEffect(async () => {
    //     console.log("start")
    //     function getDocument() {
    //         axios.get(`/api/api/document/isexist/${id}`)
    //             .then(res => {
    //                 console.log(res.data)
    //                 setDocumentName(res.data[1].title)
    //                 setDocumentDescription(res.data[1].content)
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }

    //     if (id !== undefined) {
    //         getDocument()
    //     }
        
    // }, [documentName, documentDescription])
    //     if (id !== undefined) {
    //         const response = await axios.get(`/api/api/document/isexist/${id}`)
    //         console.log(response)
    //         if (response.data[0]) {
    //             setDocumentName(response.data[1].title)
    //             setDocumentDescription(response.data[1].content)
    //         }
    //     }
    //     console.log("end")
    // }, [documentName, documentDescription])
  
    return (
        <>
            <div className={`wiki-doc ${styles.container}`}>
            <br />
            <Breadcrumb>
                <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Documents</Breadcrumb.Item>
                <Breadcrumb.Item active>{id}</Breadcrumb.Item>
            </Breadcrumb>
                <div className="wiki-doc-top">
                    <div className="wiki-doc-title">
                        <a id="title">문서:{documentName}</a>
                    </div>
                    <div className="wiki-doc-menus">
                        <div className="wiki-doc-menu">
                            <div className="wiki-doc-menu-item">
                                <a href={`/documents/edit/${id}`}>편집</a>
                            </div>
                            {/* <div className="wiki-doc-menu-item">
                                <a>MENU_NAME</a>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                <br />
                {
                    documentDescription !== [] ? <a>{documentDescription.map((cont) => (<><a>{cont}</a><br /></>))}</a> : <></>
                }
                
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

            .wiki-doc-top {
                display: flex;
                justify-content: space-between;
            }

            .wiki-doc-menu {
                display: flex;
                border: 1px solid #ddd;
                border-radius: 5px;
            }

            .wiki-doc-menu-item {
                padding: 0.3rem;
            }

            .wiki-doc-menu-item:not(:last-child) {
                border-right: 1px solid #ddd;
            }

            .wiki-doc-menu-item:hover {
                background-color: #ddd;
                cursor: pointer;
            }
            `}
            </style>
        </>
    )
}