import styles from '../../../styles/Home.module.css'

export default function editDocument() {
    return (
        <>
            <div className={`edit-document ${styles.container}`}>
                <a id="title">문서:수정</a><br />
                <a>문서를 수정합니다.</a><br />
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