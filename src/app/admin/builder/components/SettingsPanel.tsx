import React from 'react';
import { useEditor } from '@craftjs/core';

export const SettingsPanel = () => {
    const { selected } = useEditor((state) => {
        const currentNodeId = state.events.selected.keys().next().value;
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: state.nodes[currentNodeId].rules.canDrag(),
            };
        }

        return { selected };
    });

    return (
        <aside className="w-80 bg-gray-900 border-l border-gray-800 p-4 text-white overflow-y-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Settings</h3>

            {selected ? (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded border border-blue-700">
                            {selected.name}
                        </span>
                    </div>

                    <div>
                        {selected.settings ? React.createElement(selected.settings) : (
                            <p className="text-gray-500 text-sm">No settings available for this component.</p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-gray-500 text-sm italic">
                    Select a component to view its properties.
                </div>
            )}
        </aside>
    );
};
