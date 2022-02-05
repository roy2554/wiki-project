import { wiki_name } from "../config"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

import axios from "axios"

export default function NavBar() {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [search, setSearch] = useState("")
    const router = useRouter()

    useEffect(async () => {
        const response = await axios.get("/api/auth/user")
        console.log(response)
        if (response.data[0]) {
            setUserLoggedIn(true)
        }
    }, [userLoggedIn])

    const searchEdited = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const toSearch = () => {
        router.push(`/search/${search}`)
        setSearch("")
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            toSearch()
        }
    }

    const toLogin = () => {
        router.push("/login")
    }

    const toLogout = () => {
        router.push("/api/auth/logout")
    }

    return (
        <>
            <div className="NAVBAR">
                <div className="left">
                    <a id="title" href="/">{wiki_name}</a>
                    <a>menu 1</a>
                    <a>menu 2</a>
                    <a>menu 3</a>
                </div>
                <div className="right">
                    <input type="text" placeholder="search" value={search} onChange={searchEdited} onKeyPress={onKeyPress} />
                    &nbsp;
                    <input type="submit" value={"search"} onClick={toSearch} />
                    &nbsp;
                    {
                        userLoggedIn ? <>
                            <input type="submit" value={"logout"} onClick={toLogout} />
                        </> : <>
                            <input type="submit" value={"login"} onClick={toLogin} />   
                        </>
                    }
                    
                </div>
                
            </div>
            <style jsx>
                {`
                    .NAVBAR {
                        padding: 1rem;
                        display: flex;
                        background-color: #0f0;
                        justify-content: space-between;
                    }

                    .right {
                        
                    }

                    .left {
                        text-align: center;
                    }

                    .left a {
                        font-size: 1rem;
                        margin: 0.5rem;
                    }

                    a {
                        text-decoration: none;
                        color: gray;
                    }

                    input {
                        border: none;
                        background-color: #fff;
                        color: gray;
                    }

                    input:focus {
                        outline: none;
                    }

                    #title {
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    )
}