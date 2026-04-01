import React, { useContext, useEffect, useState } from 'react';
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/network-data';
import NotesList from '../components/NotesList';
import LocaleContext from '../contexts/LocaleContext';

const ArchiveNotePage = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        const fetchNotes = async () => {
            const { error, data } = await getArchivedNotes();
            if (!error) setNotes(data || []);
            setIsLoading(false);
        }
        fetchNotes();
    }, []);

    async function onUnarchiveHandler(id) {
        await unarchiveNote(id);
        const { data } = await getArchivedNotes();
        setNotes(data);
    }

    async function onDeleteHandler(id) {
        await deleteNote(id);
        const { data } = await getArchivedNotes();
        setNotes(data);
    }

    return (
        <section className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
            <div className="mb-8 border-b-2 border-gray-100 dark:border-gray-700 pb-4 transition-colors duration-300">
                <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    {locale === 'id' ? 'Daftar Catatan Arsip' : 'Archived Notes List'}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
                    {locale === 'id' ? 'Kumpulan catatan lama Anda.' : 'Your collection of old notes.'}
                </p>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse transition-colors duration-300">
                        {locale === 'id' ? 'Sabar Ya...' : 'Please Wait...'}
                    </p>
                </div>
            ) : (
                <NotesList notes={notes} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} />
            )}
        </section>
    );
}

export default ArchiveNotePage;