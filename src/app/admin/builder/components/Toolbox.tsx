import React from 'react';
import { useEditor } from '@craftjs/core';
import { HeroSection } from './user/HeroSection';

export const Toolbox = () => {
    const { connectors } = useEditor();

    return (
        <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4 text-white">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Components</h3>
            <div className="space-y-3">
                {/* Toolbox Item */}
                <div
                    ref={(ref) => connectors.create(ref, <HeroSection />)}
                    className="bg-gray-800 border border-gray-700 p-4 rounded cursor-move hover:border-[#C6A75E] transition"
                >
                    <div className="font-medium text-sm">Hero Section</div>
                    <p className="text-xs text-gray-400 mt-1">Add a hero banner with text.</p>
                </div>

                {/* Can add more elements here like Features, Testimonials, etc. */}
                <div className="bg-gray-800 border border-gray-700 p-4 rounded opacity-50 cursor-not-allowed">
                    <div className="font-medium text-sm">Text Block</div>
                    <p className="text-xs text-gray-400 mt-1">Coming Soon</p>
                </div>
            </div>
        </aside>
    );
};
