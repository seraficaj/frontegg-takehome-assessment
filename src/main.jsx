import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
    baseUrl: "https://app-dxjx03vmag6q.frontegg.com",
    clientId: "4004bae9-21db-4511-8f5a-d93ad4f6fad1",
};

const authOptions = {
    // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FronteggProvider
            contextOptions={contextOptions}
            hostedLoginBox={true}
            authOptions={authOptions}
        >
            <App />
        </FronteggProvider>
    </React.StrictMode>
);
