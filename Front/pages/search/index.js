import styles from '../../styles/Home.module.css'
import { wiki_name } from '../../config'
import { useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const searchEdited = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const toSearch = () => {
        router.push(`/search/${search}`)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            router.push(`/search/${search}`)
        }
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
                <div className="search-area">
                    <input id="search-desc" type="text" placeholder='Search' value={search} onChange={searchEdited} onKeyPress={onKeyPress} /><br /><br />
                    <div className='under-search'>
                        <div className='under-search-left'>
                        <a>검색할 내용을 입력하고 검색 버튼을 누르세요.</a>
                        </div>
                        <div className='under-search-right'>
                            <input type="submit" value='Search' onClick={toSearch} />
                        </div>
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
            
            #search-desc {
                width: 100%;
            }

            .under-search {
                display: flex;
                justify-content: space-between;
            }

            input {
                height: 2em;
            }
            `}
            </style>
        </>
    )
}