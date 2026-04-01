import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const ButtonArchive = ({ id, archived, onArchive }) => {
    const { locale } = useContext(LocaleContext);

    return (
        <button
            className="py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 active:scale-95 transition-all"
            onClick={() => onArchive(id)}
        >
            {archived
                ? (locale === 'id' ? 'Pindah' : 'Move')
                : (locale === 'id' ? 'Arsip' : 'Archive')
            }
        </button>
    );
}

export default ButtonArchive;