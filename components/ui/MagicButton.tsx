import React from 'react'

export const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;
}) => {
    return (
        <button className="relative inline-flex h-10 sm:h-11 md:h-12 w-full max-w-[280px] sm:max-w-[300px] md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none mt-4 sm:mt-6 md:mt-10" onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 sm:px-6 md:px-7 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl gap-1 sm:gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}
