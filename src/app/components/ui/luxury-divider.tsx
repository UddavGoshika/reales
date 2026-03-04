import React from 'react';

export function LuxuryDivider() {
    return (
        <div className="w-full flex items-center justify-center py-4 bg-[#0B0B0D]">
            <div className="flex items-center gap-4 w-full max-w-[1440px] px-8">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-[#C6A75E] shadow-[0_0_10px_rgba(198,167,94,0.8)] rotate-45" />
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
            </div>
        </div>
    );
}
