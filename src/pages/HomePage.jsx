import React, { useEffect, useState, useContext } from "react";
import NotesList from "../components/NotesList";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        const fetchNote = async () => {
            const { error, data } = await getActiveNotes();
            if (!error) setNotes(data);
            setIsLoading(!true);
        }
        fetchNote();
    }, [])

    async function onDeleteHandler(id) {
        await deleteNote(id);
        const { data } = await getActiveNotes();
        setNotes(data);
    }

    async function onArchiveHandler(id) {
        await archiveNote(id)
        const { data } = await getActiveNotes();
        setNotes(data);
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">

            <div className="mb-8 border-b-2 border-gray-100 dark:border-gray-700 pb-4 transition-colors duration-300">
                <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    {locale === 'id' ? 'Daftar Catatan Aktif' : 'Active Notes List'}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
                    {locale === 'id' ? 'Jangan sampai ada ide yang terlewatkan.' : "Don't let any ideas slip away."}
                </p>
            </div>

            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />

            {isLoading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse transition-colors duration-300">
                        {locale === 'id' ? 'Sabar Ya...' : 'Please Wait...'}
                    </p>
                </div>
            ) : (
                <>
                    <NotesList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
                </>
            )}

        </section>
    );
}

export default HomePage;