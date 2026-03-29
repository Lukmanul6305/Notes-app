import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ logout, username }) => {
    return (
        <nav className='flex w-full items-center justify-between px-6 py-4 bg-white shadow-md text-gray-700'>

            <h1 className='text-2xl font-extrabold text-blue-600'>
                Aplikasi Catatan
            </h1>

            <div className='flex items-center gap-4'>
                <ul className='flex gap-2'>
                    <li>
                        <Link to="/home" className='block px-4 py-2 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:scale-95 transition-all duration-150'>
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" className='block px-4 py-2 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:scale-95 transition-all duration-150'>
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive" className='block px-4 py-2 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:scale-95 transition-all duration-150'>
                            Archive
                        </Link>
                    </li>
                </ul>

                <div className="w-px h-6 bg-gray-300"></div>

                <button
                    onClick={logout}
                    className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-sm'
                >
                    Logout ({username?.name})
                </button>
            </div>

        </nav>
    );
}

export default Navigation;