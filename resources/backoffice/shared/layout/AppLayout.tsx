import React, { PropsWithChildren } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <AppSidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <AppHeader />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    {children}
                    {/* <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                    </div> */}
                </main>
            </div>
        </div>
    );
};
