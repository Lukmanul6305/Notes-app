import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <div className="relative w-full mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FaSearch className="text-gray-400 text-lg" />
            </div>
            <input
                type="text"
                placeholder="Cari berdasarkan judul catatan..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
                className="block w-full p-4 pl-12 text-gray-900 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none shadow-sm hover:shadow-md"
            />
        </div>
    )
}

export default SearchBar;