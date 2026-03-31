import React, { useEffect, useState } from 'react';
import { deleteNote, getArchivedNotes, unarchiveNote } from '../utils/network-data';
import NotesList from '../components/NotesList';

const ArchiveNotePage = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            const { error, data } = await getArchivedNotes();
            if (!error) setNotes(data || []);
            setIsLoading(false)
        }
        fetchNotes();
    }, [])

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
            <div className="mb-8 border-b-2 border-gray-100 pb-4">
                <h2 className="text-3xl font-extrabold text-gray-800">
                    Daftar Catatan arsip
                </h2>
                <p className="text-gray-500 mt-2">
                    kumpulan catatan lama anda.
                </p>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center min-h-200px">
                    <p className="text-gray-500 font-medium animate-pulse">Sabar Ya...</p>
                </div>
            ) : (
                <NotesList notes={notes} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} />
            )}
        </section>
    )
}

export default ArchiveNotePage;