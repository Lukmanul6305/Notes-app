import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import LocaleContext from '../contexts/LocaleContext';

const SearchBar = ({ keyword, keywordChange }) => {
    const { locale } = useContext(LocaleContext);

    return (
        <div className="relative w-full mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FaSearch className="text-gray-400 dark:text-gray-500 text-lg transition-colors duration-300" />
            </div>
            <input
                type="text"
                placeholder={locale === 'id' ? 'Cari berdasarkan judul catatan...' : 'Search by note title...'}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
                className="block w-full p-4 pl-12 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none shadow-sm hover:shadow-md"
            />
        </div>
    )
}

export default SearchBar;