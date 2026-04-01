import React from 'react';
import ThemeContext from '../contexts/ThemeContext';

const NoteItemTitle = ({ title }) => {
    return (
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate transition-colors duration-300">
            {title}
        </h1>
    );
}

export default NoteItemTitle;