import React from 'react';

const NoteItemCreateAt = ({ createdAt }) => {

    const formatTanggalDanJam = (dateString) => {
        const date = new Date(dateString);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleString('id-ID', options).replace('.', ':');
    };

    return (
        <p className="text-sm text-gray-500 mb-2 font-medium">
            {formatTanggalDanJam(createdAt)}
        </p>
    );
};

export default NoteItemCreateAt;