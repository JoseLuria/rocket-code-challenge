import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { ChatProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>
);
