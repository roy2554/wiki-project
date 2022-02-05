import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import axios from "axios"
import { Breadcrumb } from 'react-bootstrap'

export default function Login() {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [registerUserName, setRegisterUserName] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const router = useRouter()

    const [Account_Already_Exists, setAccount_Already_Exists] = useState(false)

    useEffect(async () => {
        const response = await axios.get("/api/auth/user")
        console.log(response)
        if (response.data[0]) {
            setUserLoggedIn(true)
        }
    }, [userLoggedIn])

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUserName(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        } else if (e.target.name === "register-username") {
            setRegisterUserName(e.target.value)
        } else if (e.target.name === "register-password") {
            setRegisterPassword(e.target.value)
        }
        console.log(`username: ${userName}, password: ${password}`)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.post("/api/auth/login", {
            username: userName,
            password: password
        }).then(async (res) => {
            if (res.data === 'User logged in') {
                await router.reload()
                await router.push("/")
            }
        })
        setUserName("")
        setPassword("")
    }

    const handleRegisterSubmit = async(e) => {
        e.preventDefault()
        await axios.post("/api/auth/register", {
            username: registerUserName,
            password: registerPassword
        }).then((res) => {
            if(res.data === "User Already Exists") {
                setAccount_Already_Exists(true)
            }
        })
        setRegisterUserName("")
        setRegisterPassword("")
    }

    return (
        <>
            <div className={`login ${styles.container}`}>
                <br />
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Login</Breadcrumb.Item>
                </Breadcrumb>
                <a id="title">Login</a><br />
                {
                    userLoggedIn ? <>
                        <a>You're Already Logged In</a>
                    </> : <>
                        <a>Login Page</a><br />
                        <div className="login-stuff">
                            <input name="username" value={userName} type="text" placeholder="Username" onChange={handleChange} />
                            <input name="password" value={password} type="password" placeholder="Password" onChange={handleChange} />
                            <input type="submit" value="Login" onClick={handleSubmit} />
                        </div>

                        <a>No Account?</a><br />
                        <div className="register-stuff">
                            {
                                Account_Already_Exists ? <>
                                    <a>*Account Already Exists*</a><br />
                                </> : <></>
                            }
                            <input name="register-username" value={registerUserName} type="text" placeholder="Username" onChange={handleChange} />
                            <input name="register-password" value={registerPassword} type="password" placeholder="Password" onChange={handleChange} />
                            <input type="submit" value="Register" onClick={handleRegisterSubmit} />
                        </div>
                    </>
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
            `}
            </style>
        </>
    )
}