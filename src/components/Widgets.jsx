import { useState } from 'react';

export default function Widgets({ icon: Icon, label, appColor }) {
    return (
        <div className="flex flex-col items-center gap-2 active:scale-95 transition-transform duration-150">
            <div className={`w-12 h-12 rounded-[18px] sm:rounded-[22px] shadow-md flex items-center justify-center active:scale-95 transition bg-gradient-to-br ${appColor} backdrop-blur-md`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-gray-900 font-medium">{label}</span>
        </div>
    );
}
