import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import NoteItemCreateAt from './NoteItemCreateAt';
import NoteItemArchived from './NoteItemArchived';

const NoteItem = ({ title, body, createdAt, archived }) => {
    return (
        <div className='relative flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all min-h-250px'>
            
            <button className='absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 active:scale-95 transition-all'>
                ✕
            </button>
            
            <section className="flex flex-col gap-2 mt-2 mb-6 pr-8">
                <NoteItemTitle title={title} />
                <NoteItemCreateAt createdAt={createdAt} />
                <NoteItemBody body={body} />
                <NoteItemArchived archived={archived} />
            </section>
            
            <section className="grid grid-cols-2 gap-3 mt-auto">
                <button className="py-2 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 active:scale-95 transition-all">
                    Arsip
                </button>
                <button className="py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
                    Detail
                </button>
            </section>
            
        </div>
    )
}

export default NoteItem;