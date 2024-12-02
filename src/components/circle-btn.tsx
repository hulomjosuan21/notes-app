import React, { ReactNode,memo } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface CircleBtnProps {
    tooltipText?: string;
    children: ReactNode;
}

const CircleBtn: React.FC<CircleBtnProps> = memo(({ tooltipText, children }) => {
    const button = (
        <button
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary"
            aria-label={tooltipText || "Button"}
        >
            {children}
        </button>
    );

    return tooltipText ? (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{button}</TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipText}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ) : (
        button
    );
});
CircleBtn.displayName = "CircleBtn";
export default CircleBtn;
