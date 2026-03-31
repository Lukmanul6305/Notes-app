import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaArchive, FaSignOutAlt } from "react-icons/fa";

const Navigation = ({ logout, username }) => {
    return (
        <nav className='flex w-full items-center justify-between px-6 py-4 bg-white shadow-md text-gray-700'>

            <h1 className='text-2xl font-extrabold text-blue-600'>
                Aplikasi Catatan
            </h1>

            <div className='flex items-center gap-4'>
                <ul className='flex items-center gap-2'>
                    <li>
                        {/* Atribut title berguna untuk memunculkan tooltip teks saat di-hover */}
                        <Link to="/home" title="Beranda" className='block p-3 text-gray-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:scale-95 transition-all duration-150'>
                            <FaHome size="24px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" title="Tambah Catatan" className='block p-3 text-gray-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:scale-95 transition-all duration-150'>
                            <FaPlus size="24px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive" title="Arsip" className='block p-3 text-gray-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:scale-95 transition-all duration-150'>
                            <FaArchive size="24px" />
                        </Link>
                    </li>
                </ul>

                <div className="w-px h-6 bg-gray-300"></div>

                <button
                    onClick={logout}
                    title="Keluar"
                    className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-sm'
                >
                    <FaSignOutAlt size="20px" />
                    <span>Logout ({username?.name})</span>
                </button>
            </div>

        </nav>
    );
}

export default Navigation;