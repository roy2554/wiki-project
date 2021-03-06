import styles from '../../../styles/Home.module.css'
import { useState, useEffect } from "react"
import { wiki_name } from '../../../config'

import { useRouter } from 'next/router'

import axios from 'axios'

export default function CreateNewDocument() {
    const router = useRouter()
    const { id } = router.query

    console.log(id)

    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")

    const [clientIP, setClientIP] = useState("")

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")

    const [copyAgreed, setCopyAgreed] = useState(false)

    const [docId, setDocId] = useState(id)

    useEffect(async () => {
        

        const response = await axios.get("/api/auth/user")
        console.log(response)
        if (response.data[0]) {
            setUserLoggedIn(true)
            setUserName(response.data[1].username)
        }
       
        const response2 = await axios.get("/api/userip")
        setClientIP(response2.data.ip)
       
        if (id !== undefined) {
            const response3 = await axios.get(`/api/api/document/isexist/${id}`)
            console.log(response3)
            if (response3.data[0]) {
                router.push(`/documents/${id}`)
            }
        }

    }, [userLoggedIn, userName, clientIP])

    const onChange_title = (e) => {
        setTitle(e.target.value)
    }

    const onChange_description = (e) => {
        setDescription(e.target.value.split(/\r?\n/))
        console.log(description)
    }

    const onChange_copyAgreed = (e) => {
        if (e.target.checked) {
            setCopyAgreed(true)
        } else {
            setCopyAgreed(false)
        }
    }

    const createDocument = async () => {
        //
        const res = await axios.post('/api/api/document/create', {
            document_id: id,
            title: title,
            content: description,
            authors: [userName === "" ? clientIP : userName],
        }).then(res => {console.log(res)})
    }

    return (
        <>
            <div className={`create-document ${styles.container}`}>
                <a id="title">??????:??????</a><br />
                
                <a>??? ????????? ???????????????.</a><br />
                <input id="doc-title" type="text" placeholder="??????" onChange={onChange_title} /><br />
                <textarea id="doc-description" placeholder="??????" onChange={onChange_description}></textarea>

                <div className="create-document-bottom">
                    <div className="create-document-bottom-left">
                        <input type="checkbox" id="doc-private" onChange={onChange_copyAgreed} />&nbsp;
                        <a>??? ????????? ????????? ????????? ????????? ?????? ????????? CC-BY-NC-SA 2.0 KR?????? ???????????? {wiki_name}??? ?????????????????? ????????????????????? ???????????????.</a>
                        {
                            userLoggedIn ? <>

                            </> : <>
                                <br />
                                <a id="warn"><strong>??????!</strong>&nbsp;?????? ???????????? ???????????? ????????????. ???????????? ?????? ?????? ????????? ???????????? ?????? ????????? IP ({clientIP})??? ?????? ????????? ????????? ???????????????.</a>
                            </>
                        }
                    </div>
                    <div className="create-document-bottom-right">
                        {
                            copyAgreed ? <>
                                <input type="submit" value="??????" onClick={createDocument} />
                            </> : <>
                                <input type="submit" value="??????" disabled />
                            </>
                        }
                    </div>
                    
                </div>
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

            #doc-title {
                width: 100%;
            }

            #doc-description {
                width: 100%;
                height: 30em;
            }

            #doc-title:focus, #doc-description:focus {
                outline: none;
            } 

            .create-document-bottom {
                display: flex;
                justify-content: space-between;
            }

            #warn {
                color: red;
            }
            `}
            </style>
        </>
        
    )
}