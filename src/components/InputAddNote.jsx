import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { addNote } from '../utils/local-data';

const InputAddNote = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // 2. Siapkan alat untuk pindah halaman
    const navigate = useNavigate();

    function onTitle(e) {
        setTitle(e.target.value);
    }
    function onBody(e) {
        setBody(e.target.value);
    }
    function onSubmitAddNote(e) {
        e.preventDefault();

        // 3. Perbaikan pemanggilan addNote menggunakan Object {}
        addNote({ title, body });

        // 4. Setelah disimpan, pulangkan user ke Beranda
        navigate('/home');
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={onSubmitAddNote}>
            <input
                type="text"
                placeholder='Nama catatan'
                className='px-4 py-2 font-semibold rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-all'
                value={title}
                onChange={onTitle}
                required // Tambahan supaya tidak bisa kirim form kosong
            />
            <textarea
                placeholder='Isi catatan'
                className='px-4 py-2 font-semibold min-h-[150px] rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-all'
                value={body}
                onChange={onBody}
                required
            />
            <button
                className='w-fit self-end px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm'
                type='submit'
            >
                Tambah
            </button>
        </form>
    )
}

export default InputAddNote;