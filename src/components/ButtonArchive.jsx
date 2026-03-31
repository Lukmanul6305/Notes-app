import React from 'react';

const ButtonArchive = ({id, archived, onArchive}) => {
    return (
        <button 
            className="py-2 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 active:scale-95 transition-all"
            onClick={()=> onArchive(id)}
        >
            {archived ? ("Pindah") : ("arsip")}
        </button>
    )
}

export default ButtonArchive;