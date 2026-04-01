import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import NoteItemCreateAt from './NoteItemCreateAt';
import NoteItemArchived from './NoteItemArchived';
import ButtonArchive from './ButtonArchive';
import LocaleContext from '../contexts/LocaleContext';

const NoteItem = ({ id, title, body, createdAt, archived, onDelete, onArchive }) => {
    const navigate = useNavigate();
    const { locale } = useContext(LocaleContext);

    return (
        <div className="relative flex flex-col justify-between p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all min-h-[250px]">

            <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400 active:scale-95 transition-all"
                onClick={() => onDelete(id)}
            >
                ✕
            </button>

            <section className="flex flex-col gap-2 mt-2 mb-6 pr-8">
                <NoteItemTitle title={title} />
                <NoteItemCreateAt createdAt={createdAt} />
                <NoteItemBody body={body} />
                <NoteItemArchived archived={archived} />
            </section>

            <section className="grid grid-cols-2 gap-3 mt-auto">
                <ButtonArchive id={id} archived={archived} onArchive={onArchive} />
                <button
                    className="py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 active:scale-95 transition-all"
                    onClick={() => navigate(`/notes/${id}`)}
                >
                    {locale === 'id' ? 'Detail' : 'Details'}
                </button>
            </section>

        </div>
    )
}

export default NoteItem;