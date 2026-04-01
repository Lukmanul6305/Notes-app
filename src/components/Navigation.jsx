import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaArchive, FaSignOutAlt, FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

const Navigation = ({ logout, username }) => {
    const { locale, toggleLocale } = useContext(LocaleContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className='flex w-full items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-200 transition-colors duration-300'>

            <h1 className='text-2xl font-extrabold text-blue-600 dark:text-blue-400'>
                {locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}
            </h1>

            <div className='flex items-center gap-4'>
                <ul className='flex items-center gap-2'>
                    <li>
                        <Link to="/home" title={locale === 'id' ? 'Beranda' : 'Home'} className='block p-3 text-gray-500 dark:text-gray-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all duration-150'>
                            <FaHome size="24px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" title={locale === 'id' ? 'Tambah Catatan' : 'Add Note'} className='block p-3 text-gray-500 dark:text-gray-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all duration-150'>
                            <FaPlus size="24px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive" title={locale === 'id' ? 'Arsip' : 'Archive'} className='block p-3 text-gray-500 dark:text-gray-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all duration-150'>
                            <FaArchive size="24px" />
                        </Link>
                    </li>
                </ul>

                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

                <div className='flex items-center gap-1'>
                    <button
                        onClick={toggleLocale}
                        title={locale === 'id' ? 'Ubah ke Bahasa Inggris' : 'Change to Indonesian'}
                        className='flex items-center gap-2 p-3 font-bold text-gray-500 dark:text-gray-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all duration-150'
                    >
                        <FaGlobe size="20px" />
                        <span className="text-sm uppercase">{locale}</span>
                    </button>

                    <button
                        onClick={toggleTheme}
                        title={theme === 'light' ? 'Mode Gelap' : 'Mode Terang'}
                        className='block p-3 text-gray-500 dark:text-gray-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 transition-all duration-150'
                    >
                        {theme === 'light' ? <FaMoon size="20px" /> : <FaSun size="20px" />}
                    </button>
                </div>

                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

                <button
                    onClick={logout}
                    title={locale === 'id' ? 'Keluar' : 'Logout'}
                    className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-sm'
                >
                    <FaSignOutAlt size="20px" />
                    <span>{locale === 'id' ? 'Keluar' : 'Logout'} ({username?.name})</span>
                </button>
            </div>

        </nav>
    );
}

export default Navigation;