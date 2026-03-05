import React from 'react';
import { useNode, Element } from '@craftjs/core';

export const HeroSection = ({ title, subtitle, padding = 40, background = '#111116' }: any) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div
            ref={(ref) => connect(drag(ref))}
            style={{ padding: `${padding}px`, backgroundColor: background }}
            className="text-white text-center flex flex-col items-center justify-center border border-transparent hover:border-blue-500 relative"
        >
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-300">{subtitle}</p>
        </div>
    );
};

export const HeroSectionSettings = () => {
    const { actions: { setProp }, title, subtitle, padding, background } = useNode((node) => ({
        title: node.data.props.title,
        subtitle: node.data.props.subtitle,
        padding: node.data.props.padding,
        background: node.data.props.background,
    }));

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input
                    className="w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
                    value={title}
                    onChange={(e) => setProp((props: any) => props.title = e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm text-gray-400 mb-1">Subtitle</label>
                <textarea
                    className="w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
                    value={subtitle}
                    onChange={(e) => setProp((props: any) => props.subtitle = e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm text-gray-400 mb-1">Background Color</label>
                <input
                    type="color"
                    className="w-full bg-gray-800 border-none h-10 w-full"
                    value={background}
                    onChange={(e) => setProp((props: any) => props.background = e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm text-gray-400 mb-1">Padding Space ({padding}px)</label>
                <input
                    type="range" min="10" max="150"
                    className="w-full"
                    value={padding}
                    onChange={(e) => setProp((props: any) => props.padding = e.target.value)}
                />
            </div>
        </div>
    );
};

HeroSection.craft = {
    props: {
        title: 'Awesome Hero Title',
        subtitle: 'This is a description under the hero title that you can edit.',
        padding: 60,
        background: '#1a1a20',
    },
    related: {
        settings: HeroSectionSettings,
    }
};
