import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

const DetailNotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { locale } = useContext(LocaleContext);

    const [note, setNote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            const { error, data } = await getNote(id);
            if (!error) {
                setNote(data);
            }
            setIsLoading(false);
        };
        fetchDetail();
    }, [id]);

    const formatTanggalDanJam = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(locale === 'id' ? 'id-ID' : 'en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).replace('.', ':');
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse transition-colors duration-300">
                    {locale === 'id' ? 'Mencari catatan...' : 'Searching for note...'}
                </p>
            </div>
        );
    }

    if (!note) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
                <p className="text-xl text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
                    {locale === 'id' ? 'Catatan tidak ditemukan 😢' : 'Note not found 😢'}
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors duration-300"
                >
                    {locale === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
                </button>
            </div>
        );
    }

    return (
        <section className="p-6 md:p-10 max-w-4xl mx-auto min-h-screen">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 font-medium"
            >
                ← {locale === 'id' ? 'Kembali' : 'Back'}
            </button>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 shadow-sm transition-colors duration-300">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 leading-tight transition-colors duration-300">
                    {note.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 font-medium border-b border-gray-100 dark:border-gray-700 pb-6 transition-colors duration-300">
                    {formatTanggalDanJam(note.createdAt)}
                </p>

                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-wrap transition-colors duration-300">
                    {note.body}
                </div>
            </div>
        </section>
    );
};

export default DetailNotePage;