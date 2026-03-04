import React from 'react';

interface ArchitecturalCurvesProps {
    className?: string;
    opacity?: number;
}

export const ArchitecturalCurves: React.FC<ArchitecturalCurvesProps> = ({ className = '', opacity = 0.1 }) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
            <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-100 600C200 400 600 700 900 300C1200 -100 1500 500 1800 200"
                    stroke="#C6A75E"
                    strokeWidth="0.5"
                    strokeOpacity="0.6"
                />
                <path
                    d="M-200 450C150 250 500 600 800 200C1100 -200 1400 400 1700 100"
                    stroke="#C6A75E"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                />
                <circle cx="1200" cy="100" r="400" stroke="#C6A75E" strokeWidth="0.3" strokeOpacity="0.3" />
                <circle cx="200" cy="700" r="300" stroke="#C6A75E" strokeWidth="0.3" strokeOpacity="0.2" />

                {/* Architectural Grid Lines (Minimal) */}
                <line x1="0" y1="200" x2="1440" y2="200" stroke="#C6A75E" strokeWidth="0.2" strokeOpacity="0.1" />
                <line x1="0" y1="600" x2="1440" y2="600" stroke="#C6A75E" strokeWidth="0.2" strokeOpacity="0.1" />
                <line x1="400" y1="0" x2="400" y2="800" stroke="#C6A75E" strokeWidth="0.2" strokeOpacity="0.1" />
                <line x1="1040" y1="0" x2="1040" y2="800" stroke="#C6A75E" strokeWidth="0.2" strokeOpacity="0.1" />
            </svg>
        </div>
    );
};
