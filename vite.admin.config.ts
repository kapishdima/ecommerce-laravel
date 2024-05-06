import { defineConfig } from "vite";

import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
    build: {
        manifest: "manifest.json",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/backoffice"),
            app: path.resolve(__dirname, "resources/backoffice/app"),
            shared: path.resolve(__dirname, "resources/backoffice/shared"),
            modules: path.resolve(__dirname, "resources/backoffice/modules"),
        },
    },

    plugins: [
        react(),
        laravel({
            input: ["resources/backoffice/index.tsx"],
            buildDirectory: "build/backoffice",
        }),
    ],
});
