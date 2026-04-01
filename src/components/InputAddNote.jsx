import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import useInput from '../Hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';

const InputAddNote = () => {
    const [title, onTitle] = useInput('');
    const [body, onBody] = useInput('');
    const navigate = useNavigate();
    const { locale } = useContext(LocaleContext);

    async function onSubmitAddNote(e) {
        e.preventDefault();
        await addNote({ title, body });
        navigate('/home');
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmitAddNote}>
            <input
                type="text"
                placeholder={locale === 'id' ? 'Judul catatan...' : 'Note title...'}
                className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm"
                value={title}
                onChange={onTitle}
                required
            />
            <textarea
                placeholder={locale === 'id' ? 'Tuliskan isi catatan di sini...' : 'Write your note content here...'}
                className="w-full px-4 py-3 min-h-[200px] text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-500 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all outline-none shadow-sm resize-y"
                value={body}
                onChange={onBody}
                required
            />
            <button
                className="w-fit self-end px-8 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-md"
                type="submit"
            >
                {locale === 'id' ? 'Tambah Catatan' : 'Add Note'}
            </button>
        </form>
    );
}

export default InputAddNote;