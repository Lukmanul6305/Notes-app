import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/network-data';

const DetailNotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
        return date.toLocaleString('id-ID', {
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
                <p className="text-gray-500 font-medium animate-pulse">Mencari catatan...</p>
            </div>
        );
    }

    if (!note) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
                <p className="text-xl text-gray-500 font-medium">Catatan tidak ditemukan 😢</p>
                <button
                    onClick={() => navigate('/')}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Kembali ke Beranda
                </button>
            </div>
        );
    }

    return (
        <section className="p-6 md:p-10 max-w-4xl mx-auto min-h-screen">
            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
            >
                ← Kembali
            </button>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                    {note.title}
                </h2>

                <p className="text-sm text-gray-500 mb-10 font-medium border-b border-gray-100 pb-6">
                    {formatTanggalDanJam(note.createdAt)}
                </p>

                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                    {note.body}
                </div>
            </div>
        </section>
    );
};

export default DetailNotePage;