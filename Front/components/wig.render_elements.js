import React from 'react'

export default function wigRender({ content }) {
    function renderer(content) {
        return content
    }

    return (
        <>
            { renderer(content) }
        </>
    )
}