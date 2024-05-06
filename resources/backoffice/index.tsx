import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { Providers } from "./app/providers";

const root = createRoot(document.querySelector("#root")!);

root.render(
    <Providers>
        <App />
    </Providers>
);
