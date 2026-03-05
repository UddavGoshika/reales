import React from 'react';
import { useEditor } from '@craftjs/core';
import { Link } from 'react-router-dom';

export const Topbar = ({ pageTitle, pageId }: { pageTitle: string, pageId: string }) => {
    const { actions, query } = useEditor();

    const handleSave = () => {
        // Collect the serialized JSON state of the page
        const json = query.serialize();
        console.log("Saving page layout...", json);
        alert("Saved design state to console! (Would send to API)");
        // axios.put(`${API_BASE}/pages/${pageId}`, { content: json })
    };

    return (
        <header className="h-[60px] bg-gray-900 border-b border-gray-800 flex justify-between items-center px-6 text-white w-full sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <Link to="/admin/pages" className="text-gray-400 hover:text-white transition">← Back</Link>
                <h1 className="text-lg font-medium">Editing: <span className="text-[#C6A75E]">{pageTitle}</span></h1>
            </div>
            <div className="space-x-4">
                <button
                    onClick={handleSave}
                    className="bg-[#C6A75E] hover:bg-opacity-90 text-black px-4 py-1.5 rounded font-semibold text-sm transition"
                >
                    Save Changes
                </button>
            </div>
        </header>
    );
};
