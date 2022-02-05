import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { wiki_name } from '../config'
import { Breadcrumb } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/documents/home")
  },[])

  return (
    <>
      <a>
        Loading...  
      </a> 
    </>
)
}
