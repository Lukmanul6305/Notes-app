import React, { useState } from "react";
import NotesList from "../components/NotesList";
import { getAllNotes } from "../utils/local-data"; // Pastikan path-nya benar

const HomePage = () => {
    // Memanggil data awal menggunakan lazy initialization
    const [notes, setNotes] = useState(() => getAllNotes());
    
    return (
        <section className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
        
            <div className="mb-8 border-b-2 border-gray-100 pb-4">
                <h2 className="text-3xl font-extrabold text-gray-800">
                    Daftar Catatan Aktif
                </h2>
                <p className="text-gray-500 mt-2">
                    Jangan sampai ada ide yang terlewatkan.
                </p>
            </div>
            
            <NotesList notes={notes} />
            
        </section>
    );
}

export default HomePage;