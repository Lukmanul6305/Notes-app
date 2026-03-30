import React from 'react';
import InputAddNote from '../components/InputAddNote';

const AddNotePage = () => {
    return (
        <div className='p-6 md:p-10 max-w-7xl mx-auto min-h-screen'>
            <div className="mb-8 border-b-2 border-gray-100 pb-4">
                <h2 className="text-3xl font-extrabold text-gray-800">
                    Tambah Catatan
                </h2>
                <p className="text-gray-500 mt-2">
                    tambah catatan anda.
                </p>
            </div>
            <InputAddNote />
        </div>
    )
}
export default AddNotePage;