import React from "react";
import { Content as TooltipPrimitiveContent } from "@radix-ui/react-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
    Tooltip as TooltipUI,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";

type TooltipProps = {
    trigger: JSX.Element;
    content: JSX.Element | string | React.ReactNode;
    contentProps?: typeof TooltipPrimitiveContent;
};

export const Tooltip: React.FC<TooltipProps> = ({
    trigger,
    content,
    contentProps,
}) => {
    return (
        <TooltipProvider>
            <TooltipUI>
                <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                <TooltipContent side="right" {...contentProps}>
                    {content}
                </TooltipContent>
            </TooltipUI>
        </TooltipProvider>
    );
};
