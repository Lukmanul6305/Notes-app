import React, { useContext } from 'react';
import NoteItem from './NoteItem';
import LocaleContext from '../contexts/LocaleContext';

const NotesList = ({ notes = [], onDelete, onArchive }) => {
    const { locale } = useContext(LocaleContext)
    const notesLength = notes.length === 0

    return !notes || notesLength ? (
        <div className="flex justify-center items-center min-h-200px text-gray-500 font-medium">
            {locale === 'id' ? "Tidak ada catatan." : "No records."}
        </div>) : (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6'>
            {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                    />
                ))
            }
        </div>)
}

export default NotesList;