import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { wiki_name } from '../config'
import { Breadcrumb } from 'react-bootstrap'

export default function Home() {
  console.log(`Welcome to ${wiki_name}`)
  console.log(`WARNING: DON'T EXECUTE ANY COMMANDS HERE!`)
  console.log(`         WE CAN't GUARRANTEE THAT IT'S SAFE!`)
  return (
    <>
      <div className={styles.container}>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>

      </Breadcrumb>
        <a id="title">{wiki_name}에 오신것을 환영합니다.</a><br />
        <a>{'<'}설명란{'>'}</a>
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
