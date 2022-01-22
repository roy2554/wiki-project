import { wiki_name } from '../config'

export default function Footer() {
    return (
        <>
            <div className="FOOTER">
                <hr />
                <a>{new Date().getFullYear()} {wiki_name}</a><br />
                <a id="copythings">made with &hearts; by roy2554 and contributors</a>
            </div>
            <style jsx>
                {`
                    .FOOTER {
                        text-align: center;
                        font-size: 0.8rem;
                    }

                    a {
                        color: gray;
                        text-decoration: none;
                    }
                `}
            </style>
        </>
    )
}