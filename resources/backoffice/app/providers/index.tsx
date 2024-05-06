import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            initialData: [],
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/admin">{children}</BrowserRouter>
        </QueryClientProvider>
    );
};
