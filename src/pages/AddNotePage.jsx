import React, { useContext } from 'react';
import InputAddNote from '../components/InputAddNote';
import LocaleContext from '../contexts/LocaleContext';

const AddNotePage = () => {
    const { locale } = useContext(LocaleContext);

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
            <div className="mb-8 border-b-2 border-gray-100 dark:border-gray-700 pb-4 transition-colors duration-300">
                <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    {locale === 'id' ? 'Tambah Catatan' : 'Create Note'}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
                    {locale === 'id'
                        ? 'Tuliskan ide dan pemikiran baru Anda di sini.'
                        : 'Write down your new ideas and thoughts here.'}
                </p>
            </div>
            <InputAddNote />
        </div>
    );
}

export default AddNotePage;