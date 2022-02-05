import styles from '../styles/Home.module.css'
import { StrictMode, useState } from 'react'

import A from '../components/wig.render_elements'

export default function syntaxTest() {
    const [content, setContent] = useState([])

    const contentChanged = (e) => {
        setContent(e.target.value.split(/\r?\n/))
        console.log(content)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(`h1 ${/\[= ([\D\d]+) =\]/.exec(content)[1]}`)
        // console.log(`h2 ${/\[== ([\D\d]+) ==\]/.exec(content)[1]}`)
        // console.log(`h3 ${/\[=== ([\D\d]+) ===\]/.exec(content)[1]}`)
    }

    return (
        <>
            <div className={`syntax-test ${styles.container}`}>
                <textarea id="syntax-test" onChange={contentChanged} rows="10" cols="100"></textarea>
                <input type="button" value="convert" onClick={handleSubmit} />
                <div className='result'>
                    {
                        content.map((line) => <>{<A content={line} />}<br /></>)
                    }
                </div>
            </div>
        </>
    )
}