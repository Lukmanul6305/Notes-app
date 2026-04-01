import React from 'react'

const NoteItemBody = ({ body }) => {
    return (
        <p className='text-gray-800 dark:text-gray-100 truncate transition-colors duration-300' >{body}</p>
    )
}

export default NoteItemBody;